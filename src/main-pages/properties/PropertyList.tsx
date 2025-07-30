"use client"
import { PropertyCard } from "@/component/properties/PropertyCard"
import { usePropertyList } from "@/services/properties/PropertyQueries";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import LoginModal from "../auth/LoginModal";
import RegistrationModal from "../auth/RegistrationModal";

type Property = {
    id: string ;
    // add other fields as needed, e.g. title: string;
    [key: string]: string;
};

const PropertyList = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    // const [total, setTotal] = useState(0);
    // const [perPage, setPerPage] = useState(10);
    const [searchWord, setSearchWord] = useState('');
    const queryClient = useQueryClient();
    const { data: propertyListDatas, isLoading, error } =
        usePropertyList({ pageLimit: currentPage, search: searchWord });
    useEffect(() => {
        if (propertyListDatas && !isLoading && !error) {
            setProperties(propertyListDatas.data || []);
            setCurrentPage(propertyListDatas.meta?.current_page || 1);
            setTotalPages(propertyListDatas.meta?.last_page || 1);
            // setTotal(propertyListDatas.meta?.total || 0);
            // setPerPage(propertyListDatas.meta?.per_page || 10);
        }
    }, [propertyListDatas, isLoading, error]);
    useEffect(() => {
        if (currentPage || searchWord) {
            queryClient.invalidateQueries({ queryKey: ['propertylist'] });

        }
    }, [currentPage, searchWord,queryClient]);
    const handlePageClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
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
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div>
                                <span className="menu-div yellow-text">Properties</span>

                            </div>
                            <span className="heading-text">Find your dream Property</span>
                            <p className="heading-sub-text">We’ve been representing buyers and sellers in Santa Barbara County for
                                over twenty years and we’re the top-producing independently owned real estate company in the
                                area.</p>
                        </div>

                        <div className="search-form property-search-field">
                            <div className="select-field">
                                <input placeholder="Search by city, country, ZIP "
                                    className="search-input"
                                    value={searchWord}
                                    onChange={(e) => { setSearchWord(e.target.value); }}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <path
                                        d="M16.2969 29.166C23.5456 29.166 29.4219 23.2898 29.4219 16.041C29.4219 8.79228 23.5456 2.91602 16.2969 2.91602C9.04814 2.91602 3.17188 8.79228 3.17188 16.041C3.17188 23.2898 9.04814 29.166 16.2969 29.166Z"
                                        stroke="#EDB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M27.8612 30.1719C28.6341 32.5052 30.3987 32.7385 31.7549 30.6969C32.9945 28.8302 32.1778 27.2989 29.932 27.2989C28.2695 27.2844 27.3362 28.5823 27.8612 30.1719Z"
                                        stroke="#EDB75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="prop-container">
                <div className="container">
                    <div className="properties-grid">
                        {properties.length ? (
                            <>
                                {properties.map((item) => (

                                    <PropertyCard key={item.id} item={item} handleModal={handleModal} />
                                ))}
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
                            </>
                        ) : (
                            <div>No properties found.</div>
                        )}
                    </div>
                </div>
            </section>
            {/* <div className="pagination">
                <a href="#" className="page">&laquo;</a>
                <a href="#" className="page">1</a>
                <a href="#" className="page active">2</a>
                <a href="#" className="page">3</a>
                <a href="#" className="page">4</a>
                <a href="#" className="page">5</a>
                <a href="#" className="page">&raquo;</a>
            </div> */}



        </>
    )
}
export default PropertyList;