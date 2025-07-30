"use client"
import FilterTop from "@/component/mlsSearchMenu/filterTop"
import { MlsPropertyMapPage } from "@/component/mlsSearchMenu/MlsPropertyMapPage"
import { MlsListingOptions } from "@/component/mlsSearchMenu/MlsListingOptions"
import { useEffect, useState } from "react"
import { MlsMapPage } from "@/component/mlsSearchMenu/MlsMpPage"
import { useMlsPropertyList } from "@/services/properties/PropertyQueries"
import { useQueryClient } from "@tanstack/react-query"
import { MlsPropertyCard } from "@/component/mlsSearchMenu/MlsPropertyCard"
import RegistrationModal from "../auth/RegistrationModal"
import LoginModal from "../auth/LoginModal"
type Property = {
    id: string ;
    // add other fields as needed, e.g. title: string;
    [key: string]: string;
};

 const MlsSerchHomePage = () => {
    const queryClient = useQueryClient();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
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
    const [properties, setProperties] = useState<Property[]>([]);
    const { data: propertyListDatas, isLoading, isError, } = useMlsPropertyList(searchFilters);
    const [openMapPropertyGrid, setOpenMapPropertyGrid] = useState(false);
    const [openMapGrid, setOpenMapGrid] = useState(false);
    const [openPropertyGrid, setOpenPropertyGrid] = useState(true);
    useEffect(() => {
        if (propertyListDatas && !isLoading && !isError) {
            console.log("Property List Data:", propertyListDatas);
            setProperties(propertyListDatas.data || []);

        }
    }, [propertyListDatas, isLoading, isError]);
    useEffect(() => {

        queryClient.invalidateQueries({ queryKey: ['mlsPropertyList'] });


    }, [searchFilters,queryClient]);
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
                                        />
                                    ))}
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
                    <MlsMapPage /> : <></>}
            </div>
        </>
    )
}
export default MlsSerchHomePage;