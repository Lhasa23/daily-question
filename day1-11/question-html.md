# HTML

## 结论 → 区别 → 争议 → 细节 → 祖坟 → 感想

1. link和@import导入样式表有何区别  
    * link是HTML标签，除了样式表还能导入其他跟多资源(RSS,rel)，@import是CSS提供的
    * link没有兼容性问题，@import只兼容ie5以上版本
    * link可以通过js操作DOM加入，@import则不行
    * link引入的样式表是和元素同步加载的，@import是等待元素全部加载完后再加载的
    * [总结](https://www.cnblogs.com/my--sunshine/p/6872224.html)：尤其涉及两者的权重之争

2. html的元素有哪些  
    * 块级元素：  
        head、meat - 申明页面的诸多属性、title - 窗口标题  
        style - 样式、body - 文本内容、header - 头部块、section - 内容块、footer - 底部块、article - 文章标签、aside、nav、menu、bir、hr - 下划线、h1-h6 描述标题、div、p、ul、li、ol、oi、dl、dt、dd、form、table、theader、tbody、tr、th  
    * 行内元素:  
        label、a、span、td、input、button、strong、b、i

3. HTML全局属性(global attribute)有哪些  
    全局属性：用于任何HTML5元素的属性:  
    id, class, data-*, style, hidden, tabindex(设置元素可以获得焦点，通过tab导航)

4. HTML5的文件离线储存怎么使用，工作原理是什么？  
    storage和cookie||cache manifest文件？[HTML5离线机制](https://segmentfault.com/a/1190000000732617)

5. 简述超链接target属性的取值和作用  
    _self: 在当前窗口打开页面  
    _blank: 在新窗口打开页面  
    _top: 在整个框架打开页面  在iframe或者frameset里用的比较多

6. label都有哪些作用？  
    label首先能够关联表单，使得表单元素获得焦点(通过for属性关联相应id的表单元素)

7. iframe框架都有哪些优缺点？  
    * 优点  
        重载页面时不需要重载整个页面，只需要重载页面中的一个框架页  
        技术易于掌握，使用方便，可主要应用于不需搜索引擎来搜索的页面  
        方便制作导航栏
    * 缺点  
        会产生很多页面，不容易管理  
        不容易打印  
        对浏览器搜索引擎不友好  
        多框架的页面会增加服务器的http请求

8. 简述下html5的离线储存原理，同时说明如何使用？  
    与第四天(4.)问题高度相似，暂时没用过，不是很想看

9. 浏览器内多个标签页之间的通信方式有哪些？  
    借助`cookie`,`localStorage`(`sessionStorage`在某些场景下并不能跨标签，必须要原页面的`a`标签的`target=_blank`才行)。这些只要在同一个域名下就可以进行通信和数据的共享  
    借助`window.postMessage`API 来进行消息的传递
    * 总结：  
        WebSocket （可跨域）  
        postMessage（可跨域）  
        Worker之SharedWorker  
        Server-Sent Events  
        localStorage  
        BroadcastChannel  
        Cookies  
        Vue-vuex

10. viewport常见设置都有哪些？  
    `viewport`就是视区窗口，也就是浏览器中显示网页的部分。PC端上基本等于设备显示区域，但在移动端上`viewport`会超出设备的显示区域（即会有横向滚动条出现）。  
    [移动前端开发之 viewport 的深入理解](https://www.cnblogs.com/2050/p/3877280.html)

11. 你对标签语义化的理解是什么？  
    见名知意，便于重构代码和SEO(搜索引擎优化)，正确的标签做正确的事，让代码简洁。
