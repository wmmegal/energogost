/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        container: {
            center: true,
            padding: '15px',
            screens: {
                sm: '375px',
                md: '575px',
                lg: '767px',
                xl: '1200px',
            },
        },
        colors: {
            primary: '#116cc1',
            secondary: '#f04d06',
            white: '#FFFFFF',
            black: '#000000',
        },
        extend: {
            fontSize: {
                '4xl': ['44px', '1.2'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
