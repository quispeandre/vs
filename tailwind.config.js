/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                }
            },
            animation: {
                scaleIn: 'scaleIn 0.3s ease-out forwards',
                fadeIn: 'fadeIn 0.3s ease-out forwards',
                fadeInUp: 'fadeInUp 0.5s ease-out forwards',
                slideInLeft: 'slideInLeft 0.5s ease-out forwards'
            },
            boxShadow: {
                'glow-red': '0 0 8px #d33b38, 0 0 16px #d33b38',
            },
        },
    },
    plugins: [],
};