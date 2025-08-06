import { DashboardHeader } from "@/component/sharable/DashboardHeader";
import { Footer } from "@/component/sharable/Footer";
import { Header } from "@/component/sharable/Header";
import { Sidebar } from "@/component/sharable/Sidebar";
import ProfilePage  from "@/main-pages/dashboard/Profile";

export default function Profile() {
    return(
        <div className="min-h-screen flex flex-col bg-[#171717] text-white">
                    {/* <DashboardHeader activeHeader="collection" /> */}
                    <Header activeHeader="dashboard" />
                    <div className="h-[9vh]"></div>
                    <div className="flex flex-1 min-h-0 bg-[#171717]">
                        <Sidebar activeSidebar="Profile" />
                        <ProfilePage />
                    </div>
                    <div className="bg-[black] text-white">
                        <Footer />
        
                    </div>
                </div>
    )
}
