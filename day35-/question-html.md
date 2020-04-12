# day35-

1. 【35】用一个div模拟textarea的实现  
    `<div class="edit" contenteditable="true" style="resize: both; overflow: auto;"></div>`  
    resize可以自动拉伸

2. 【36】HTML与XHTML二者有不同  
    XHTML更严格：更严谨更纯净的 HTML 版本  
    XHTML 标签必须关闭  
    XHTML所有标签必须小写  
    XHTML标签必须正确嵌套

3. 【37】html5哪些标签可以优化SEO?  
    `<meta>`中的`title，description，keyword`  
    语义化标签：  
    `<nav>,<header>,<main>,<article>,<section>,<aside>,<footer>,<figure>,<picture>,<time>,<video>,<audio>`

4. 【38】说说你对cookie和session的理解  
    由于 http 是无状态的，服务端没法记录客户端的状态。因此`cookie`和`session`本身就是为了记录客户端的状态。  
    只是`cookie`是存放在客户端而`session`是记录在服务端。`cookie`可以在客户端生成也可以由服务器生成传给客户端，通过`name=value`的形式存储数据。  
    一般`cookie`会记录一个由服务端生成的`token`，`session`同样会记录这个`token`。服务端就可以通过`token`来鉴别身份。

5. 【39】title与h1、b与strong、i与em的区别分别是什么？  
    - title标签写在body里面不会被渲染,只能写在head里面,对网站SEO比较重要
    - h1标签写在body里面,但是写在head里(不推荐),渲染的时候会自动渲染到body里面去
    - b标签与strong标签在表现上是一样的,都自带font-weight: bold属性
    - i标签与em标签在表现上是一样的,都自带font-style: italic属性
    - b标签与i标签是物理标记,告诉浏览器以何种格式显示文字
    - strong标签与em标签是逻辑标记,逻辑元素告诉浏览器这些文字有怎么样的重要性

6. 【40】html5都有哪些新的特性？移除了哪些元素？  
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

7. 【41】webSocket怎么做兼容处理？  
    Socke.IO:
    - Adobe Flash Socket（缺点：需要在服务器上打开一个额外的端口，默认为10843）
    - Ajax long polling
    - Ajax multipart streaming
    - Forever iframe
    - JSONP polling

8. 【42】解释下什么是ISISO8859-2字符集？  
    算是ASCII码的拓展字符集
    > ISO/IEC 8859-1，又称Latin-1或“西欧语言”，ISO/IEC 8859-2 Latin-2或“中欧语言”，是国际标准化组织内ISO/IEC 8859的8位字符集。它以ASCII为基础，在空置的0xA0-0xFF的范围内，加入192个字母及符号，藉以供使用变音符号的拉丁字母语言使用。

    [参考资料](https://baike.baidu.com/item/ASCII/309296?fr=aladdin#6)

9. 【43】如何让元素固定在页面底部？有哪些比较好的实践？  
    `sticky footer`布局：  
    有`absolute`，`calc`，`table`，`FlexBox`等方案。  
    [Sticky Footer，完美的绝对底部](https://aotu.io/notes/2017/04/13/Sticky-footer/index.html)

10. 【44】说说video标签中预加载视频用到的属性是什么？  
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

11. 【45】xml与html有什么区别？  
    1. html不区分大小写，xml区分大小写
    2. html可以没有闭合标签，xml必须有闭合标签
    3. html可以拥有不带值的属性名，xml中所有的属性必须带值
    4. html是用于显示数据，xml主要用于描述，存放数据
    5. html的多个空格会被合并成一个空格，而xml不会
