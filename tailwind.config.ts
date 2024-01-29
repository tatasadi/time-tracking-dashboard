import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(246, 80%, 60%)",
          orange: "hsl(15, 100%, 70%)",
          turkis: "hsl(195, 74%, 62%)",
          red: "hsl(348, 100%, 68%)",
          green: "hsl(145, 58%, 55%)",
          violet: "hsl(264, 64%, 52%)",
          yellow: "hsl(43, 84%, 65%)",
        },
        neutral: {
          "very-dark-blue": "hsl(226, 43%, 10%)",
          "dark-blue": "hsl(235, 46%, 20%)",
          "desaturated-blue": "hsl(235, 45%, 61%)",
          "pale-blue": "hsl(236, 100%, 87%)",
        },
      },
    },
  },
  plugins: [],
}
export default config
