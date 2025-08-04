import { Footer } from "@/component/sharable/Footer";
import { Header } from "@/component/sharable/Header";
import ContactUsMainPage from "@/main-pages/contact-us/ContactUsMainPage";

export default function ContactUsPage() {
    return (
        <div>
            {/* Header  */}
            <Header activeHeader={"contact-us"} />
            <ContactUsMainPage />
            <Footer />
        </div>

    );
}