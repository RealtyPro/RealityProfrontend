"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { register } from '../../services/auth/AuthServices';
import { IoClose } from "react-icons/io5";
import Providers from "@/provider/QueryClientProvider";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  onOpenLogin?: () => void;
  handleModal?: () => void;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export default function RegistrationModal({ isOpen, onClose, onSuccess, onOpenLogin, handleModal }: RegistrationModalProps) {
  const [formData, setFormData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const registerMutation = useMutation({
    mutationFn: (user: RegisterData) => register(user),
    onSuccess: (data) => {
      console.log("Registered successfully:", data);
      setSuccess("Registration successful!");
      if (handleModal) {
        handleModal();
      }

      // Call onSuccess callback if provided
      if (onSuccess) {
        onSuccess();
      }

      // Close modal after success
      setTimeout(() => {
        onClose();
        setSuccess(null);
        // Optionally redirect to login
        // router.push("/login");
      }, 1500);
    },
    onError: (error: any) => {
      console.error("Error during registration:", error);
      setError(error?.response?.data?.message || "Registration failed. Please try again.");
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user starts typing
    if (error) setError(null);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.password || !formData.password_confirmation) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.password_confirmation) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    registerMutation.mutate(formData);
  };

  const handleClose = () => {
    setError(null);
    setSuccess(null);
    setFormData({ name: "", email: "", password: "", password_confirmation: "" });
    onClose();
  };

  // Don't render if not open
  if (!isOpen) return null;

  return (
    <Providers>

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={handleClose}
        />

        {/* Modal */}
        <div className="relative bg-[#202020] p-8 rounded-[30px] shadow-xl w-full max-w-md border border-[#3B3B3B] mx-4 padding2">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-[#ADADAD] hover:text-white transition-colors"
          >
            <IoClose size={24} />
          </button>

          <div className="text-center mb-8 padding2">
            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-[#ADADAD]">Join RealityPro today</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-center">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400 text-center">
              {success}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6 padding2">
            <div>
              <label className="mt1 block mb-2 text-white font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                className="bg-clr mt1 padding2 w-full bg-[#171717] border border-[#4E4E4E] rounded-full px-4 py-3 text-white placeholder-[#ADADAD] focus:outline-none focus:border-[#EDB75E] transition-colors [&:-webkit-autofill]:bg-[#171717] [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_30px_#171717_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                autoFocus
              />
            </div>

            <div>
              <label className="mt1 block mb-2 text-white font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                className="bg-clr mt1 padding2 w-full bg-[#171717] border border-[#4E4E4E] rounded-full px-4 py-3 text-white placeholder-[#ADADAD] focus:outline-none focus:border-[#EDB75E] transition-colors [&:-webkit-autofill]:bg-[#171717] [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_30px_#171717_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="mt1 block mb-2 text-white font-medium">Password</label>
              <input
                type="password"
                name="password"
                className="bg-clr mt1 padding2 w-full bg-[#171717] border border-[#4E4E4E] 
              rounded-full px-4 py-3 text-white placeholder-[#ADADAD] focus:outline-none 
              focus:border-[#EDB75E] transition-colors [&:-webkit-autofill]:bg-[#171717] [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_30px_#171717_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                required
              />
            </div>

            <div>
              <label className="mt1 block mb-2 text-white font-medium">Confirm Password</label>
              <input
                type="password"
                name="password_confirmation"
                className="bg-clr mt1 padding2 w-full bg-[#171717] border border-[#4E4E4E] rounded-full px-4 py-3 text-white placeholder-[#ADADAD] focus:outline-none focus:border-[#EDB75E] transition-colors [&:-webkit-autofill]:bg-[#171717] [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_30px_#171717_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]"
                value={formData.password_confirmation}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={registerMutation.isPending}
              className="mt1 padding2 w-full bg-[#EDB75E] text-black font-bold py-3 rounded-full hover:bg-[#e0a94e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {registerMutation.isPending ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[#ADADAD]">
              Already have an account?{" "}
              <button
                onClick={() => onOpenLogin && onOpenLogin()}
                className="text-[#EDB75E] hover:underline font-medium transition-colors"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </Providers>
  );
} 