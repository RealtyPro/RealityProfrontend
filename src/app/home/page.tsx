import * as React from "react";
import '../../styles/globalStyles.css';
import NewsArticleList from "@/main-pages/home/NewsArticleList";
import TestimonialList from "@/main-pages/home/TestmonialList";
import { Footer } from "@/component/sharable/Footer";
import { Header } from "@/component/sharable/Header";
import PropertyHomeList from "@/main-pages/home/PropertyHomeList";
import NeighborhoodHomeList from "@/main-pages/home/NeighborhoodHomeList";
import SearchContainer from "@/main-pages/home/SearchContainer";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { NewsLetter } from "@/component/sharable/NewsLetter";


export default function HomePage() {

    return (
        <div >
            {/* Header  */}
            <Header activeHeader={"home"} />

            {/* <!-- Hero Section --> */}
            <section className="hero" style={{ backgroundImage: "url('images/hero-background.png')" }}>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <span className="heading-text">Find your dream Property</span>
                            <p className="heading-sub-text">Explore Neighborhoods, and Get Real-Time Estimates with Trusted global
                                advisor.</p>
                        </div>

                        <div className="search-form">
                            <SearchContainer />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- About Section --> */}
            <section className="about">
                <div className="container">
                    <div className="section-header">
                        <span className="second-header-text">Mastery meets Personalization.</span>
                        <p>The Wall Street Journal, they rank in the top 1.5% of all agents, consistently delivering exceptional
                            results. The Wall Street Journal, they rank.</p>
                    </div>

                    {/* <!-- Home Worth Section --> */}
                    <section className="home-worth" style={{ backgroundImage: "url('images/home-worth-image.png')" }}>
                        <div className="home-worth-overlay"></div>
                        <div className="container">
                            <div className="home-worth-content">
                                <h2>Your Home Worth</h2>
                                <button className="btn-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"
                                        fill="none">
                                        <path d="M24.0508 21.3359L38.9288 22.3824L37.8824 37.2604" stroke="#010104"
                                            strokeWidth="3.19149" strokeMiterlimit="10" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M19.2539 39.4727L38.7069 22.5762" stroke="#010104" strokeWidth="3.19149"
                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                        </div>

                    </section>


                    <div className="about-content abouthome">

                        <div className="about-image">
                            <img src="/images/lincy-home-img.jpeg" alt="Trusted Global Advisor" />
                            <div className="advisor-card">
                                <div className="advisor-info">
                                    <span className="third-header-text">Lincy Mathew</span>
                                    <p className="advisor-title">Trusted Agent</p>
                                    <p className="advisor-desc">Lincy Mathew is a dependable and accomplished real estate professional serving the greater Seattle area. She has called Redmond home for over 20 years, giving her a deep understanding of the local market and community.

                                        Lincy’s clients are her top priority, and she is committed to walking with them every step of the way—from the initial consultation to closing. Her approachable personality, positive outlook, and cheerful demeanor make connecting with her effortless, fostering trust and collaboration.
                                    </p>
                                    <button className="btn-primary">Send Inquire</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- Properties Section --> */}
            <section className="properties">
                <div className="container">
                    <div className="section-header">
                        <span className="second-header-text">Find our Features Properties</span>
                        <p className="nomt">The Wall Street Journal, they rank in the top 1.5% of all agents, consistently
                            delivering exceptional
                            results. The Wall Street Journal, they rank.</p>
                    </div>

                    <PropertyHomeList />


                </div>
            </section>
            {/* <!-- Neighborhoods Section --> */}
            <NeighborhoodHomeList />
            {/* <!-- Testimonials Section --> */}
            {/* <section className="testimonials">


                <div className="container">
                    <div className="testimonials-header">
                        <div className="testimonials-text">
                            <span className="section-label">Testimonials</span>
                            <h2>What our customers Say about us</h2>
                        </div>
                        <div className="testimonials-nav">
                            <button className="nav-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="43" viewBox="0 0 44 43" fill="none">
                                    <path d="M17.752 10.7031L7.08852 21.3666L17.752 32.03" stroke="#EDB75E"
                                        strokeWidth="3.37295" strokeMiterlimit="10" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path d="M36.9531 21.3633H7.38714" stroke="#EDB75E" strokeWidth="3.37295"
                                        strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="nav-arrow nav-arrow-bgbutton">
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                    <path d="M25.7969 10.6992L36.4603 21.3627L25.7969 32.0261" stroke="black"
                                        strokeWidth="3.37295" strokeMiterlimit="10" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path d="M6.59766 21.3633H36.1636" stroke="black" strokeWidth="3.37295"
                                        strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <TestimonialList />

                    <div className="testimonial-advisor">
                        <img src="images/review.png" alt="Advisor" className="advisor-avatar" />
                    </div>
                </div>
            </section> */}
            {/* <!-- News & Articles Section --> */}
            <section className="news-home">
                <div className="container">
                    <div className="section-header ">
                        <div className="flex column">
                            <div className="second-header-text">Browse our News <br />and Article<br /></div>
                            <p >Top priority, and she is <br />committed to
                                walking with
                                them</p>
                        </div>


                        <div className="nav-arrows">
                            <button className="nav-arrow">

                                <IoIosArrowRoundBack color="#EDB75E" size={40} />
                            </button>
                            <button className="nav-arrow nav-arrow-bgbutton">

                                <IoIosArrowRoundForward color="white" size={40} />

                            </button>
                        </div>
                    </div>

                    {/* <div className="news-grid">
                        <article className="news-card">
                            <div className="news-image">
                                <img src="images/image1.png" alt="Article" />
                            </div>
                            <div className="news-content">
                                <time>14 Feb, 2025</time>
                                <h3>The more important the work, More important the rest</h3>
                                <button className="read-more-btn">Read More</button>
                            </div>
                        </article>

                        <article className="news-card">
                            <div className="news-image">
                                <img src="images/image2.png" alt="Article" />
                            </div>
                            <div className="news-content">
                                <time>14 Feb, 2025</time>
                                <h3>The more important the work, More important the rest</h3>
                                <button className="read-more-btn">Read More</button>
                            </div>
                        </article>

                        <article className="news-card">
                            <div className="news-image">
                                <img src="images/image3.png" alt="Article" />
                            </div>
                            <div className="news-content">
                                <time>14 Feb, 2025</time>
                                <h3>The more important the work, More important the rest</h3>
                                <button className="read-more-btn">Read More</button>
                            </div>
                        </article>
                    </div> */}
                    <NewsArticleList />

                    {/* <div className="section-cta">
                        <button 
                        onClick={()=>handleBlog()}
                        className="btn-secondary">See All News & Articles</button>
                    </div> */}
                </div>
            </section>
            {/* <!-- Newsletter Section --> */}
            {/* <section className="newsletter" style={{ backgroundImage: "url('images/footer.png')" }}>
                <div className="newsletter-overlay"></div>
                <div className="container">
                    <div className="newsletter-content">
                        <h2>Subscribe our newsletter</h2>
                        <p>Top priority, and she is committed to walking with them consistently walking.</p>
                        <form className="newsletter-form">
                            <div className="flex justify-space-between mt-4 text-white">
                                <input type="email" placeholder="Email Address" required
                                    className="bg-white text-black  flex-grow p-3 marginRight rounded-[10px] newsletter-email "
                                />
                                <button type="submit" className="btn-subscribe marginLeft-10 rounded-[10px]">
                                    Subscribe
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16"
                                        fill="none">
                                        <path
                                            d="M1.5 7C0.947715 7 0.5 7.44772 0.5 8C0.5 8.55228 0.947715 9 1.5 9V7ZM20.2071 8.70711C20.5976 8.31658 20.5976 7.68342 20.2071 7.29289L13.8431 0.928932C13.4526 0.538408 12.8195 0.538408 12.4289 0.928932C12.0384 1.31946 12.0384 1.95262 12.4289 2.34315L18.0858 8L12.4289 13.6569C12.0384 14.0474 12.0384 14.6805 12.4289 15.0711C12.8195 15.4616 13.4526 15.4616 13.8431 15.0711L20.2071 8.70711ZM1.5 8V9H19.5V8V7H1.5V8Z"
                                            fill="black" />
                                    </svg>
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </section> */}
            <NewsLetter />

            {/* <!-- Footer --> */}
            <Footer />
        </div>
    )
}