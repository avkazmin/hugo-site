module.exports = {
    darkMode: 'class',
    content: {
        files: ["./hugo_stats.json"]
    },
    theme: {
        extend: {
            fontFamily: {
                'MailSans': ['MailSans']
            },
            typography: {
                DEFAULT: {
                    css: {
                        '--tw-prose-body': 'var(--black-light)',
                        '--tw-prose-links': 'var(--link-color)',
                        '--tw-prose-bullets': 'var(--black-light)',
                        '--tw-prose-headings': 'var(--black-light)',
                        '--tw-prose-counters': 'var(--black-light)',
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ]
}
