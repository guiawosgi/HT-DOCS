import comp from "H:/work/themVue1/HT-docs/src/.vuepress/.temp/pages/zh/changelog/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/changelog/\",\"title\":\"更新日志\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"更新日志\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"平台帮助文档\"],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/changelog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"HT-V5\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"更新日志\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"更新日志\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"及雨信息科技\\\",\\\"url\\\":\\\"https://helptimely.com/\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"zh/changelog/README.md\"}")
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
