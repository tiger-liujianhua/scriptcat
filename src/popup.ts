import "reflect-metadata";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { languages } from "monaco-editor";

import "vuetify/dist/vuetify.min.css";

import App from "@App/views/pages/Popup/index.vue";
// @ts-ignore
import dts from "@App/types/tampermonkey.d.ts";
import { migrate } from "./model/migrate";
import { i18n, vuetify } from "../i18n/i18n";

migrate();

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Home",
        component: () => import("@App/views/options/ScriptList.vue"),
    },
    {
        path: "/edit/:id?",
        name: "Edit",
        component: () => import("@App/views/options/Editor.vue"),
    },
    {
        path: "/logger",
        name: "Logger",
        component: () => import("@App/views/options/Logger.vue"),
    },
];

const router = new VueRouter({
    mode: "hash",
    base: "options.html",
    routes,
});

// @ts-ignore
self.MonacoEnvironment = {
    getWorkerUrl: function(moduleId: any, label: any) {
        if (label === "typescript" || label === "javascript") {
            return "./src/ts.worker.js";
        }
        return "./src/editor.worker.js";
    },
};

languages.typescript.javascriptDefaults.addExtraLib(dts, "tampermonkey.d.ts");

new Vue({
    router,
    i18n,
    vuetify: vuetify,
    render: (h) => h(App),
}).$mount("#app");