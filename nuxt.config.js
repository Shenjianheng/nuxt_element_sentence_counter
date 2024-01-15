import i18n from "./plugins/i18n";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      // 设置title多语言
      title: this.$t("head.title"),
      // 设置html标签的lang属性多语言
      htmlAttrs: {
        lang: this.$t("head.htmlAttrs.lang"),
      },
      // 设置meta标签的相关属性
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { hid: 'description', name: 'description', content: this.$t('head.meta.description') },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  // Server: https://www.nuxtjs.cn/api/configuration-server
  // server: {
  //   port: 3000,
  //   host: '127.0.0.1'
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', './static/css/reset.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', '@/plugins/i18n'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Configure project packaging path: https://www.nuxtjs.cn/api/configuration-builddir
  buildDir: ".nuxt/dist",

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org/v7/setup
    [
      '@nuxtjs/i18n', {
        defaultLocale: 'zh',
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            text: 'US',
            name: 'English'
          },
          {
            code: 'zh',
            iso: 'zh-CN',
            text: 'CN',
            name: '简体中文'
          },
          {
            code: 'ja',
            iso: 'ja-JP',
            text: 'JP',
            name: '日本語'
          },
          {
            code: 'ko',
            iso: 'ko-KR',
            text: 'KR',
            name: '한국어'
          },
          {
            code: 'fr',
            iso: 'fr-FR',
            text: 'FR',
            name: 'Français'
          },
          {
            code: 'fil',
            iso: 'fil-PH',
            text: 'PH',
            name: 'Pilipino'
          },
        ],
        vueI18n: i18n,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        },
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
}
