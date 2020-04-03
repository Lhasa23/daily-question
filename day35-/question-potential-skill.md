# day35-

1. 【35】谈一谈你知道的前端性能优化方案有哪些？  
    [前端性能优化](https://github.com/haizlin/fe-interview/issues/131)
    1. 缓存  
    http缓存 设置好cache-control expires Last-modified；
    前端缓存 对于一些页面今天配置直接存储到localStorage中；对于长期不发生改变的代码可以直接通过server-work存储到本地；
    2. 优化加载  
    webpack 开启 tree-shaking 减少代码体积
    通过preload prefetch优化加载资源的时间
    import('').then()异步加载资源
    图片小于30k的图片直接做成base64；
    对于首屏的样式可以直接内嵌到html中；
    3. 服务端渲染  
    SSR  
    对于首页可以直接通过node jade模板引擎输出，其他页面继续使用前端渲染，优化首屏、SEO