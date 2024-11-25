/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        vibrate: "vibrate 0.2s ease-in-out infinite",
      },
      keyframes: {
        vibrate: {
          "0%, 100%": { transform: "translateX(0px)" },
          "25%": { transform: "translateX(-3px)" },
          "75%": { transform: "translateX(3px)" },
        },
      },
    },
  },
  plugins: [],
};


