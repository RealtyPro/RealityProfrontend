import Image from "next/image";

export default function ContactUsMainPage() {
    return (
        <>
            <section className="hero" >
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div>
                                <span className="menu-div yellow-text">Contact us</span>
                            </div>
                            <span className="heading-text">Let me know, How can I assist you</span>
                            <p className="heading-sub-text">We’ve been representing buyers and sellers in Santa Barbara County for over twenty years and we’re the top-producing independently owned real estate company in the area.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Get In Touch Section */}
            <section className="contact-section">
                <div className="contact-grid">
                    <div className="contact-left">
                        <h2>Get In Touch</h2>
                        <p className="sub">Santa Barbara County for over twenty years and we're</p>
                        <form className="contact-form">
                            <input type="text" placeholder="First Name"
                                className="bg-[#000000] border border-[#313131]" />
                            <input type="text" placeholder="Last Name" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Phone" />
                            <textarea placeholder="Message" className="full" />
                        </form>
                        <p className="contact-info">By submitting this form I agree to be contacted by Lavalite. This includes receiving automated calls, texts and emails about real estate, finance and related topics.</p>
                        <div className="contact-submit"><button className="btn-primary">Submit</button></div>
                    </div>
                    <div className="contact-right">
                        <Image src="/images/contactusimg.png" alt="location" fill style={{ objectFit: 'cover' }} />
                        <div className="contact-overlay"></div>
                        <div className="contact-details paddingLeft-10">
                            <h3 className="contactus-heading mb5">Lavalite LLC</h3>
                            <p className="mt15 contact-emai ">lavalite@gmail.com</p>
                            <p className="marginTop contact-emai">+0123 456 7890</p>
                            <p className="mt15 contact-emai ">517 Washington Ave.<br />Manchester, Kentucky 39495</p>
                            <div className="social-links left-justify">
                                <a href="#" className="social-link ">

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
                </div>
            </section>
        </>
    )
}