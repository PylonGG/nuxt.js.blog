export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || 'Pylon Blog',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: './icons/favicon.ico' },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: 'https://beta-cdn.pylon.gg/icons/favicon-16x16.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: 'https://beta-cdn.pylon.gg/icons/favicon-32x32.png'
            },
            {
                rel: 'apple-touch-icon',
                type: 'image/png',
                sizes: '180x180',
                href: 'https://beta-cdn.pylon.gg/icons/apple-touch-icon.png'
            },
            {
                rel: 'manifest',
                href: 'https://beta-cdn.pylon.gg/icons/site.webmanifest'
            },
            {
                rel: 'mask-icon',
                href: 'https://beta-cdn.pylon.gg/icons/safari-pinned-tab.svg',
                color: '#9a3dff'
            },
            {
                name: 'msapplication-TileColor',
                content: '#f6f6f6'
            },
            {
                name: 'theme-color',
                content: '#9a3dff'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#9a3dff' },
    /*
     ** Global CSS
     */
    css: ['./assets/flexbox-grid.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        '@nuxtjs/axios'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxt/content', '@nuxtjs/axios'],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    router: {
        prefetchLinks: false
    }
}
