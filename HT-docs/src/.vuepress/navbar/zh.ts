import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "",
  {
    text: "及雨平台",
    icon: "book",
    prefix:"/zh/D10/",
    children:[{
      text: "配置文档",
      icon: "lightbulb",
      prefix: "D1010/",
      children: [""],
    },
    {
      text: "JAVA二开",
      icon: "lightbulb",
      prefix: "D1020/",
      children: [""],
    },
    {
      text: "更新日志",
      icon: "lightbulb",
      prefix: "D1030/",
      children: [""],
    },
    {
      text: "常见问题",
      icon: "lightbulb",
      prefix: "D1040/",
      children: [""],
    }] 

  },
  {
    text: "场景方案",
    icon: "book",
    prefix:"/zh/D20/",
    children:[{
      text: "WMS-仓储物流",
      icon: "lightbulb",
      prefix: "D2010/",
      children: [""],
    },
    {
      text: "MES-生产制造",
      icon: "lightbulb",
      prefix: "D2020/",
      children: [""],
    },
    {
      text: "EMS-设备维保",
      icon: "lightbulb",
      prefix: "D2030/",
      children: [""],
    },
    {
      text: "IOT-无人车间",
      icon: "lightbulb",
      prefix: "D2040/",
      children: [""],
    }] 

  }
  
  
]);
