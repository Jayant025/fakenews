/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          500: '#3b82f6',
          600: '#2563eb'
        },
        success: '#10b981',
        danger: '#ef4444',
        warning: '#f59e0b'
      },
      boxShadow: {
        premium: '0 20px 45px -12px rgba(15, 23, 42, 0.45)'
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 15% 20%, rgba(37,99,235,0.25), transparent 35%), radial-gradient(circle at 85% 0%, rgba(168,85,247,0.22), transparent 38%), linear-gradient(120deg, #020617 0%, #0f172a 55%, #1e293b 100%)'
      }
    }
  },
  plugins: []
};
