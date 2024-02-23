const themeDir = __dirname;

module.exports = {
    plugins: [
        require('tailwindcss')(__dirname + '/tailwind.config.js'),
        require('autoprefixer')({
            path: [themeDir]
        })
    ]
}
