import { Footer } from "@/component/sharable/Footer";
import { Header } from "@/component/sharable/Header";
import AboutUsMainPage from "@/main-pages/about-us/AboutUsMainPage";

export default function AboutUsPage() {
    return (
        <div>
            {/* Header  */}
            <Header activeHeader={"about-us"} />
           <AboutUsMainPage />

            <Footer />
        </div>

    );
}