"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { login } from '../../services/auth/AuthServices';
import Providers from "@/provider/QueryClientProvider";

interface LoginData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: (user: LoginData) => login(user),
    onSuccess: (data) => {
      console.log("Logged in successfully:", data);
      sessionStorage.setItem("access_token", data?.access_token);

      setSuccess("Login successful! Redirecting to dashboard...");
      setTimeout(() => {
        router.push("/collection");
      }, 1500);
    },
    onError: (error: any) => {
      console.error("Error during login:", error);
      setError(error?.response?.data?.message || "Login failed. Please check your credentials.");
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validation
    if (!formData.email.trim() || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    loginMutation.mutate(formData);
  };

  return (
    <Providers>

      <div className="min-h-screen flex items-center justify-center bg-[#171717] p-4">
        <div className="bg-[#202020] p-8 rounded-[30px] shadow-xl w-full max-w-md border border-[#3B3B3B]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-[#ADADAD]">Sign in to your RealityPro account</p>
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

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block mb-2 text-white font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full bg-[#171717] border border-[#4E4E4E] rounded-full px-4 py-3 text-white placeholder-[#ADADAD] focus:outline-none focus:border-[#EDB75E] transition-colors"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                autoFocus
              />
            </div>

            <div>
              <label className="block mb-2 text-white font-medium">Password</label>
              <input
                type="password"
                name="password"
                className="w-full bg-[#171717] border border-[#4E4E4E] rounded-full px-4 py-3 text-white placeholder-[#ADADAD] focus:outline-none focus:border-[#EDB75E] transition-colors"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#EDB75E] bg-[#171717] border-[#4E4E4E] rounded focus:ring-[#EDB75E] focus:ring-2"
                />
                <span className="ml-2 text-[#ADADAD] text-sm">Remember me</span>
              </label>
              <a
                href="/forgot-password"
                className="text-[#EDB75E] hover:underline text-sm transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-[#EDB75E] text-black font-bold py-3 rounded-full hover:bg-[#e0a94e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {loginMutation.isPending ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[#ADADAD]">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-[#EDB75E] hover:underline font-medium transition-colors"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </Providers>
  );
}