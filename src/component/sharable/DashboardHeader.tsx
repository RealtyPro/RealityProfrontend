"use client";
import { useEffect, useState } from "react";
import { postUserLogout } from "@/services/profile/ProfileServices";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { FaHeart, FaBookmark, FaSearch, FaUser, FaTimesCircle } from "react-icons/fa";
interface headerProps {
    activeHeader: string;
}
export const DashboardHeader = ({ activeHeader }: headerProps) => {
    // Read sessionStorage only in the browser
    const [username, setUsername] = useState<string | null>(null);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setUsername(sessionStorage.getItem("customer_name"));
        }
    }, []);

    const postLogoutMutation = useMutation({
        mutationFn: () => postUserLogout(),

        onSuccess: (data) => {
            sessionStorage.clear();
            if (typeof window !== "undefined") {
                sessionStorage.clear();
                window.location.href = "/home";
            }

        },
        onError: (error) => {
            console.error("Error  while creating new blog:", error);
        },
    });
    const handleLogout = () => {
        postLogoutMutation.mutate();
    }
    return (
        <div className="fixed top-0 left-0 w-full 
    h-10 z-50 bg-black flex items-center border-b border-[#232323] px-8  ">
            {/* Logo */}
            <div className="flex items-center mr-8 ">
            </div>
            {/* Navigation */}
            <div className="container ">
 <nav className="flex-1 flex space-x-8 justify-center-item">
                {/* items-center  */}
                {/* <div className="flex-1" ></div> */}

                {/* <div className="flex-2"> */}
                <Link href="/collection"
                    className="paddingLeft2 flex items-center gap-3 text-[#EDB75E] hover:text-white transition">
                    <FaHeart />
                    <span className="marginLeft_10">Collection</span>
                </Link>
                <Link href="/saved-searches"
                    className="paddingLeft2 flex items-center gap-3 text-[#EDB75E] hover:text-white transition">
                    <FaBookmark />
                    <span className="marginLeft_10">Saved Searches</span>
                </Link>
                <Link href="/market-report"
                    className="paddingLeft2 flex items-center gap-3 text-[#EDB75E] hover:text-white transition">
                    <FaSearch />
                    <span className="marginLeft_10">Market Reports</span>
                </Link>
                <span className="paddingLeft2 flex items-center gap-3 text-[#EDB75E]">
                    <FaUser />
                    <span className="marginLeft_10"> Hi {username}!</span>
                </span>
                <button
                    onClick={handleLogout}
                    className="marginRight2 paddingLeft2 flex items-center gap-3 text-[#EDB75E] hover:text-white transition ml-4">
                    <FaTimesCircle />
                    <span className="marginLeft_10">Logout</span>
                </button>
                {/* </div> */}

            </nav>
            </div>
           
            <div></div>
        </div>
    )

}
