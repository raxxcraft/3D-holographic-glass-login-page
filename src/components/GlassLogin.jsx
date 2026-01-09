import React from "react";

const GlassLogin = () => {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black px-4">

      {/* Soft shadow under the card */}
      <div className="absolute w-[360px] md:w-[400px] h-[500px] md:h-[550px] bg-purple-500/30 blur-3xl rounded-3xl translate-y-10"></div>

      {/* Glass Card */}
      <div className="w-full max-w-[360px] md:max-w-[400px] rounded-3xl p-6 md:p-8 relative overflow-hidden group transition-all duration-500 hover:scale-105 hover:rotate-1
                      bg-gradient-to-br from-white/10 via-white/5 to-transparent
                      backdrop-blur-xl border border-white/20
                      shadow-2xl shadow-purple-500/20
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500/20 before:via-purple-500/20 before:to-cyan-500/20 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
                      after:absolute after:inset-0 after:bg-gradient-to-45deg after:from-transparent after:via-white/10 after:to-transparent after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100">
        
        {/* Holographic shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '0.3s'}}></div>
        </div>

        <div className="relative z-10">

        <h2 className="text-xl md:text-2xl font-semibold text-white drop-shadow-lg">
          Login
        </h2>
        <p className="text-xs md:text-sm text-white/80 mb-4 md:mb-6 drop-shadow">
          Welcome back please login to your account
        </p>

        {/* Username */}
        <div className="mb-3 md:mb-4">
          <input
            type="text"
            placeholder="User Name"
            className="w-full rounded-xl bg-white/10 border border-white/30 backdrop-blur-sm
              px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-white placeholder-white/60 
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20"
          />
        </div>

        {/* Password */}
        <div className="mb-3 md:mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-white/10 border border-white/30 backdrop-blur-sm
              px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-white placeholder-white/60 
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center mb-4 md:mb-6 group/checkbox cursor-pointer">
          <input
            type="checkbox"
            className="w-3.5 h-3.5 md:w-4 md:h-4 accent-purple-500 transition-transform duration-200 group-hover/checkbox:scale-110"
            defaultChecked
          />
          <span className="ml-2 text-xs md:text-sm text-white/80 transition-colors duration-200 group-hover/checkbox:text-purple-300 drop-shadow">Remember me</span>
        </div>

        {/* Login Button */}
        <button
          className="w-full py-2.5 md:py-3 rounded-xl font-semibold text-sm md:text-base text-white 
          bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 
          hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 
          transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
          Login
        </button>

        <p className="text-center text-xs md:text-sm text-white/70 mt-3 md:mt-4 drop-shadow">
          Don't have an account?{" "}
          <span className="font-semibold text-purple-300 cursor-pointer hover:text-pink-300 transition-colors">
            Signup
          </span>
        </p>
        </div>
      </div>
    </div>
  );
};

export default GlassLogin;