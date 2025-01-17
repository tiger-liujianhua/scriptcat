import { zh_CN } from './cn';
import { en } from './en';
import VueI18n from 'vue-i18n';
import Vuetify from "vuetify";
import Vue from "vue";

Vue.use(VueI18n);
Vue.use(Vuetify);

export const messages = {
    "zh_CN": zh_CN,
    "en": en,
};

let defaultLocale = chrome.i18n.getUILanguage().replaceAll('-', '_');

if (!(<any>messages)[defaultLocale]) {
    defaultLocale = "en";
}

export const i18n = new VueI18n({
    locale: defaultLocale,
    messages: messages,
});

export const vuetify = new Vuetify({
    // lang: {
    //     t: (key, ...params) => <string>i18n.t(key, params),
    // }
});
