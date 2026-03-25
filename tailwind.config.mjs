/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a2e',
        'dark-accent': '#0f0f1a',
        'steel-blue': '#4a6fa5',
        'steel-light': '#6b8fc4',
        'metallic-gold': '#c4a35a',
        'gold-light': '#e8c87a',
        'gold-dim': '#8a6e35',
      },
      fontFamily: {
        noto: ['"Noto Sans JP"', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 4s linear infinite',
        'grid-drift': 'grid-drift 20s linear infinite',
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite alternate',
        'particle-float': 'particle-float 8s ease-in infinite',
        'hero-rise': 'hero-rise 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'curtain-lift': 'curtain-lift 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s forwards',
        'ring-expand': 'ring-expand 0.6s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'grid-drift': {
          '0%': { backgroundPosition: '0 0, 0 0' },
          '100%': { backgroundPosition: '40px 40px, 40px 40px' },
        },
        'glow-pulse': {
          '0%': { opacity: '0.6', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.08)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-100vh) translateX(20px)', opacity: '0' },
        },
        'hero-rise': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'curtain-lift': {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' },
        },
        'ring-expand': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
