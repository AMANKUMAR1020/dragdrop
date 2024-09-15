import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
	keyframes: {
	"accordion-down": {
		from: { height: "0" },
		to: { height: "var(--radix-accordion-content-height)" },
	},
	"accordion-up": {
		from: { height: "var(--radix-accordion-content-height)" },
		to: { height: "0" },
	},
	"slide": {
		from: {
		"transform": "translateX(100%)",
		},
		to: {
		"transform": "translateX(0%)",
		}
	},
	"appear": {
		from: {
		opacity: "0",
		transform: "translateY(4rem)",
		},
		to: {
		opacity: "1",
		transform: "translateY(0%)",
		}
	}
	},
	animation: {
	"accordion-down": "accordion-down 0.2s ease-out",
	"accordion-up": "accordion-up 0.2s ease-out",
	"slide": "slide 750ms ease-in-out",
	"appear": "appear 750ms ease-in-out",
	},
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
