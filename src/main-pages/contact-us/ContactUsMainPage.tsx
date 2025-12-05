"use client"
import Image from "next/image";
import { useState } from "react";
import { postEnquiry } from "@/services/auth/AuthServices";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUsMainPage() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const enquiryMutation = useMutation({
        mutationFn: (data: object) => postEnquiry(data),
        onSuccess: (response) => {
            // Clear form after successful submission
            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                message: ""
            });
            setErrors({});

            // Show success toast
            toast.success("Thank you for your message. We will get back to you soon!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        },
        onError: (error: any) => {
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
                // Show validation errors in toast
                Object.values(error.response.data.errors).forEach((message: any) => {
                    toast.error(message, {
                        position: "top-right",
                        autoClose: 20000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
                });
            } else {
                console.error("Error submitting enquiry:", error);
                // Show generic error toast
                toast.error("Something went wrong. Please try again later.", {
                    position: "top-right",
                    autoClose: 20000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
            }
        }
    });

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.first_name.trim()) {
            newErrors.first_name = "First name is required";
        }
        if (!formData.last_name.trim()) {
            newErrors.last_name = "Last name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }
        if (!/^\d{10}$/.test(formData.phone.trim())) {
            newErrors.phone = "Phone number must be exactly 10 digits";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            let data = {
                name: formData.first_name + " " + formData.last_name,
                email: formData.email,
                contact_no: parseInt(formData.phone),
                description: formData.message
            }
            enquiryMutation.mutate(data);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
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
            <section className="hero" >
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div>
                                <span className="menu-div yellow-text">Contact us</span>
                            </div>
                            <span className="heading-text">Let me know, How can I assist you</span>
                            <p className="heading-sub-text">We’ve been representing buyers and sellers in Santa Barbara County for over twenty years and we’re the top-producing independently owned real estate company in the area.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Get In Touch Section */}
            <section className="contact-section container ">
                <div className="contact-grid">
                    <div className="contact-left">
                        <h2>Get In Touch</h2>
                        <p className="sub">Santa Barbara County for over twenty years and we're</p>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                value={formData.first_name}
                                onChange={handleChange}
                                className="bg-[#000000] border border-[#313131]"
                            />
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="full"
                            />

                            <p className="contact-info w-full full mt-4">By submitting this form I agree to be contacted by AshuHomes. This includes receiving automated calls, texts and emails about real estate, finance and related topics.</p>

                            <div className="contact-submit flex justify-end mt-4 full">
                                <button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={enquiryMutation.isPending}
                                >
                                    {enquiryMutation.isPending ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-right">
                        <Image src="/images/contactusimg.png" alt="location" fill style={{ objectFit: 'cover' }} />
                        <div className="contact-overlay"></div>
                        <div className="contact-details paddingLeft-10">
                            <h3 className="contactus-heading mb5">AshuHomes LLC</h3>
                            <p className="mt15 contact-emai ">AshuHomes@gmail.com</p>
                            <p className="marginTop contact-emai">+0123 456 7890</p>
                            <p className="mt15 contact-emai ">517 Washington Ave.<br />Manchester, Kentucky 39495</p>
                            <div className="social-links left-justify">
                                <a href="#" className="social-link ">

                                    <Image
                                        className="footer-facebook-icon"
                                        src="/images/footer-facebook-Icon.png"
                                        alt="facebook-icon"
                                        width={24}
                                        height={24}
                                    />

                                </a>
                                <a href="#" className="social-link">
                                    <Image
                                        className="footer-icon"
                                        src="/images/footer-twiterIcon.png"
                                        alt="facebook-icon"
                                        width={24}
                                        height={24}
                                    />

                                </a>
                                <a href="#" className="social-link">
                                    <Image
                                        className="footer-icon"
                                        src="/images/footer-cat-Icon.png"
                                        alt="facebook-icon"
                                        width={24}
                                        height={24}
                                    />

                                </a>
                                <a href="#" className="social-link">
                                    <Image
                                        className="footer-icon"
                                        src="/images/footer-eye-Icon.png"
                                        alt="facebook-icon"
                                        width={24}
                                        height={24}
                                    />

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}