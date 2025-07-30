import FilterTop from "@/component/mlsSearchMenu/filterTop";
import { MlsListingOptions } from "@/component/mlsSearchMenu/MlsListingOptions";
import { Footer } from "@/component/sharable/Footer";
import { Header } from "@/component/sharable/Header";
import MlsSerchHomePage  from "@/main-pages/mlssearch/MlsSearchHomePage";

const MLSSeachPage = () => {
    return (
        <>
            <Header activeHeader={"mls-search"} />
          <MlsSerchHomePage />
            <Footer />
        </>
    );
}

export default MLSSeachPage;