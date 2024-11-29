import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar( {
  "/zh/D10/": [
    "",
    {
      text: "配置文档",
      icon: "laptop-code",
      prefix: "D1010/",
      link: "D1010/",
      collapsible: true,
      children: [
        {
          text: "平台简介",
          icon: "lightbulb",
          link: "DD101005/",
          prefix: "DD101005/",
          collapsible: true,
          children: [
            {
              text: "快速开始",
              icon: "book",
              prefix: "DD10100500/",
              link: "DD10100500/",
              children: "structure",
            },
            {
              text: "平台设计哲学",
              icon: "book",
              prefix: "DD10100510/",
              link: "DD10100510/",
              children: "structure",
            }],
        },
        {
          text: "术语概念",
          icon: "lightbulb",
          link: "DD101010/",
          prefix: "DD101010/",
          collapsible: true,
          children: [
            {
              text: "数据源",
              icon: "book",
              prefix: "DD10101000/",
              link: "DD10101000/",
              children: "structure",
            },
            {
              text: "菜单",
              icon: "book",
              prefix: "DD10101005/",
              link: "DD10101005/",
              children: "structure",
            },
            {
              text: "容器",
              icon: "book",
              prefix: "DD10101010/",
              link: "DD10101010/",
              children: "structure",
            },
            {
              text: "表单表格组件",
              icon: "book",
              prefix: "DD10101015/",
              link: "DD10101015/",
              children: "structure",
            },
            {
              text: "流程和流程节点",
              icon: "book",
              prefix: "DD10101020/",
              link: "DD10101020/",
              children: "structure",
            },
            {
              text: "枚举",
              icon: "book",
              prefix: "DD10101025/",
              link: "DD10101025/",
              children: "structure",
            },
            {
              text: "属性组",
              icon: "book",
              prefix: "DD10101030/",
              link: "DD10101030/",
              children: "structure",
            }],
        },
        {
          text: "结构设计",
          icon: "lightbulb",
          link: "DD101015/",
        },
        {
          text: "表单设计",
          icon: "lightbulb",
          link: "DD101020/",
          prefix: "DD101020/",
          collapsible: true,
          children: [
            {
              text: "表单属性",
              icon: "book",
              prefix: "DD10102000/",
              link: "DD10102000/",
              children: "structure",
            },
            {
              text: "表单组件",
              icon: "book",
              prefix: "DD10102010/",
              link: "DD10102010/",
              children: ["DD1010201000.md","DD1010201001.md","DD1010201002.md"],
            },
            {
              text: "表单按钮",
              icon: "book",
              prefix: "DD10102015/",
              link: "DD10102015/",
              children: "structure",
            }],
        },
        {
          text: "表格设计",
          icon: "lightbulb",
          link: "DD101025/",
          prefix: "DD101025/",
          collapsible: true,
          children: [
            {
              text: "表格属性",
              icon: "book",
              prefix: "DD10102500/",
              link: "DD10102500/",
              children: "structure",
            },
            {
              text: "显示字段",
              icon: "book",
              prefix: "DD10102505/",
              link: "DD10102505/",
              children: "structure",
            },
            {
              text: "表格列汇总",
              icon: "book",
              prefix: "DD10102510/",
              link: "DD10102510/",
              children: "structure",
            },
            {
              text: "编辑表格",
              icon: "book",
              prefix: "DD10102515/",
              link: "DD10102515/",
              children: "structure",
            },
            {
              text: "表格组件",
              icon: "book",
              prefix: "DD10102520/",
              link: "DD10102520/",
              children: ["DD1010252000.md","DD1010252001.md","DD1010252002.md"],
            }],
        },
        {
          text: "按钮设计",
          icon: "lightbulb",
          link: "DD101030/",
          prefix: "DD101030/",
          collapsible: true,
          children: [
            {
              text: "平台按钮",
              icon: "book",
              prefix: "DD10103005/",
              link: "DD10103005/",
              children: "structure",
            },
            {
              text: "自定义按钮",
              icon: "book",
              prefix: "DD10103010/",
              link: "DD10103010/",
              children: "structure",
            }],
        },
        {
          text: "数据管理",
          icon: "lightbulb",
          link: "DD101035/",
          prefix: "DD101035/",
          collapsible: true,
          children: [
            {
              text: "导出数据",
              icon: "book",
              prefix: "DD10103505/",
              link: "DD10103505/",
              children: "structure",
            },
            {
              text: "导入数据",
              icon: "book",
              prefix: "DD10103510/",
              link: "DD10103510/",
              children: "structure",
            }],
        },
        {
          text: "查询设计",
          icon: "lightbulb",
          link: "DD101040/",
          prefix: "DD101040/",
          collapsible: true,
          children: [
            {
              text: "快捷查询",
              icon: "book",
              prefix: "DD10104005/",
              link: "DD10104005/",
              children: "structure",
            },
            {
              text: "高级查询",
              icon: "book",
              prefix: "DD10104010/",
              link: "DD10104010/",
              children: "structure",
            }],
        },
        {
          text: "数据联动",
          icon: "lightbulb",
          link: "DD101045/",
          prefix: "DD101045/",
          collapsible: true,
          children: [
            {
              text: "注入概念",
              icon: "book",
              prefix: "DD10104510/",
              link: "DD10104510/",
              children: "structure",
            },
            {
              text: "注入场景",
              icon: "book",
              prefix: "DD10104520/",
              link: "DD10104520/",
              children: ["DD1010452010.md","DD1010452020.md","DD1010452030.md","DD1010452040.md"],
            },
            {
              text: "数据状态联动",
              icon: "book",
              prefix: "DD10104530/",
              link: "DD10104530/",
              children: ["DD1010453010.md","DD1010453020.md"],
            },
            {
              text: "按钮链式调用",
              icon: "book",
              prefix: "DD10104540/",
              link: "DD10104540/",
              children: "structure",
            }],
        },
        {
          text: "审计管理",
          icon: "lightbulb",
          link: "DD101050/",
          prefix: "DD101050/",
          collapsible: true,
          children: [
            {
              text: "平台审计",
              icon: "book",
              prefix: "DD10105010/",
              link: "DD10105010/",
              children: ["DD1010501010.md","DD1010501020.md","DD1010501030.md","DD1010501040.md"],
            },
            {
              text: "自定义审计",
              icon: "book",
              prefix: "DD10105020/",
              link: "DD10105020/",
              children: "structure",
            }],
        },
        {
          text: "打印管理",
          icon: "lightbulb",
          link: "DD101055/",
          prefix: "DD101055/",
          collapsible: true,
          children: [
            {
              text: "模板配置",
              icon: "book",
              prefix: "DD10105510/",
              link: "DD10105510/",
              children: "structure",
            },
            {
              text: "表单打印",
              icon: "book",
              prefix: "DD10105520/",
              link: "DD10105520/",
              children: "structure",
            },
            {
              text: "表格批量打印",
              icon: "book",
              prefix: "DD10105530/",
              link: "DD10105530/",
              children: "structure",
            }],
        },
        {
          text: "权限管理",
          icon: "lightbulb",
          link: "DD101060/",
        },
        {
          text: "高阶配置",
          icon: "lightbulb",
          link: "DD101065/",
          prefix: "DD101065/",
          collapsible: true,
          children: [
            {
              text: "属性组配置",
              icon: "book",
              link: "DD10106510/"
            },
            {
              text: "三方接口调用(EDI)",
              icon: "book",
              link: "DD10106520/"
            },
            {
              text: "进度表格配置",
              icon: "book",
              link: "DD10106530/"
            },
            {
              text: "流程节点",
              icon: "book",
              link: "DD10106540/"
            },
            {
              text: "流程装配",
              icon: "book",
              link: "DD10106550/"
            },
            {
              text: "平台流程组件",
              icon: "book",
              prefix: "DD101056560/",
              link: "DD101056560/",
              children: ["DD10105656005.md","DD10105656010.md"],
            },
            {
              text: "自定义组件",
              icon: "book",
              link: "DD10105020/"
            }
          ],
        },
        {
              text: "拾遗补缺",
              icon: "lightbulb",
              link: "DD101070/",
              prefix: "DD101070/",
              collapsible: true,
              children: [
                {
                  text: "登录流程配置",
                  icon: "book",
                  link: "DD10107010/",
                },
                {
                  text: "系统参数配置",
                  icon: "book",
                  link: "DD10107020/",
                }],
            },
      ],
    },
    {
      text: "JAVA后台二开",
      icon: "book",
      prefix: "D1020/",
      link: "D1020/",
      collapsible: true,
      children: [        
        {
        text: "环境搭建",
        icon: "lightbulb",
        link: "DD102010/"
       },{
        text: "快速开始",
        icon: "lightbulb",
        link: "DD102020/"
       }],
    },
    {
      text: "更新日志",
      icon: "book",
      prefix: "D1030/",
      link: "D1030/",
      children: "structure",
    },
    {
      text: "常见问题",
      icon: "book",
      link: "D1040/"
    },
  ],
  "/zh/D20/": [
    "",
    {
      text: "WMS-仓储物流",
      icon: "laptop-code",
      link: "D2010/"
    },
    {
      text: "MES-生产制造",
      icon: "laptop-code",
      link: "D2020/"
    },
    {
      text: "EMS-设备维保",
      icon: "laptop-code",
      link: "D2030/",
    },
    {
      text: "IOT-无人车间",
      icon: "laptop-code",
      link: "D2040/",
    },


  ],
});
