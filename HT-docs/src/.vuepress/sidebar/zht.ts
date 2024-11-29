import { sidebar } from "vuepress-theme-hope";

export const zhtSidebar = sidebar({
  "/zht/": [
    "",
    {
      text: "平台配置文档",
      icon: "book",
      prefix: "theplatconfig/",
      link: "theplatconfig/",
      children: "structure",
    },
  ],
});
