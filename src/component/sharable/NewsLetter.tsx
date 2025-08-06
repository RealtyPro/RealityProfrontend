"use client"

import { postNewsLetter } from "@/services/auth/AuthServices";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

export const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const newsletterMutation = useMutation({
        mutationFn: (user: { email: string }) => postNewsLetter(user),
        onSuccess: (data) => {
            toast.success("Subscription successful!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            }); console.log("Subscribed successfully:", data);
            setSuccess("Subscription successful!");
            // Close modal after succe
        },
        onError: (error: any) => {
            toast.error("Subscription failed. Please try again.", {
                position: "top-right",
                autoClose: 20000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            // setError(error?.response?.data?.message || "Subscription failed. Please try again.");
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validation
        if (!email.trim()) {
            setError("Please fill in all fields");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }
        let data = {
            email: email
        }
        newsletterMutation.mutate(data);
    }
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
            <section className="newsletter" style={{ backgroundImage: "url('/images/footer.png')" }}>
                <div className="newsletter-overlay"></div>
                <div className="container">
                    <div className="newsletter-content">
                        <h2>Subscribe our newsletter</h2>
                        <p>Top priority, and she is committed to walking with them consistently walking.</p>
                        <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); }}>
                            {/* {error && (
                            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-center">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                                {success}
                            </div>
                        )} */}
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="button" className="btn-subscribe" onClick={handleSubmit}>
                                    Subscribe
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16"
                                        fill="none">
                                        <path
                                            d="M1.5 7C0.947715 7 0.5 7.44772 0.5 8C0.5 8.55228 0.947715 9 1.5 9V7ZM20.2071 8.70711C20.5976 8.31658 20.5976 7.68342 20.2071 7.29289L13.8431 0.928932C13.4526 0.538408 12.8195 0.538408 12.4289 0.928932C12.0384 1.31946 12.0384 1.95262 12.4289 2.34315L18.0858 8L12.4289 13.6569C12.0384 14.0474 12.0384 14.6805 12.4289 15.0711C12.8195 15.4616 13.4526 15.4616 13.8431 15.0711L20.2071 8.70711ZM1.5 8V9H19.5V8V7H1.5V8Z"
                                            fill="black" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>

    )
}