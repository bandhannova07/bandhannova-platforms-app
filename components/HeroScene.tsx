'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function CursorSphere() {
    const meshRef = useRef<THREE.Mesh>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const { viewport } = useThree();

    // Track mouse
    useFrame(({ pointer }) => {
        mousePos.current.x = pointer.x;
        mousePos.current.y = pointer.y;

        if (meshRef.current) {
            meshRef.current.rotation.x += 0.003;
            meshRef.current.rotation.y += 0.005;

            // Smooth follow
            meshRef.current.position.x +=
                (mousePos.current.x * viewport.width * 0.15 - meshRef.current.position.x) * 0.04;
            meshRef.current.position.y +=
                (mousePos.current.y * viewport.height * 0.15 - meshRef.current.position.y) * 0.04;
        }
    });

    const gradient = useMemo(() => {
        return new THREE.Color('#6366f1');
    }, []);

    return (
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
            <mesh ref={meshRef} scale={2.2}>
                <icosahedronGeometry args={[1, 4]} />
                <MeshDistortMaterial
                    color={gradient}
                    emissive="#3b82f6"
                    emissiveIntensity={0.3}
                    roughness={0.2}
                    metalness={0.8}
                    distort={0.35}
                    speed={2}
                    transparent
                    opacity={0.85}
                />
            </mesh>
        </Float>
    );
}

function Particles() {
    const count = 80;
    const meshRef = useRef<THREE.InstancedMesh>(null);

    const particles = useMemo(() => {
        const positions = [];
        const scales = [];
        for (let i = 0; i < count; i++) {
            positions.push({
                x: (Math.random() - 0.5) * 16,
                y: (Math.random() - 0.5) * 10,
                z: (Math.random() - 0.5) * 8 - 3,
            });
            scales.push(Math.random() * 0.03 + 0.01);
        }
        return { positions, scales };
    }, []);

    useFrame(({ clock }) => {
        if (!meshRef.current) return;
        const time = clock.getElapsedTime();
        const dummy = new THREE.Object3D();

        for (let i = 0; i < count; i++) {
            const p = particles.positions[i];
            dummy.position.set(
                p.x + Math.sin(time * 0.3 + i) * 0.5,
                p.y + Math.cos(time * 0.2 + i * 0.5) * 0.3,
                p.z
            );
            dummy.scale.setScalar(particles.scales[i]);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color="#60a5fa" transparent opacity={0.4} />
        </instancedMesh>
    );
}

export default function HeroScene() {
    return (
        <div className="hero-canvas">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} color="#e0e7ff" />
                <pointLight position={[-3, -2, 4]} intensity={0.5} color="#818cf8" />
                <pointLight position={[3, 2, 2]} intensity={0.4} color="#60a5fa" />
                <CursorSphere />
                <Particles />
            </Canvas>
        </div>
    );
}
