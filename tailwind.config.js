/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#2563EB",
                "primary-dark": "#1d4ed8",
                "background-light": "#ffffff",
                "background-dark": "#111827",
                "surface-light": "#f3f4f6",
                "surface-dark": "#1f2937",
                secondary: "#7986cb",
            },
            fontFamily: {
                sans: ["'Noto Sans KR'", "sans-serif"],
                display: ["'Playfair Display'", "serif"],
            },
            borderRadius: {
                DEFAULT: "0.75rem",
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'glow': '0 0 15px rgba(40, 53, 147, 0.3)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
