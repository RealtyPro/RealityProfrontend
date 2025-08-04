"use client";
import { useRouter } from "next/navigation";
import { FaHome, FaPlus } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import { RiMoreLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { useUserWishlist } from "@/services/profile/ProfileQueries";
import { useEffect, useState } from "react";
import { useMlsPropertyList } from "@/services/properties/PropertyQueries";
import { MlsPropertyCard } from "@/component/mlsSearchMenu/MlsPropertyCard";
import '../../styles/globalStyles.css'
import { PropertyCard } from "@/component/properties/PropertyCard";
const FavouritesPage = () => {
    const [favPropertyList, setFavPropertyList] = useState<any[]>([]);
    const [itemCount, setItemCount] = useState(0);
    const [mergedFavorites, setMergedFavorites] = useState<any[]>([]);
    const router = useRouter();
    const [searchFilters, setSearchFilters] = useState({
        keyword: '',
        pageLimit: 20,
        page: 1,
        property_status: '',
        property_type: '',
        property_for: '',
        category_type: '',
        price_min: 0,
        price_max: 0,
        bed_min: 0,
        bed_max: 0,
        bath_min: 0,
        bath_max: 0,
        garage_min: 0,
        garage_max: 0,
        square_footage_min: 0,
        square_footage_max: 0,
        community_amenities: '',
        property_view: '',
        lot_size_min: 0,
        lot_size_max: 0,
        year_built_min: 0,
        year_built_max: 0,
        max_annual_tax: 0,
        stories: 0,
        premium: false,
        exclusive: false,
        price_on_request: false,
        construction_status: '',
        furnishing: '',
        available_from: '',
        rented: false,
        mls_city: '',
        mls_state: '',
        zip: '',
        mls_basement: '',
        mls_sewer: '',
        mls_school_district: '',
        mls_builder_name: '',
        mls_list_agent: '',
        mls_site_features: '',
        mls_lot_feature: '',
        interior_features: ''

    });
    const { data: wishListDatas } = useUserWishlist();
    const { data: propertyListDatas, isLoading, isError, } = useMlsPropertyList(searchFilters);


    useEffect(() => {
        console.log("wishListDatas?.data?.count", wishListDatas?.count)
        setMergedFavorites(wishListDatas?.data || []);
        setItemCount(wishListDatas?.count || 0);
        

    }, [wishListDatas])
    // useEffect(() => {
    //     if (propertyListDatas?.data && favPropertyList.length > 0) {
    //         // Create a map of propertyListDatas by mls_listingkey for quick lookup
    //         const propertyMap = new Map();
    //         propertyListDatas.data.forEach((property: any) => {
    //             if (property.mls_listingkey) {
    //                 propertyMap.set(property.mls_listingkey, property);
    //             }
    //         });

    //         // Create merged array with items that exist in both arrays
    //         const merged = favPropertyList
    //             .map((fav: any) => {
    //                 const matchingProperty = propertyMap.get(fav.listing_key);
    //                 if (matchingProperty) {
    //                     // Merge favorite data with property data
    //                     return {
    //                         ...matchingProperty,
    //                         ...fav,
    //                         isFavorite: true
    //                     };
    //                 }
    //                 return null;
    //             })
    //             .filter(Boolean); // Remove null values
    //         console.log('favorites:', favPropertyList);

    //         console.log('Merged favorites:', merged);
    //         console.log('Merged count:', merged.length);

    //         setMergedFavorites(merged);
    //         setItemCount(merged.length);
    //     }

    // }, [ favPropertyList])
    return (
        <main className="flex-1 p-10 bg-[#171717] min-h-screen main-content-p ">
            {/* Top Bar #171717         // main-content-pt*/}
            <div className="flex justify-between items-center mb-8 content-border 
            border-[#3B3B3B] p-4 rounded-lg">
                <div className="flex-5 ">
                    <span>
                        <div className="flex cursor-pointer" onClick={() => router.push('/collection')}>
                            <SlArrowLeft size="15px" color="#EDB75E" style={{ marginTop: "1%" }} />
                            <span className="text-[#EDB75E]">collection</span>
                        </div>
                        <p className="font60 font-serif font-semibold text-shadow-none">Fovourites</p>

                    </span>
                </div>
                <div className="flex-3 justify-items-end-safe">
                    <button className="flex p-8 items-center
                     gap-3 bg-[#171717] border border-[#FFFFFF] text-white rounded-full font-semibold 
                     hover:bg-[#e0a94e] transition padding2">
                        {/* px-6 py-2 */}

                        <FaPlus />
                        Add Listing
                    </button>
                </div>
                <div className="flex-1 justify-items-end-safe">

                    <button className="padding7 flex p-4 items-center padding2
                gap-3 bg-[#EDB75E] text-black rounded-full font-semibold 
                hover:bg-[#e0a94e] transition">
                        {/* px-6 py-2 */}

                        <RiMoreLine />
                        More
                    </button>
                </div>
            </div>
            {/* Main Content Area */}
            <div>
                <div className="text-base text-white text-[18px]">Favorites</div>
                <div className="text-base text-white text-[20px] mb5">Save Listing ({itemCount})
                </div>
                {mergedFavorites.length ?
                    <>
                        <section className="prop-container">
                            <div className="container">
                                <div className="properties-grid">
                                    {mergedFavorites.map((item) => (

                                        <PropertyCard key={item.id} item={item}
                                            handleModal={() => { console.log("clicked") }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                    </>
                    :
                    <div className="bg-[black] rounded-2xl p-8 min-h-[200px] flex flex-col items-center 
           border border-[#232323] max-w-1/3 mx-auto padding2">
                        <div className="text-base text-white text-[18px] mt-4">
                            Add Listing
                        </div>

                        <div className="text-base text-white text-[16px] p-4 content-border">
                            You can search and add
                            properties to a collection to keep
                            track of your favorite homes
                            using the heart icon
                        </div>
                        <button className="flex p-4 items-center padding2
                gap-3 bg-[#EDB75E] text-black rounded-full font-semibold 
                hover:bg-[#e0a94e] transition">
                            {/* px-6 py-2 */}

                            <IoSearchSharp />
                            Search Listing
                        </button>

                    </div>


                }
            </div>

        </main>
    );
}
export default FavouritesPage;