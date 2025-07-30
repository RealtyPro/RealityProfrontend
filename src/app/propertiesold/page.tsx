import { Header } from "@/component/sharable/Header";
import '../../styles/globalStyles.css';
import  PropertyList  from "@/main-pages/properties/PropertyList";
import { NewsLetter } from "@/component/sharable/NewsLetter";
import { Footer } from "@/component/sharable/Footer";
export default function PropertiesPage() {
    return (
        <>
            <Header activeHeader={"properties"} />
            <PropertyList />
            <NewsLetter />
            <Footer />
        </>
    );
}