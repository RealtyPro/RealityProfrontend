"use client";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { FaGlobe, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function AboutUsMainPage() {
  return (
    <section className="about-us-hero 
    flex flex-col lg:flex-row items-center 
    gap-8 py-12 px-6 lg:px-24 padding2 marginTop6
   
    ">
      {/* max-w-7xl mx-auto */}
      {/* Left – hero image */}
      <div className="relative w-full lg:w-1/3 h-[650px] 
      sm:h-[400px]
       lg:h-[650px] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/images/lincy-pic.jpg"
          alt="About lincy mathew"
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
          <h1 className="text-4xl lg:text-5xl font-serif font-semibold mb-4 leading-tight marginTop">
            Lincy Mathew
            </h1>
          {/* Contact – call now & website */}
          <div className="flex items-center gap-4 mb-6 text-[#B4955C] marginTop6" >
            <div className="flex items-center gap-2">
              <FiPhone className="text-gray-500" size={20} />
              <span className="font-medium">Call Now</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe size={20} />
              <span className="font-medium ">lincymathew.com</span>
            </div>
          </div>
          <p className="text-lg leading-relaxed mb-4 text-white-700 marginTop">
            Lincy Mathew is a dependable and accomplished real estate professional serving the greater Seattle area. She has called Redmond home for over 20 years, giving her a deep understanding of the local market and community.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-white-700">
            Lincy’s clients are her top priority, and she is committed to walking with them every step of the way—from the initial consultation to closing. Her approachable personality, positive outlook, and cheerful demeanor make connecting with her effortless, fostering trust and collaboration.
          </p>
          <p className="text-lg leading-relaxed text-white-700">
            With a background in interior design and digital marketing, Lincy brings added value to her clients by offering expert advice on property staging and innovative marketing strategies. Whether you're buying your dream home, selling your current property, or expanding your investment portfolio, Lincy is honored to guide you and contribute to your success story.
          </p>
          <p className="text-lg leading-relaxed text-white-700">
            When you work with Lincy, you gain a partner who combines professional expertise with personalized care, ensuring no detail is overlooked. Her success is rooted in her clients’ success—because when you win, she wins.
          </p>
          {/* Social media icons */}

        </div>
        <div className="flex items-center gap-8 mt-8 text-[#B4955C] marginTop6">
          <FaFacebookF size={24} />
          <FaInstagram size={24} />
          <FaLinkedinIn size={24} />
        </div>
      </div>
    </section>
  );
}