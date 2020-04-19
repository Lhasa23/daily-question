# day35-

1. 【35】用一个 div 模拟 textarea 的实现  
   `<div class="edit" contenteditable="true" style="resize: both; overflow: auto;"></div>`  
   resize 可以自动拉伸

2. 【36】HTML 与 XHTML 二者有不同  
   XHTML 更严格：更严谨更纯净的 HTML 版本  
   XHTML 标签必须关闭  
   XHTML 所有标签必须小写  
   XHTML 标签必须正确嵌套

3. 【37】html5 哪些标签可以优化 SEO?  
   `<meta>`中的`title，description，keyword`  
   语义化标签：  
   `<nav>,<header>,<main>,<article>,<section>,<aside>,<footer>,<figure>,<picture>,<time>,<video>,<audio>`

4. 【38】说说你对 cookie 和 session 的理解  
   由于 http 是无状态的，服务端没法记录客户端的状态。因此`cookie`和`session`本身就是为了记录客户端的状态。  
   只是`cookie`是存放在客户端而`session`是记录在服务端。`cookie`可以在客户端生成也可以由服务器生成传给客户端，通过`name=value`的形式存储数据。  
   一般`cookie`会记录一个由服务端生成的`token`，`session`同样会记录这个`token`。服务端就可以通过`token`来鉴别身份。

5. 【39】title 与 h1、b 与 strong、i 与 em 的区别分别是什么？

   - title 标签写在 body 里面不会被渲染,只能写在 head 里面,对网站 SEO 比较重要
   - h1 标签写在 body 里面,但是写在 head 里(不推荐),渲染的时候会自动渲染到 body 里面去
   - b 标签与 strong 标签在表现上是一样的,都自带 font-weight: bold 属性
   - i 标签与 em 标签在表现上是一样的,都自带 font-style: italic 属性
   - b 标签与 i 标签是物理标记,告诉浏览器以何种格式显示文字
   - strong 标签与 em 标签是逻辑标记,逻辑元素告诉浏览器这些文字有怎么样的重要性

6. 【40】html5 都有哪些新的特性？移除了哪些元素？

   - 新增特性：
     canvas  
      svg  
      video  
      drag & drop  
      localStorage/sessionStorage  
      语义化标签: header/nav/section/article/footer  
      input 类型: date/datetime/email/range
   - 移除元素：  
      applet  
      big  
      font  
      frame/frameset

7. 【41】webSocket 怎么做兼容处理？  
   Socke.IO:

   - Adobe Flash Socket（缺点：需要在服务器上打开一个额外的端口，默认为 10843）
   - Ajax long polling
   - Ajax multipart streaming
   - Forever iframe
   - JSONP polling

