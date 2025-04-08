import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Đổi primary sang màu xanh than đen
      colors: {
        primary: {
          DEFAULT: "#001f3f", // Xanh than đen
          light: "#26374a", // Màu nhạt hơn
          dark: "#000f20", // Màu đậm hơn
        },
      },
      // Giới hạn max-width container = 1200px
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
