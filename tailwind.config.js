/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			p1: '#FFFFFF',
  			p2: '#FFFFFF',
  			p3: '#FFFFFF',
  			p4: '#005e60',
  			p5: '#FFFFFF',
  			s1: '#FFFFFF',
  			s2: '#FFFFFF',
  			s3: '#FFFFFF',
  			s4: '#FFFFFF',
  			s5: '#FFFFFF',
  			black: {
  				'100': '#05091D',
  				DEFAULT: '#000000'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			'100': '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD',
  			'200': '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #3391FF',
  			'300': '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD',
  			'400': 'inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)',
  			'500': '0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)'
  		},
  		fontFamily: {
  			inter: [
  				'Inter',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		transitionProperty: {
  			borderColor: 'border-color'
  		},
  		spacing: {
  			'22': '88px',
  			'100': '100px',
  			'330': '330px',
  			'388': '388px',
  			'400': '400px',
  			'440': '440px',
  			'512': '512px',
  			'640': '640px',
  			'960': '960px',
  			'1230': '1230px',
  			'1/5': '20%',
  			'2/5': '40%',
  			'3/5': '60%',
  			'4/5': '80%',
  			'3/20': '15%',
  			'7/20': '35%',
  			'9/20': '45%',
  			'11/20': '55%',
  			'13/20': '65%',
  			'15/20': '75%',
  			'17/20': '85%',
  			'19/20': '95%'
  		},
  		zIndex: {
  			'1': '1',
  			'2': '2',
  			'4': '4'
  		},
  		lineHeight: {
  			'12': '48px'
  		},
  		borderRadius: {
  			'14': '14px',
  			'20': '20px',
  			'40': '40px',
  			half: '50%',
  			'7xl': '40px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		flex: {
  			'50': '0 0 50%',
  			'100': '0 0 100%',
  			'256': '0 0 256px',
  			'280': '0 0 280px',
  			'300': '0 0 300px',
  			'320': '1px 0 320px',
  			'540': '0 0 540px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
