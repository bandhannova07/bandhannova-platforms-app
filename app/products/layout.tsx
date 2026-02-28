import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Library",
    description:
        "Explore the complete BandhanNova ecosystem of AI-powered products, including AI Hub, Bani AI, Smartpedia, Academy, and more.",
    keywords: [
        "BandhanNova Products",
        "AI Hub",
        "Bani AI",
        "Smartpedia",
        "BandhanNova Academy",
        "BSCCA",
        "AI tools India",
        "Product catalog",
    ],
    openGraph: {
        title: "BandhanNova Product Library | AI-Powered Ecosystem",
        description: "Explore our suite of intelligent tools designed to power your digital life.",
        url: "https://www.bandhannova.in/products",
    },
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
