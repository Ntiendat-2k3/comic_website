import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Định nghĩa màu chủ đạo (primary) là màu hồng
      colors: {
        primary: {
          DEFAULT: "#ec4899", // Tương đương pink-500 của Tailwind
          light: "#f472b6", // pink-400
          dark: "#db2777", // pink-600
        },
        // Hoặc bạn có thể đổi sang màu hồng riêng (VD #ff69b4)
        // brandPink: "#ff69b4",
      },

      // Cấu hình container
      container: {
        center: true,
        padding: "1rem",
        screens: {
          // Ở breakpoint xl, container có max-width = 1200px
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
