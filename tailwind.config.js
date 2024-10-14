/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},

		extend: {
			colors: {
				//! Primary Colors
				primary: '#0D53FC',
				'pri-dark': '#032C58',
				'pri-pressed': '#0A3FBF',
				'pri-hover': '#0B47D9',
				'pri-light': '#E7EEFF', // primary-Light
				'pri-top-light': '#E7EEFF', // Primary-Top light-BG
				//! Secondary Colors
				secondary: '#55C397',
				green: '#006621',
				blue: '#1B0DAB',
				'sec-dark': '#004328', //secondary-dark
				'sec-pressed': '#3E8F6E',
				'sec-hover': '#49A882',
				'sec-light': '#EEF9F5',

				//! Grayscale Colors
				black: '#000000',
				title: '#002042',
				subtitle: '#55607A',
				gray: '#8393A2',
				grayIcon: '#666666',
				hint: '#8791A8', // hint, light icons,text
				inactive: '#C0C7D6', //inactive icons
				constrained: '#E8EBF2',
				'borders-lines': '#E8EBF2', // borders, lines
				'light-1': '#F9FAFC', // BG1
				'light-2': '#F2F3F7', // BG2, light borders
				'light-3': '#F3F7FF', // BG2, light borders

				//! Semantic & illustration colors
				'neutral-1': '#FFCC73',
				warning: '#F59556',
				error: '#EC5151',
				'neutral-2': '#D65036',
				tips: '#446CCE', // info, tips
				success: '#49C596',
				/////////////////////////////////////////////
				//shadcn
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				// primary: {
				//   DEFAULT: "hsl(var(--primary))",
				//   foreground: "hsl(var(--primary-foreground))",
				// },
				// secondary: {
				//   DEFAULT: "hsl(var(--secondary))",
				//   foreground: "hsl(var(--secondary-foreground))",
				// },
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			/////////////////////////////////////////////
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			backgroundImage: {
				'brand-gradient': 'linear-gradient(313.9deg, #0D53FC -2.74%, #55C397 140.56%)',
			},
			fontSize: {
				'clamp-title': 'clamp(18px, 2.5vw, 22px)',
				'clamp-paragraph': 'clamp(14px, 2.5vw, 16px)',
				'clamp-container': 'clamp(500px, 50vw, 1186px)',
				// clamp: "font-size: clamp(0.625rem, 0.3501rem + 1.0676vw, 1.375rem);",
			},
			boxShadow: {
				'custom-shadow': '0px 5px 15px 0px #7C82B90D',
			},
			spacing: {
				15: '3.75rem',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
