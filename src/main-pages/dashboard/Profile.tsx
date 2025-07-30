"use client"
import { FiPhone } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { useProfile } from "@/services/profile/ProfileQueries";
import { useEffect, useState } from "react";
import { UserProfile } from "@/types/User";
import Image from "next/image";

 const ProfilePage = () => {
    const [userData, setUserData] = useState<UserProfile>({
        name: "",
        email: "",
        phone: "",
        address: "",
        created_at: "",
        photo: "",
        photo_gallery: [],
        web: "",
        social_urls: "",
        mobile: "",
        id: 0,
       
    });
    const { data: profileData, isLoading, error } = useProfile();
    
    useEffect(() => {
        if (profileData && !isLoading && !error) {
            console.log("profile", profileData);
            setUserData(profileData?.data || {});
        }
    }, [profileData, isLoading, error]);

    // Helper function to format date
    const formatDate = (dateString: string) => {
        if (!dateString) return "N/A";
        try {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } catch {
            return "N/A";
        }
    };

    // Helper function to get display name
    const getDisplayName = () => {
        return userData?.name  || "User";
    };

    // Helper function to get email
    const getEmail = () => {
        return userData?.email || "No email provided";
    };

    // Helper function to get phone
    const getPhone = () => {
        return userData?.phone || "No phone number provided";
    };

    // Helper function to get address
    const getAddress = () => {
        return userData?.address  || "No address provided";
    };

    // Helper function to get member since date
    const getMemberSince = () => {
        return formatDate(userData?.created_at || "2025-07-10");
    };

    return (
        <main className="flex-1 p-10 bg-[#171717] min-h-screen main-content-p ">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-8 content-border 
                    border-[#3B3B3B] p-4 rounded-lg">
                <p className="font60 font-[Helvetica Neue] font-semibold text-shadow-none">
                    My Profile
                </p>
                <button className="flex padding2 items-center gap-2 bg-[#EDB75E] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#e0a94e] transition">
                    <Image src="/images/logout-icon.png" alt="Logout Icon" className="w-4 h-4"
                    width={16} height={16} />
                    Logout
                </button>
            </div>
            <div className="p-8 flex flex-row w-full justify-center gap-4">
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex-3 flex flex-row gap-4">
                        <div className="max-w-1/3 flex flex-1 bg-[#000000] border border-[#3B3B3B] rounded-[30px] padding2 items-center flex-col">
                            <div
                                className="rounded-full overflow-hidden border border-gray-400"
                                style={{ width: "100px", height: "100px" }}
                            >
                                <Image
                                    src={userData?.photo || "/images/my-profile-pic.png"}
                                    alt="Profile"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="font20 font-[Helvetica Neue] font-semibold text-shadow-none">
                                {getDisplayName()}
                            </p>
                            <p className="font12 font-[Helvetica Neue] text-shadow-none text-[#ADADAD]">
                                Member since: {getMemberSince()}
                            </p>
                            <p className="font14 font-[Helvetica Neue] text-shadow-none text-[#EDB75E]">
                                Add Profile Picture
                            </p>
                        </div>
                        
                        <div className="flex flex-1 bg-[#000000] border border-[#3B3B3B] rounded-[30px] padding2 items-center flex-col">
                            <div className="flex w-full mb-8 content-border border-[#3B3B3B] p-4 rounded-lg items-left">
                                <p className="font20 font-[Helvetica Neue] font-semibold text-shadow-none">
                                    Contact Information
                                </p>
                                <div className="flex-1 flex justify-end">
                                    <button className="flex">
                                        <CiEdit color="#EDB75E" style={{ marginTop: "8%" }} />
                                        Edit
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-start w-full pl-[5px] paddingLeft7">
                                <p className="font14 font-[Helvetica Neue] text-[#ADADAD]">Name</p>
                                <p className="font16 font-[Helvetica Neue] font-semibold text-shadow-none">
                                    {getDisplayName()}
                                </p>
                            </div>
                            <div className="flex flex-row w-full">
                                <div className="flex max-w-1/2 flex-col items-start w-full pl-[5px] paddingLeft7">
                                    <p className="font14 font-[Helvetica Neue] text-[#ADADAD]">Email</p>
                                    <p className="font16 font-[Helvetica Neue] font-semibold text-shadow-none">
                                        {getEmail()}
                                    </p>
                                </div>
                                <div className="flex flex-col items-start w-full pl-[5px] paddingLeft7">
                                    <p className="font14 font-[Helvetica Neue] text-[#ADADAD]">Phone</p>
                                    <p className="font16 font-[Helvetica Neue] font-semibold text-shadow-none">
                                        {getPhone()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-1 bg-[#000000] border border-[#3B3B3B] rounded-[30px] padding2 items-center flex-col paddingB10">
                        <div className="flex w-full mb-8 content-border border-[#3B3B3B] p-4 rounded-lg items-left">
                            <p className="font20 font-[Helvetica Neue] font-semibold text-shadow-none">
                                Address
                            </p>
                            <div className="flex-1 flex justify-end">
                                <button className="flex">
                                    <CiEdit color="#EDB75E" style={{ marginTop: "8%" }} />
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full pl-[5px] paddingLeft7">
                            <p className="font14 font-[Helvetica Neue]">Home</p>
                            <p className="font16 font-[Helvetica Neue] font-semibold text-shadow-none">
                                {getAddress()}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-1 bg-[#000000] border border-[#3B3B3B] rounded-[30px] padding2 items-center flex-col paddingB10">
                        <div className="flex w-full mb-8 content-border border-[#3B3B3B] p-4 rounded-lg items-left">
                            <p className="font20 font-[Helvetica Neue] font-semibold text-shadow-none">
                                Account Information
                            </p>
                            <div className="flex-1 flex justify-end">
                                <button className="flex text-[#EDB75E]">
                                    Reset Password
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-row w-full">
                            <div className="flex max-w-1/2 flex-col items-start w-full pl-[5px] paddingLeft7">
                                <p className="font14 font-[Helvetica Neue] text-[#ADADAD]">User Name</p>
                                <p className="font16 font-[Helvetica Neue] font-semibold text-shadow-none">
                                    {userData?.name || getDisplayName()}
                                </p>
                            </div>
                            <div className="flex flex-col items-start w-full pl-[5px] paddingLeft7">
                                <p className="font14 font-[Helvetica Neue] text-[#ADADAD]">Password</p>
                                <p className="font16 font-[Helvetica Neue] font-semibold text-shadow-none">
                                    ********
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="max-w-1/3 flex flex-1 bg-[#202020] rounded-[30px] padding2 items-center flex-col">
                    <div className="flex w-full mb-8 content-border border-[#3B3B3B] p-4 rounded-lg items-left">
                        <p className="font20 font-[Helvetica Neue] font-semibold text-shadow-none">
                            Contact Your Agent
                        </p>
                    </div>
                    <div
                        className="rounded-full overflow-hidden border border-gray-400"
                        style={{ width: "100px", height: "100px" }}
                    >
                        <Image
                            src="/images/my-profile-pic.png"
                            alt="Profile"
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="font20 font-[Helvetica Neue] font-semibold text-shadow-none">
                        George Jhon
                    </p>
                    <p className="font14 font-[Helvetica Neue] font-semibold text-shadow-none">
                        RealtiPro Platform
                    </p>
                    <p className="font14 font-[Helvetica Neue] font-semibold text-shadow-none text-[#EDB75E] mt1">
                        View Profile
                    </p>
                    <div className="flex mt10">
                        <FiPhone color="#EDB75E" style={{ marginTop: "1%" }} />
                        <span className="font14 font-[Helvetica Neue] font-semibold text-shadow-none text-[#EDB75E]">
                            +123 456 78900
                        </span>
                    </div>
                    <input 
                        className="w-full bg-[#000000] border border-[#3B3B3B] rounded-[30px] padding2 text-[#ADADAD] font14 font-[Helvetica Neue] h-[240px] mt10"
                        placeholder="Type your message here..."
                    />
                    <button className="flex items-center gap-2 bg-[#EDB75E] w-[95%] padding2 text-center justify-center text-black px-6 py-2 rounded-full font-semibold hover:bg-[#e0a94e] transition mt10">
                        Send
                    </button>
                </div>
            </div>
        </main>
    );
};
export default ProfilePage;