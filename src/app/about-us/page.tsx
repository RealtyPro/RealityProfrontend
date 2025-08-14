import { Footer } from "@/component/sharable/Footer";
import { Header } from "@/component/sharable/Header";
import AboutUsMainPage from "@/main-pages/about-us/AboutUsMain";
import { FeturedPropertyList } from "@/main-pages/about-us/FeaturedPropertyList";

export default function AboutUsPage() {
    return (
        <div>
            {/* Header  */}
            <Header activeHeader={"about-us"} />
           <AboutUsMainPage />
           <FeturedPropertyList />

            <Footer />
        </div>

    );
}