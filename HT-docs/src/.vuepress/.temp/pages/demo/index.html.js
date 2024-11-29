import comp from "H:/work/themVue1/HT-docs/src/.vuepress/.temp/pages/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/\",\"title\":\"Features demo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Features demo\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"Guide\"],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/demo/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"HT-V5\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Features demo\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Features demo\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"及雨信息科技\\\",\\\"url\\\":\\\"https://helptimely.com/\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"demo/README.md\"}")
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
