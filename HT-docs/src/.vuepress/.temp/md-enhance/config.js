import CodeDemo from "H:/work/themVue1/HT-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "H:/work/themVue1/HT-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "H:/work/themVue1/HT-docs/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "H:/work/themVue1/HT-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
