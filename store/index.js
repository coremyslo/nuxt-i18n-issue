export default {
    actions: {
        nuxtServerInit({commit, dispatch, rootGetters}, context) {
            context.app.i18n.setLocaleMessage("fr", {
                home: {
                    title: "yo"
                },
            });
        }
    }
}