import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-top">
                    {/* Brand */}
                    <div className="footer-brand">
                        <Image src="/bandhannova-logo-final.svg" alt="BandhanNova" width={160} height={32} style={{ filter: 'brightness(2)' }} />
                        <p>
                            A unified digital platform powering AI, messaging, education, and more — designed and built in India.
                        </p>
                    </div>

                    {/* Products */}
                    <div className="footer-col">
                        <h4>Products</h4>
                        <a href="https://ai.bandhannova.in" target="_blank" rel="noopener noreferrer">AI Hub</a>
                        <a href="https://bani.bandhannova.in" target="_blank" rel="noopener noreferrer">Bani AI</a>
                        <a href="https://chat.bandhannova.in" target="_blank" rel="noopener noreferrer">Chat</a>
                        <a href="https://smartpedia.bandhannova.in" target="_blank" rel="noopener noreferrer">Smartpedia</a>
                        <a href="https://academy.bandhannova.in" target="_blank" rel="noopener noreferrer">Academy</a>
                        <a href="https://blogs.bandhannova.in" target="_blank" rel="noopener noreferrer">Blogs</a>
                    </div>

                    {/* Company */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <a href="https://policies.bandhannova.in/terms" target="_blank" rel="noopener noreferrer">Terms</a>
                        <a href="https://policies.bandhannova.in/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
                        <a href="https://policies.bandhannova.in/faq" target="_blank" rel="noopener noreferrer">FAQ</a>
                        <a href="https://support.bandhannova.in" target="_blank" rel="noopener noreferrer">Support</a>
                    </div>

                    {/* Account */}
                    <div className="footer-col">
                        <h4>Account</h4>
                        <a href="https://accounts.bandhannova.in/signin" target="_blank" rel="noopener noreferrer">Sign In</a>
                        <a href="https://accounts.bandhannova.in/signup" target="_blank" rel="noopener noreferrer">Sign Up</a>
                        <a href="https://myaccount.bandhannova.in" target="_blank" rel="noopener noreferrer">My Account</a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} BandhanNova Platforms. All rights reserved.</span>
                    <span>Built with ❤️ in India 🇮🇳</span>
                </div>
            </div>
        </footer>
    );
}
