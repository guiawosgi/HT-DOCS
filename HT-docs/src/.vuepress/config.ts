import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
export default defineUserConfig({
  base: "/",
head:[['link',{rel:'icon',herf:'favicon.ico'}]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "HT-V5",
      description: "及雨信息科技V5000平台",
    },
    "/en/": {
      lang: "en-US",
      title: "Docs DemoHT-V5",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zht/": {
      lang: "zh-TW",
      title: "HT-V5T",
      description: "儲存",
    },
  },

  theme,
  
  // Enable it with pwa
  // shouldPrefetch: false,
});
