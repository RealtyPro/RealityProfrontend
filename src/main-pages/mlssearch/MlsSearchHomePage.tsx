"use client"
import FilterTop from "@/component/mlsSearchMenu/filterTop"
import { MlsPropertyMapPage } from "@/component/mlsSearchMenu/MlsPropertyMapPage"
import { MlsListingOptions } from "@/component/mlsSearchMenu/MlsListingOptions"
import { useEffect, useState } from "react"
import { MlsMapPage } from "@/component/mlsSearchMenu/MlsMpPage"
import { useMlsPropertyList } from "@/services/properties/PropertyQueries"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { MlsPropertyCard } from "@/component/mlsSearchMenu/MlsPropertyCard"
import RegistrationModal from "../auth/RegistrationModal"
import LoginModal from "../auth/LoginModal"
import GoogleMapComponent from "@/component/mlsSearchMenu/MlsMap"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { postUserPropertyWishlist, removeWishlistItem } from "@/services/profile/ProfileServices"
type Property = {
    id: string;
    // add other fields as needed, e.g. title: string;
    [key: string]: string;
};

const MlsSerchHomePage = () => {
    const queryClient = useQueryClient();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchFilters, setSearchFilters] = useState(() => {
        // read once during initial render (browser-side only)
        const type = typeof window !== "undefined" ? sessionStorage.getItem("prop_type") ?? "" : "";
        const loc = typeof window !== "undefined" ? sessionStorage.getItem("prop_location") ?? "" : "";
        const maxPrice = typeof window !== "undefined" ? sessionStorage.getItem("prop_max_price") ?? "" : "";

        return {
            keyword: '',
            pageLimit: 20,
            page: 1,
            property_status: '',
            property_type: type,
            property_for: '',
            category_type: '',
            price_min: 0,
            price_max: maxPrice ? Number(maxPrice) : 0,
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
            mls_city: loc,
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
        };
    });
    useEffect(() => {
        const clearTempFilters = () => {
            sessionStorage.removeItem("prop_type");
            sessionStorage.removeItem("prop_location");
            sessionStorage.removeItem("prop_max_price");
        };

        // clear on unmount (navigation inside the SPA)
        return () => clearTempFilters();
    }, []);
    const postWishlistMutation = useMutation({
        mutationFn: (property: any) => postUserPropertyWishlist(property),
        onSuccess: (data) => {

            console.log("Property added to wishlist successfully:", data);
            // Force refetch the property list
            queryClient.invalidateQueries({ queryKey: ['mlsPropertyList'] });
            // Optionally, you can also directly refetch
            queryClient.refetchQueries({ queryKey: ['mlsPropertyList'] });
            toast.success(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        },
        onError: (error) => {
            toast.error("Something went wrong. Please try again later.", {
                position: "top-right",
                autoClose: 20000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            console.error("Error while adding to wishlist:", error);
        },
    });
    const [properties, setProperties] = useState<Property[]>([]);
    const { data: propertyListDatas, isLoading, isError, } = useMlsPropertyList(searchFilters);
    const [openMapPropertyGrid, setOpenMapPropertyGrid] = useState(false);
    const [openMapGrid, setOpenMapGrid] = useState(false);
    const [openPropertyGrid, setOpenPropertyGrid] = useState(true);
    useEffect(() => {
        if (propertyListDatas && !isLoading && !isError) {
            console.log("Property List Data:", propertyListDatas);
            setProperties(propertyListDatas.data || []);
            setCurrentPage(propertyListDatas.meta?.current_page || 1);
            setTotalPages(propertyListDatas.meta?.last_page || 1);

        }
    }, [propertyListDatas, isLoading, isError]);
    useEffect(() => {

        queryClient.invalidateQueries({ queryKey: ['mlsPropertyList'] });


    }, [searchFilters, currentPage, queryClient]);
    const removeWishlistMutation = useMutation({
        mutationFn: (id: string) => removeWishlistItem(id),

        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['mlsPropertyList'] });
             toast.success(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        },
        onError: (error) => {
             toast.error("Something went wrong. Please try again later.", {
                position: "top-right",
                autoClose: 20000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            console.error("Error while adding to wishlist:", error);
            console.error("Error  while deletion:", error);
        },
    });
    const handlePageClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const handleOpenMapPropertyGrid = (open: boolean) => {
        setOpenMapPropertyGrid(open);
        setOpenMapGrid(false);
        setOpenPropertyGrid(false);
    }
    const handleOpenMapGrid = (open: boolean) => {
        setOpenMapGrid(open);
        setOpenMapPropertyGrid(false);
        setOpenPropertyGrid(false);
    }
    const handleOpenPropertyGrid = (open: boolean) => {
        setOpenPropertyGrid(open);
        setOpenMapPropertyGrid(false);
        setOpenMapGrid(false);
    }
    const handleSearch = (value: string, key: keyof typeof searchFilters) => {
        // Update the search filters state with the new value for the specified k
        // console.log("Search Filters:", key, value);
        if (key == "price_max") {
            sessionStorage.setItem('prop_max_price', value);
        }
        if (key == "property_type") {
            sessionStorage.setItem("prop_type", value);
        }
        if (key == "mls_city") {
            sessionStorage.setItem("prop_location", value);
        }
        setSearchFilters(prevFilters => ({
            ...prevFilters,
            [key]: value
        }));
    }
    const handleModal = () => {
        setIsLoginModalOpen(true);
    }
    const handleLoginSuccess = () => {
        setIsLoginModalOpen(false);
    }
    const handleRegistrationSuccess = () => {
        console.log("User registered successfully!");
        // Handle post-registration actions here
        // For example, show login modal, update UI, etc.
    };

    const handleOpenRegistration = () => {
        console.log("Opening registration modal...");
        setIsLoginModalOpen(false);
        setIsRegistrationModalOpen(true);
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={20000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <RegistrationModal
                handleModal={handleModal}
                isOpen={isRegistrationModalOpen}
                onClose={() => setIsRegistrationModalOpen(false)}
                onSuccess={handleRegistrationSuccess}
                onOpenLogin={handleModal}
            />
            <LoginModal
                isHeader={false}
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onSuccess={handleLoginSuccess}
                onOpenRegistration={handleOpenRegistration}
            />
            <section className="mls-page">
                <FilterTop
                    handleSearch={handleSearch}
                    searchFilters={searchFilters}
                />

            </section>
            <div>
                <MlsListingOptions
                    handleOpenMapPropertyGrid={() => handleOpenMapPropertyGrid(true)}
                    openMapPropertyGrid={openMapPropertyGrid}
                    handleOpenMapGrid={() => handleOpenMapGrid(true)}
                    openMapGrid={openMapGrid}
                    handleOpenPropertyGrid={() => handleOpenPropertyGrid(true)}
                    openPropertyGrid={openPropertyGrid}
                    handleSearch={handleSearch}
                    searchFilters={searchFilters}
                />
            </div>
            <div >
                {openMapPropertyGrid ?
                    <MlsPropertyMapPage
                        properties={properties || []}
                        handleModal={handleModal}
                    /> : <></>
                }
                {openPropertyGrid ?


                    properties.length ? (

                        <section className="prop-container">
                            <div className="container">
                                <div className="mls-properties-grid">
                                    {properties.map((item) => (

                                        <MlsPropertyCard key={item.id} item={item}
                                            handleModal={handleModal}
                                            postWishlistMutation={(data: any) => postWishlistMutation.mutate(data)}
                                            removeWishlistMutation={(id: string) => removeWishlistMutation.mutate(id)}
                                            />
                                    ))}
                                </div>
                                <div className="pagination">
                                    <a
                                        href="#"
                                        className="page"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handlePageClick(currentPage - 1);
                                        }}
                                        style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto', opacity: currentPage === 1 ? 0.4 : 1 }}
                                    >
                                        &laquo;
                                    </a>

                                    {Array.from({ length: totalPages }).map((_, index) => {
                                        const page = index + 1;
                                        return (
                                            <a
                                                href="#"
                                                key={page}
                                                className={`page ${page === currentPage ? "active" : ""}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handlePageClick(page);
                                                }}
                                            >
                                                {page}
                                            </a>
                                        );
                                    })}

                                    <a
                                        href="#"
                                        className="page"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handlePageClick(currentPage + 1);
                                        }}
                                        style={{ pointerEvents: currentPage === totalPages ? 'none' : 'auto', opacity: currentPage === totalPages ? 0.4 : 1 }}
                                    >
                                        &raquo;
                                    </a>
                                </div>
                            </div>
                        </section>
                    )
                        : (
                            <div>No properties found.</div>
                        )
                    : <></>
                }
                {openMapGrid ?
                    properties.length ? (
                        <section className="prop-container">
                            <div className="container">
                                <GoogleMapComponent markers={properties.map((p: any) => ({
                                    lat: Number(p.latitude),
                                    lng: Number(p.longitude),
                                }))} />
                            </div>
                        </section>)
                        : (
                            <div>No properties found.</div>
                        ) : <></>}
            </div>
        </>
    )
}
export default MlsSerchHomePage;