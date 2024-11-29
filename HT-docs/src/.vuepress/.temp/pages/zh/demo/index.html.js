import comp from "H:/work/themVue1/HT-docs/src/.vuepress/.temp/pages/zh/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/demo/\",\"title\":\"主要功能与配置演示\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"主要功能与配置演示\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"使用指南\"],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/demo/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"HT-V5\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主要功能与配置演示\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"主要功能与配置演示\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"及雨信息科技\\\",\\\"url\\\":\\\"https://helptimely.com/\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":22},\"filePathRelative\":\"zh/demo/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
