import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6200ea', // Replace with your preferred color value (hex, rgba, etc.)
        secondary: 'hsl(210, 40%, 96.1%)',
        background: 'var(--background)', // Use the CSS variable as the background color
        foreground: 'var(--foreground)', // Similarly for foreground if needed
        // Add more custom colors here as needed
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
        scale: 'scale 0.3s ease-in-out',
        bounceIn: 'bounceIn 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)',
        rotateIn: 'rotateIn 0.5s ease-out',
      },
      backgroundImage: {
        // Extend gradient color stops for `from-primary`
        'gradient-to-r': 'linear-gradient(to right, var(--primary), #a855f7)',
      },
    },
  },
  plugins: [],
} satisfies Config
