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
