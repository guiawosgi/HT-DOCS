import comp from "H:/work/themVue1/HT-docs/src/.vuepress/.temp/pages/guide/foo/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/foo/\",\"title\":\"Foo feature\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Foo feature\",\"icon\":\"lightbulb\",\"description\":\"Introduction We support foo feature, ... Details ...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/guide/foo/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"HT-V5\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Foo feature\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Introduction We support foo feature, ... Details ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Foo feature\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"及雨信息科技\\\",\\\"url\\\":\\\"https://helptimely.com/\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"link\":\"#introduction\",\"children\":[]},{\"level\":2,\"title\":\"Details\",\"slug\":\"details\",\"link\":\"#details\",\"children\":[]}],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"guide/foo/README.md\",\"autoDesc\":true}")
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
