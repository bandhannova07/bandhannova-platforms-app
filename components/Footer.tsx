import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-grid">
                    <div>
                        <a href="/">
                            <Image
                                src="/bandhannova-logo-final.svg"
                                alt="BandhanNova"
                                width={200}
                                height={40}
                            />
                        </a>
                        <p className="footer-brand-desc">
                            A unified digital platform powering AI assistants, messaging, education, knowledge search, and more — designed and built in India for the world.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Products</h4>
                        <a href="https://ai.bandhannova.in" target="_blank" rel="noopener noreferrer">AI Hub</a>
                        <a href="https://bani.bandhannova.in" target="_blank" rel="noopener noreferrer">Bani AI</a>
                        <a href="https://chat.bandhannova.in" target="_blank" rel="noopener noreferrer">Chat</a>
                        <a href="https://smartpedia.bandhannova.in" target="_blank" rel="noopener noreferrer">Smartpedia</a>
                        <a href="https://academy.bandhannova.in" target="_blank" rel="noopener noreferrer">Academy</a>
                        <a href="https://blogs.bandhannova.in" target="_blank" rel="noopener noreferrer">Blogs</a>
                        <a href="https://bscca.bandhannova.in" target="_blank" rel="noopener noreferrer">BSCCA</a>
                    </div>

                    <div className="footer-col">
                        <h4>Resources</h4>
                        <a href="https://support.bandhannova.in" target="_blank" rel="noopener noreferrer">Support</a>
                        <a href="https://support.bandhannova.in/status" target="_blank" rel="noopener noreferrer">Status</a>
                        <a href="https://policies.bandhannova.in" target="_blank" rel="noopener noreferrer">Policies</a>
                        <a href="https://policies.bandhannova.in/terms" target="_blank" rel="noopener noreferrer">Terms</a>
                        <a href="https://policies.bandhannova.in/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
                        <a href="https://policies.bandhannova.in/faq" target="_blank" rel="noopener noreferrer">FAQ</a>
                    </div>

                    <div className="footer-col">
                        <h4>Account</h4>
                        <a href="https://accounts.bandhannova.in/signin" target="_blank" rel="noopener noreferrer">Sign In</a>
                        <a href="https://accounts.bandhannova.in/signup" target="_blank" rel="noopener noreferrer">Create Account</a>
                        <a href="https://myaccount.bandhannova.in" target="_blank" rel="noopener noreferrer">My Account</a>
                        <a href="mailto:support@bandhannova.in">Contact</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} BandhanNova Platforms. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}
