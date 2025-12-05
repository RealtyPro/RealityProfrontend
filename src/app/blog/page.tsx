
"use client"
import  BlogList  from '@/main-pages/blog/BlogList';
import '../../styles/globalStyles.css';
import FeaturedNewsList  from '@/main-pages/blog/FeaturedNewsList';
import FeaturedArticleList  from '@/main-pages/blog/FeaturedArticleList';
import { Footer } from '@/component/sharable/Footer';
import { Header } from '@/component/sharable/Header';
import { NewsLetter } from '@/component/sharable/NewsLetter';
// import { useBlogList } from '@/services/blog/BlogQueries';
export default function BlogPage() {
    //   const { data: blogListDatas, isLoading, error } = useBlogList();

    return (
        <>
        <Header  activeHeader={"blog"}/>
           

            <section className="hero-neighborhood">
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div>
                                <span className="menu-div yellow-text">Blog</span>

                            </div>

                            <span className="heading-text">Browse our news and article</span>
                            <p className="heading-sub-text">We’ve been representing buyers and sellers in Santa Barbara County for
                                over twenty years and we’re the top-producing independently owned real estate company in the
                                area.</p>
                        </div>

                        <div className="search-form property-search-field">
                            <div className="select-field">
                                <input placeholder="Search by city, country, ZIP " className="search-input" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <path
                                        d="M16.2969 29.166C23.5456 29.166 29.4219 23.2898 29.4219 16.041C29.4219 8.79228 23.5456 2.91602 16.2969 2.91602C9.04814 2.91602 3.17188 8.79228 3.17188 16.041C3.17188 23.2898 9.04814 29.166 16.2969 29.166Z"
                                        stroke="#EDB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M27.8612 30.1719C28.6341 32.5052 30.3987 32.7385 31.7549 30.6969C32.9945 28.8302 32.1778 27.2989 29.932 27.2989C28.2695 27.2844 27.3362 28.5823 27.8612 30.1719Z"
                                        stroke="#EDB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="prop-container">
                <div className="container">

                    <div className="section-header ">
                        <div className="column">
                            <span className="blog-heading-text">Our Latest News and Articles</span>
                            <div className="properties-grid">
                                <BlogList />

                            </div>

                        </div>
                        <div className="column feature-blog feature-blog-container">

                            <span className="blog-featured-heading">Features News</span>
                            <FeaturedNewsList />
                            <span className="blog-featured-heading mt10">Features Article</span>
                            <FeaturedArticleList />
                        </div>
                    </div>
                </div>
    
            <NewsLetter />
               <Footer />
            </section>

        </>
    )
}