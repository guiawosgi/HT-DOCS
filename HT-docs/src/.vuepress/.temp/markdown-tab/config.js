import { CodeTabs } from "H:/work/themVue1/HT-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "H:/work/themVue1/HT-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "H:/work/themVue1/HT-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
