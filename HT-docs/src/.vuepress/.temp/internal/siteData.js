export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"herf\":\"favicon.ico\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"HT-V5\",\"description\":\"及雨信息科技V5000平台\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"Docs DemoHT-V5\",\"description\":\"A docs demo for vuepress-theme-hope\"},\"/zht/\":{\"lang\":\"zh-TW\",\"title\":\"HT-V5T\",\"description\":\"儲存\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
