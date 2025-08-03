import '../../styles/globalStyles.css';
import Image from "next/image";
export const Footer = () => {

    return (
        <footer className="footer bg-[black] text-white bgblack">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="64" viewBox="0 0 49 64"
                                fill="none">
                                <path
                                    d="M37.1016 39.5703C40.0576 39.5704 42.7454 40.4279 44.7012 41.8281C46.6317 43.2103 47.8637 45.1373 47.8945 47.2959L47.8984 47.2979V47.4727L47.8975 55.5947V55.8721H47.8877C47.7836 57.872 46.5628 59.6137 44.6934 60.8604C42.7375 62.1646 40.0522 62.9462 37.1016 62.9463C34.1508 62.9463 31.4648 62.1647 29.5088 60.8604C27.6394 59.6137 26.4196 57.8719 26.3154 55.8721H26.3047V55.3174L26.3076 47.5605V47.46C26.3072 47.433 26.3047 47.406 26.3047 47.3789C26.3047 45.1867 27.5466 43.228 29.502 41.8281C31.4578 40.428 34.1455 39.5703 37.1016 39.5703ZM46.2002 51.584C45.7676 52.0731 45.2653 52.5258 44.7012 52.9297C42.7454 54.3299 40.0575 55.1875 37.1016 55.1875C34.1456 55.1875 31.4577 54.3297 29.502 52.9297C28.9381 52.526 28.4354 52.0738 28.0029 51.585V55.5947L28.0137 55.9014C28.1264 57.4194 29.0758 58.6894 30.6133 59.6074C32.2565 60.5885 34.5487 61.1494 37.1016 61.1494C39.6543 61.1494 41.9457 60.5884 43.5889 59.6074C45.1265 58.6894 46.0758 57.4195 46.1885 55.9014L46.2002 55.5947V51.584ZM37.1016 41.1719C34.5591 41.1719 32.2715 41.8542 30.6279 42.9756C28.9853 44.0964 28.0029 45.6405 28.0029 47.3789L28.0146 47.7021C28.1286 49.3084 29.0879 50.7315 30.6279 51.7822C32.2715 52.9036 34.5592 53.5859 37.1016 53.5859C39.644 53.5859 41.9317 52.9036 43.5752 51.7822C45.1152 50.7315 46.0746 49.3083 46.1885 47.7021L46.2002 47.3789L46.1885 47.0547C46.0744 45.4488 45.1149 44.0262 43.5752 42.9756C41.9317 41.8542 39.644 41.1719 37.1016 41.1719Z"
                                    fill="white" stroke="white" strokeWidth="0.554688" />
                                <path
                                    d="M11.5195 0.742188C14.4755 0.742238 17.1634 1.59982 19.1191 3C21.0497 4.3822 22.2817 6.30919 22.3125 8.46777L22.3164 8.46973V8.64453L22.3154 55.5947V55.8721H22.3057C22.2015 57.872 20.9808 59.6137 19.1113 60.8604C17.1554 62.1646 14.4702 62.9462 11.5195 62.9463C8.56872 62.9463 5.88273 62.1647 3.92676 60.8604C2.05737 59.6137 0.837525 57.8719 0.733398 55.8721H0.722656V55.5947L0.725586 8.73242V8.63184C0.725207 8.60484 0.722657 8.57785 0.722656 8.55078C0.722656 6.35862 1.9646 4.39986 3.91992 3C5.87573 1.59984 8.5635 0.742188 11.5195 0.742188ZM20.6182 12.7559C20.1855 13.245 19.6833 13.6977 19.1191 14.1016C17.1634 15.5017 14.4755 16.3593 11.5195 16.3594C8.56362 16.3594 5.87571 15.5016 3.91992 14.1016C3.3561 13.6979 2.85338 13.2456 2.4209 12.7568V55.5947L2.43164 55.9014C2.54433 57.4194 3.49376 58.6894 5.03125 59.6074C6.67444 60.5885 8.96665 61.1494 11.5195 61.1494C14.0723 61.1494 16.3637 60.5884 18.0068 59.6074C19.5444 58.6894 20.4937 57.4195 20.6064 55.9014L20.6182 55.5947V12.7559ZM11.5195 2.34375C8.97703 2.34375 6.68948 3.02605 5.0459 4.14746C3.40323 5.26825 2.4209 6.81235 2.4209 8.55078L2.43262 8.87402C2.54653 10.4802 3.50586 11.9033 5.0459 12.9541C6.68947 14.0754 8.97714 14.7578 11.5195 14.7578C14.0619 14.7578 16.3496 14.0755 17.9932 12.9541C19.5331 11.9033 20.4925 10.4802 20.6064 8.87402L20.6182 8.55078L20.6064 8.22656C20.4924 6.62068 19.5328 5.1981 17.9932 4.14746C16.3496 3.02608 14.0619 2.3438 11.5195 2.34375Z"
                                    fill="white" stroke="white" strokeWidth="0.554688" />
                            </svg>
                            <span>Lavalite</span>
                        </div>
                        <p>Our extensive collection of child themes are beautiful and designed to convert, and they'll
                            save
                            you a ton of time over building websites from scratch.
                        </p>
                        <p className="mt2"> Our extensive collection of child
                            themes
                            are beautiful</p>
                        <div className="footer-social mt5">
                            <div className="social-links">
                                <a href="#" className="social-link">

                                    <Image
                                        className="footer-facebook-icon"
                                        src="/images/footer-facebook-Icon.png"
                                        alt="facebook-icon"
                                        width={24}
                                        height={24}
                                    />

                                </a>
                                <a href="#" className="social-link">
                                    <Image
                                        className="footer-icon"
                                        src="/images/footer-twiterIcon.png"
                                        alt="facebook-icon"
                                        width={24}
                                        height={24}
                                    />

                                </a>
                                <a href="#" className="social-link">
                                    <Image
                                        className="footer-icon"
                                        src="/images/footer-cat-Icon.png"
                                        alt="facebook-icon"
                                        width={24}
                                        height={24}
                                    />

                                </a>
                                <a href="#" className="social-link">
                                    <Image
                                        className="footer-icon"
                                        src="/images/footer-eye-Icon.png"
                                        alt="facebook-icon"
                                        width={24}
                                        height={24}
                                    />

                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us </a></li>
                                
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Learn</h4>
                            <ul>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Articles</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Listing</h4>
                            <ul>
                                <li><a href="#">Properties</a></li>
                                <li><a href="#">Neibourhoods</a></li>
                                <li><a href="#">Blogs</a></li>
                            </ul>
                        </div>
                    </div>


                </div>

                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="footer-legal">
                        <p>&copy; 2025 Lavalite, All Rights Reserved</p>
                        <p>Privacy Policy | Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}