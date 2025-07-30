"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { FaSearch, FaHeart, FaBookmark, FaChartBar, FaUser, FaUserTie, FaHome, FaPlus } from "react-icons/fa";
const sidebarLinks = [
    { label: "Search", icon: <FaSearch />, href: "/search" },
    { label: "Collection", icon: <FaHeart />, href: "/collection" },
    { label: "Saved Searches", icon: <FaBookmark />, href: "/saved-searches" },
    { label: "Market Report", icon: <FaChartBar />, href: "/market-report" },
    { label: "Profile", icon: <FaUser />, href: "/profile" },
    { label: "My Agent", icon: <FaUserTie />, href: "/my-agent" },
];
interface sidebarProps{
    activeSidebar: string;
}
export const Sidebar = ({activeSidebar}:sidebarProps) => {

    const router = useRouter();
    return (
        <aside className="w-64 flex flex-col py-8 px-4 bg-[#171717] border-r border-[#222]">
            <div className="mb-10 flex items-center gap-2 px-2">
                {/* <span className="text-2xl font-bold tracking-wide">Lavalite</span> */}
            </div>
            <nav className="flex flex-col gap-2 paddingLeft-10 sidebar">
                {sidebarLinks.map(link => (
                    <button
                        key={link.label}
                        onClick={() => router.push(link.href)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-full
                             transition sidebar-button
                        ${link.label === activeSidebar ? "bg-[#EDB75E] text-black font-semibold" :
                                "hover:bg-[#232323]"}
                      `}
                    >
                        <span className="text-lg">{link.icon}</span>
                        <span className="text-base">{link.label}</span>
                    </button>
                ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2">
                {/* Add more sidebar items if needed */}
            </div>
        </aside>
    );
}