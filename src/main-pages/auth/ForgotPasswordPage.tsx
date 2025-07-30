"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { forgetPassword } from "@/services/auth/AuthServices";
import Providers from "@/provider/QueryClientProvider";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const forgotPasswordMutation = useMutation({
    mutationFn: (email: object) => forgetPassword(email),
    onSuccess: (data) => {
      console.log("Password reset email sent:", data);
      setSuccess("Password reset link has been sent to your email address.");
    },
    onError: (error: any) => {
      console.error("Error sending password reset email:", error);
      setError(error?.response?.data?.message || "Failed to send reset email. Please try again.");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validation
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
let data={
  email:email
}
    forgotPasswordMutation.mutate(data);
  };

  return (
    <Providers>
    <div className="min-h-screen flex items-center justify-center bg-[#171717] p-4">
      <div className="bg-[#202020] p-8 rounded-[30px] shadow-xl w-full max-w-md border border-[#3B3B3B]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Forgot Password</h2>
          <p className="text-[#ADADAD]">Enter your email to reset your password</p>
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-white font-medium">Email Address</label>
            <input
              type="email"
              className="w-full bg-[#171717] border border-[#4E4E4E] rounded-full px-4 py-3 text-white placeholder-[#ADADAD] focus:outline-none focus:border-[#EDB75E] transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={forgotPasswordMutation.isPending}
            className="w-full bg-[#EDB75E] text-black font-bold py-3 rounded-full hover:bg-[#e0a94e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {forgotPasswordMutation.isPending ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                Sending Reset Link...
              </div>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <p className="text-[#ADADAD] text-sm">
            Remember your password?{" "}
            <a 
              href="/login" 
              className="text-[#EDB75E] hover:underline font-medium transition-colors"
            >
              Back to Login
            </a>
          </p>
          
          <p className="text-[#ADADAD] text-sm">
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