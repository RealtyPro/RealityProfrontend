import { Header } from "@/component/sharable/Header";
import { Footer } from "@/component/sharable/Footer";
import { Sidebar } from "@/component/sharable/Sidebar";
import ColloctionPage  from "@/main-pages/dashboard/CollectionPage";
import { DashboardHeader } from "@/component/sharable/DashboardHeader";

export default function DashboardPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#171717] text-white">
            {/* <DashboardHeader activeHeader="collection"/> */}
            <Header activeHeader="dashboard" />
            <div className="h-[9vh]"></div>
            <div className="flex flex-1 min-h-0 bg-[#171717]">
                <Sidebar activeSidebar="Collection"/>
                {/* <main className="flex-1 p-10 bg-[#1a1a1a] overflow-auto">
ColloctionPage       
 </main> */}
                <ColloctionPage />
            </div>
            <div className="bg-[black] text-white">
                <Footer />

            </div>
        </div>
    );
}