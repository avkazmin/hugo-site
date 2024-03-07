const typography = require('@tailwindcss/typography');

module.exports = {
    prefix: 'hx-',
    darkMode: ['class', 'html[class~="dark"]'],
    content: ['./hugo_stats.json'],
    plugins: [typography],
    theme: {
        extend: {
            colors: {
                dark: '#111'
            },
        }
    }
};
