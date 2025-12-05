"use client";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { FaGlobe, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function AboutUsMainPage() {
  return (
    <section className="about-us-hero container mx-auto
    flex flex-col lg:flex-row items-center 
    gap-8 py-12 px-6 lg:px-24 padding2 marginTop6
   
    ">
      {/* max-w-7xl mx-auto */}
      {/* Left – hero image */}
      <div className="relative w-full lg:w-1/3 h-[650px] 
      sm:h-[400px]
       lg:h-[650px] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/images/ashenafi.jpeg"
          alt="About Ashenafi A Mendera"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Right – content */}
      <div className="lg:w-2/3   padd
ing2      ">
        <div className="overflow-y-auto scrollbar-thin 
        scrollbar-thumb-gray-400/60 scrollbar-track-transparent">
          <p className="second-header-text marginTop">
            Ashenafi A Mendera
            </p>
          {/* Contact – call now & website */}
          <div className="flex items-center gap-4 mb-6 text-[#EDB75E]" >
            <div className="flex items-center gap-2">
              <FiPhone color="#EDB75E" size={20} />
              <span className="font-medium">Call Now</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe color="#EDB75E" size={20} />
              <span className="font-medium ">AshenafiAMendera.com</span>
            </div>
          </div>
          <p className="advisor-desc marginTop">
            Ashenafi A Mendera is a dependable and accomplished real estate professional serving the greater Seattle area. She has called Redmond home for over 20 years, giving her a deep understanding of the local market and community.
          </p>
          <p className="advisor-desc">
            Ashenafi A Mendera’s clients are her top priority, and she is committed to walking with them every step of the way—from the initial consultation to closing. Her approachable personality, positive outlook, and cheerful demeanor make connecting with her effortless, fostering trust and collaboration.
          </p>
          <p className="advisor-desc">
            With a background in interior design and digital marketing, Lincy brings added value to her clients by offering expert advice on property staging and innovative marketing strategies. Whether you're buying your dream home, selling your current property, or expanding your investment portfolio, Lincy is honored to guide you and contribute to your success story.
          </p>
          <p className="advisor-desc">
            When you work with Lincy, you gain a partner who combines professional expertise with personalized care, ensuring no detail is overlooked. Her success is rooted in her clients’ success—because when you win, she wins.
          </p>
          {/* Social media icons */}

        </div>
        <div className="flex items-center gap-8 mt-8 text-[#B4955C] marginTop6">
          <FaFacebookF color="#EDB75E" size={24} />
          <FaInstagram color="#EDB75E" size={24} />
          <FaLinkedinIn color="#EDB75E" size={24} />
        </div>
      </div>
    </section>
  );
}