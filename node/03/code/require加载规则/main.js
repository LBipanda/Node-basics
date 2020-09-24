require("./a.js")

// 优先从缓存加载
// 由于在 a.js 中已经加载过了
// 所以这里不会重新加载，但是可以拿到其中的接口对象
// 这样做的目的是为了避免重复加载，提高加载效率
var bExports =  require("./b.js")
console.log(bExports)