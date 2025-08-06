import { Header } from "@/component/sharable/Header";
import { Footer } from "@/component/sharable/Footer";
import { Sidebar } from "@/component/sharable/Sidebar";
import ColloctionPage  from "@/main-pages/dashboard/CollectionPage";
import { DashboardHeader } from "@/component/sharable/DashboardHeader";
import  FavouritesPage  from "@/main-pages/dashboard/FavouritesPage";

export default function CollectionFavouritesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#171717] text-white">
            {/* <DashboardHeader activeHeader="collection" /> */}
            <Header activeHeader="dashboard" />
            <div className="h-[9vh]"></div>
            <div className="flex flex-1 min-h-0 bg-[#171717]">
                <Sidebar activeSidebar="Collection" />
                <FavouritesPage />
            </div>
            <div className="bg-[black] text-white">
                <Footer />

            </div>
        </div>
    );
}