8. 【42】解释下什么是 ISISO8859-2 字符集？  
   算是 ASCII 码的拓展字符集

   > ISO/IEC 8859-1，又称 Latin-1 或“西欧语言”，ISO/IEC 8859-2 Latin-2 或“中欧语言”，是国际标准化组织内 ISO/IEC 8859 的 8 位字符集。它以 ASCII 为基础，在空置的 0xA0-0xFF 的范围内，加入 192 个字母及符号，藉以供使用变音符号的拉丁字母语言使用。

   [参考资料](https://baike.baidu.com/item/ASCII/309296?fr=aladdin#6)

9. 【43】如何让元素固定在页面底部？有哪些比较好的实践？  
   `sticky footer`布局：  
   有`absolute`，`calc`，`table`，`FlexBox`等方案。  
   [Sticky Footer，完美的绝对底部](https://aotu.io/notes/2017/04/13/Sticky-footer/index.html)

10. 【44】说说 video 标签中预加载视频用到的属性是什么？  
    `<video></video>`
    |属性|值|描述
    |-----|-----|---------------|
    |autoplay|autoplay|如果出现该属性，则视频在就绪后马上播放。|
    |controls|controls|如果出现该属性，则向用户显示控件，比如播放按钮。
    |height|pixels|设置视频播放器的高度。|
    |loop|loop|如果出现该属性，则当媒介文件完成播放后再次开始播放。|
    |preload|preload|如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。|
    |src|url|要播放的视频的 URL。|
    |width|pixels|设置视频播放器的宽度。|

11. 【45】xml 与 html 有什么区别？

    1. html 不区分大小写，xml 区分大小写
    2. html 可以没有闭合标签，xml 必须有闭合标签
    3. html 可以拥有不带值的属性名，xml 中所有的属性必须带值
    4. html 是用于显示数据，xml 主要用于描述，存放数据
    5. html 的多个空格会被合并成一个空格，而 xml 不会

12. 【46】页面中怎么嵌入 Flash？有哪些方法？  
    **pass**

13. 【47】HTML5 如何使用音频和视频？  
    `HTML5`新标签可以直接用`video`和`audio`，但是想要自动播放还有些兼容性问题，在手机上各浏览器需要做兼容处理。

14. 【48】说说你对 WEB 标准和 W3C 的理解与认识？  
    html 是名词--表现  
    css 是形容词--结构  
    javascript 是动词--行为  
    以上这三个东西就形成了一个完整的网页，但是 js 改变时，可以会造成 css 和 html 的混乱，让这三个的界限不是那么清晰。

    这个时候，web 标准就出来了，web 标准一般是将该三部分独立分开，使其更具有模块化。

    W3C 对 web 标准提出了规范化的要求，也就是在实际编程中的一些代码规范：包含如下几点

    1. 对于结构要求：（标签规范可以提高搜索引擎对页面的抓取效率，对 SEO 很有帮助）  
       标签字母要小写  
       标签要闭合  
       标签不允许随意嵌套
    2. 对于 css 和 js 来说

       尽量使用外链 css 样式表和 js 脚本。是结构、表现和行为分为三块，符合规范。同时提高页面渲染速度，提高用户的体验。
       样式尽量少用行间样式表，使结构与表现分离，标签的 id 和 class 等属性命名要做到见文知义，标签越少，加载越快，用户体验提高，代码维护简单，便于改版

    这里顺便解释下什么是 web 标签语义化，即用正确的标签做正确的事情。

    比如：

    W3C 组织意识到了之前 HTML 版本的不足，推出的 HTML5 进一步推进了 Web 语义化发展，采用了诸如 footer、section 等语义化标签，弥补了采用 id="footer"或者 class="footer"形式的不足，以更好的推动 Web 的发展。

15. 【49】说说你对 target="\_blank"的理解？有啥安全性问题？如何防范？  
    使用一个新的空白标签页打开链接  
    安全性问题：如果 url 中带有敏感信息, 会被第三方网站读取到 document.referer

16. 【50】Ajax 与 Flash 的优缺点分别是什么？
17. 【51】Form 表单是怎么上传文件的？你了解它的原理吗？  
     简单来说就是把文件转化成字节流，然后使用 http 进行传输，后端接受后在把二进制转化成原先的文件格式。  
    在 HTML 表单中，可以上传文件的唯一控件就是`<input type="file">`。  
    当一个表单包含`<input type="file">`时，表单的 enctype 必须指定为`multipart/form-data`（表明表单需要上传二进制数据），method 必须指定为 post，浏览器才能正确编码并以`multipart/form-data`格式发送表单的数据。`multiple="multiple"`说明可以同时上传多个文件

18. 【52】From 表单提交时为什么会刷新页面？怎么预防刷新？  
    因为早期网页交互模型只能是浏览器提交数据给服务器，服务器做出响应重新返回一个页面，浏览器加载这个页面进行显示。早期前端没有编程式发送网络请求的 API，更没有前端路由管理的概念，所以表单提交跳转页面是广泛接受的方案。

    不想刷新可以使用 JS 拦截 form 的 onsubmit 事件，阻止掉浏览器的默认行为，然后用 ajax/fetch 和后台交互。另一个偏方是使用 iframe 作为 form 的 target，不过 JS 处理方面不如让浏览器别管自己全手动发请求来得简单。
