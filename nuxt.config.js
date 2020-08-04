const nuxtConfig = {
    modules: [
        ["nuxt-i18n", {
            differentDomains: true,
            defaultLocale: "es",
            vuex: {
                syncMessages: true,
                syncLocale: true,
            },
            locales: [
                {
                    code: 'en',
                    domain: 'localhost:3000',
                },
                {
                    code: 'fr',
                    domain: 'fr.localhost:3000',
                },
            ],
            vueI18n: {
                fallbackLocale: "es",
                messages: {
                    "en": {
                        home: {
                            title: "Hello"
                        }
                    },
                    "fr": {
                        home: {
                            title: "Bonjour"
                        }
                    },
                    "es": {
                        home: {
                            title: "Hola"
                        }
                    },
                }
            },
        }],
    ]
};

export default nuxtConfig;