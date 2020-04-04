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

2. 【36】对于前端安全，你了解多少？说说你对XSS和CSRF的理解  
    XSS攻击全称跨站脚本攻击,一般有sql注入，js脚本注入。评论类型模块的提交过程中不要相信客户的输入内容，需要进行转义。同理也不要百分百相信服务端发来的展示内容，同样需要转义。  
    CSRF跨站请求伪造，冒充正确用户登录做一些操作。请求需要鉴权，比如携带token，或者利用seesion，cookie来鉴权。敏感信息提交可以使用验证码
