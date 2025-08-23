import { DashboardHeader } from "@/component/sharable/DashboardHeader";
import { Footer } from "@/component/sharable/Footer";
import { Header } from "@/component/sharable/Header";
import { Sidebar } from "@/component/sharable/Sidebar";
import ProfilePage from "@/main-pages/dashboard/Profile";

export default function Profile() {
    return (
        <div className="min-h-screen flex flex-col bg-[black] text-white">
            {/* <DashboardHeader activeHeader="collection" /> */}
            <Header activeHeader="dashboard" />
            <div className="w-full bg-[#171717] flex-1">
                <div className="h-[9vh]"></div>
                <div className="w-full flex justify-center items-center bg-[#171717] border-b border-[#232323]">
                    <div className="container mx-auto flex justify-center items-stretch flex-1">
                        <div className="flex flex-1 min-h-0 bg-[#171717] w-full ">
                            <Sidebar activeSidebar="Profile" />
                            <ProfilePage />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[black] text-white">
                <Footer />

            </div>
        </div>
    )
}
