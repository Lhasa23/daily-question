# day12-34

1. 【12】常见的浏览器内核都有哪些？并介绍下你对内核的理解  
    内核主要分为渲染引擎和 JS 引擎。前者负责页面的渲染，后者负责执行解析 JavaScript。  
    之后，由于 JS 引擎越来越独立，现在所说的浏览器内核大都指渲染引擎。

    目前主流的内核有以下 4 个：  
    * Trident: 由微软开发，即我们熟知的 IE 内核
    * Gecko: 使用 C++ 开发的渲染引擎，包括了 SpiderMonkey 即我们熟悉的 FireFox
    * Presto: Opera 使用的内核
    * Webkit: 前端使用最多的 Chrome 和 Safari 使用的内核

2. 【13】html5中的form怎么关闭自动完成？  
    autocomplete="off"

3. 【14】为什么HTML5只需要写\<\!DOCTYPE HTML\>就可以？  
    因为 HTML5 与 HTML4 基于的基准不同。HTML4 基于 SGML 因此需要除了`DOCTYPE`外还需要引入 DTD 来告诉浏览器用什么标准进行渲染。DTD 还分为标准模式、严格模式。如果什么都不写，就完全让浏览器自我发挥，会变成怪异模式。  
    HTML5 不基于 SGML，因此后面就不要跟 DTD，但是需要`DOCTYPE`来规范浏览器的渲染行为。  
    注：SGML 是通用标记语言的集合。其中有 HTML、XML，因此需要用 DTD 来指定使用那种规范。

4. 【15】title与h1的区别、b与strong的区别、i与em的区别？  
    title 是 网页标题标签  
    h1 是文本标签 默认与word的h1相似为最大的标题显示  
    b 为文本加粗标签 与word的加粗功能相似  
    strong 为强调语气，也是为文本加粗 与b标签是有不同  
    i 标签为斜体 常用于阿里图标 和图片  
    em 标签为 斜体 用于文本斜体较多

5. 【16】元素的alt和title有什么区别？  
    `alt`属性：最常见用在`<img>`标签上，用于在各种原因导致的图片资源没能加载出来的情况下代替图片显示图片描述。  
    `title`属性：`title`属性设置一些文本提示信息，这些信息通常会在鼠标移到元素上时显示一段工具提示文本。`title`还有一个很好地应用，即为`<a>`标签添加一段说明文本。  
    `title`标签：`title`的重要性不可同日而语，首先会给读者(浏览网页者)提供一个最初的印象；其次，网页的标题才会作为与页面相关的描述性词语，被插入到庞大的链接数据库中，这对用户检索相关网页提供了相当大的便利。(即SEO友好)

6. 【17】你认为table的作用和优缺点是什么呢？  
    * table 用于表格数据的展示，并且很符合人们的直观认知。  
    * 在 div+css 布局流行之前，普遍使用 table 进行布局。曾经的神器 Dreamweaver 的可视化拖拽也是基于 table 布局。  
    * table 布局的好处在于样式好控制，特别是居中、对齐。缺点在于会多处非常多的 DOM 节点（想想一个 td 里面再来一个 table），会导致页面加载变慢、不利于SEO（table 原本就不是用来布局的）。也因此，在 CSS 成熟之后，table 布局马上就变成历史了。

7. 【18】怎样在页面上实现一个圆形的可点击区域？  
    1、用canvas画布，弧线画圆，在canvas上监听点击事件  
    2、div/button/a，添加圆角属性50，在div上添加点击事件  
    3、[map+area](http://www.w3school.com.cn/tiy/t.asp?f=html_areamap)

8. 【19】说说你对html中的置换元素和非置换元素的理解  
    [置换元素与非置换元素](https://blog.doyoe.com/2015/03/15/css/%E7%BD%AE%E6%8D%A2%E5%92%8C%E9%9D%9E%E7%BD%AE%E6%8D%A2%E5%85%83%E7%B4%A0/)  
    **看懂后需要回来总结**：  
    首先与置换元素对应的是，普通的行内非置换元素例如`span`,`em`,`strong`，这些行内元素display为inline，无法对他们设置宽高。而`img`,`iframe`,`canvas`等行内级置换元素，可以对他们设置宽高或使用置换掉这些标签的内容自身的固有宽高。

9. 【20】<a id="20"></a>请描述HTML元素的显示优先级  
    HTML元素显示优先级简单来说就是：帧元素（frameset) 优先级最高（frameset已经不提倡使用了）。其次表单元素 > 非表单元素，即`input type="radio"`之类的表单控件 > 普通的如`a`,`div`等元素。

    从有窗口和无窗口元素来分，有窗口元素 > 无窗口元素。有窗口元素如`Select`元素、`Object`元素。

    另外`z-index`属性也可以改变显示优先级，但只对同种类型的元素才有效。如果两个元素分别为 表单元素 和 非表单元素 那么 `z-index` 是无效的。(例如：`div`标签设置了`z-index=100;`，但`select`标签依旧会显示在`div`的上层)  
    [相关资料](https://blog.csdn.net/wulex/article/details/76222563)

10. 【21】谈谈你对input元素中readonly和disabled属性的理解  
    相同点：都会使文本框变成只读，不可编辑。  
    不同点：
    1. disabled属性在将input文本框变成只读不可编辑的同时，还会使文本框变灰，但是readonly不会。
    2. disabled属性修饰后的文本框内容，在不可编辑的同时，通过js也是获取不到的。但是用readonly修饰后的文本框内容，是可以通过js获取到的，也就只是简单的不可编辑而已！（因此在项目中使用加readonly灰色的样式使其值能被操作）
    3. disabled属性对input文本框，单选radio,多选checkbox都适用，但是readonly就不适用，用它修饰后的单选以及多选按钮仍然是可以编辑状态的。

11. 【22】js放在html的\<body\>和\<head\>有什么区别？  
    放在head标签中的js脚本的解析会阻塞DOM树的渲染，引起页面白屏。把 js 放到body标签里时，由于 DOM 时顺序解析的，因此 js 不会阻塞 DOM 的解析。对于必须要在 DOM 解析前就要加载的 js，我们需要放在head标签中。

12. 【23】关于`<form>`标签的enctype属性你有哪些了解？  
    `enctype`属性指定将数据回发到服务器时浏览器如果对表单数据进行编码，其有三种编码形式：  
    1. `application/x-www-form-urlencoded`(也是默认格式)  
        `application/x-www-form-urlencoded`编码类型会将表单中发送到服务器之前都会进行编码(空格转换为`+`加号，特殊符号转换为 ASCII HEX 值)，数据编码成键值对的形式，当表单的action为post时，它会把form数据封装到 http body 中，然后发送到服务器；当表单的action位get时，它会把表单中发送的数据转换成一个字符串(如：a=1&b=2&c=3)并使用?连接到 url 后面。
    2. `multipart/form-data`
        它不对字符进行编码，在使用包含文件(如图片、mp4等文件)上传控件的表单时必须使用该值
    3. `text/plain`  
        数据以纯文本格式进行编码，空格转换为`+`加号，但不对特殊字符编码

13. 【24】说说你对属性data-的理解  
    data- 是HTML5新增的自定义属性，可以用来储存值，可以用来页面间跳转时携带数据。

14. 【25】请说说`<script>`、`<script async>`和`<script defer>`的区别  
    ![三种script标签](./day25.png)

15. 【26】解释下你对GBK和UTF-8的理解？并说说页面上产生乱码的可能原因  
    GBK编码：是指中国的中文字符，其它它包含了简体中文与繁体中文字符，另外还有一种字符“gb2312”，这种字符仅能存储简体中文字符。因为仅包含中文字符，所以所占空间小于UTF-8编码，网页加载速度会快一些。  
    GBK产生自ANSI的拓展编码，每个国家只有前128个编码是ASCII码编码，拓展位编码不同，因此会产生乱码。未解决乱码问题产生Unicode。

    UTF-8编码：它是一种全国家通过的一种编码，如果你的网站涉及到多个国家的语言，那么建议你选择UTF-8编码。因为支持全面，所占空间大，网页加载会慢一点。  
    [帮你梳理各种编码](https://blog.csdn.net/wskzgz/article/details/88710263)

16. 【27】说说你对影子(Shadow)DOM的了解  
    不怎么用到的知识点  
    Shadow DOM是HTML的一个规范 ，它允许浏览器开发者封装自己的HTML标签、CSS样式和特定的javascript代码，同时也可以让开发人员创建类似`<video>`这样的自定义一级标签，创建这些新标签内容和相关的的API被称为Web Component。
    [Shadow DOM](https://www.jianshu.com/p/e47b103f3b60)

17. 【28】说说你对\<meta>标签的理解  
    [详看向硕的回答](https://github.com/haizlin/fe-interview/issues/98)  
    SEO，文本格式，HTTOP头部等等

18. 【29】你了解什么是无障碍web（WAI）吗？在开发过程中要怎么做呢？  
    使用语义化标签，合理利用`<img>`的`alt`和`title`属性，善用label的for属性绑定表单元素，文本内容的简写与缩写，键盘支持性。  
    [无障碍Web(具有良好支持性的Web)](https://mp.weixin.qq.com/s/3QNXBpGB0ZiroV8OGnXCbA)

19. 【30】网页上的验证码是为了解决什么问题？说说你了解的验证码种类有哪些  
    1. 防止机器行为，确定是人为操作，比如登陆、发帖等。
    2. 保护服务器，比如12306买票的时候，各种抢购的时候。
    3. 为了保护用户安全。  
    图形，手机，拖动，语音

20. 【31】DOM和BOM有什么区别？  
    BOM  浏览器对象模型：  
    提供了独立于内容而与浏览器窗口进行交互的对象。描述了与浏览器进行交互的方法和接口，可以对浏览器窗口进行访问和操作，譬如可以弹出新的窗口，改变状态栏中的文本。  
    DOM  文档对象模型：  
    DOM 是针对 HTML 的基于树的 API。描述了处理网页内容的方法和接口，是 HTML 的API，DOM 把整个页面规划成由节点层级构成的文档。

    注意: 只有 JS 的宿主环境是浏览器的时候才有 DOM 和 BOM ，在 Node 中是没有这两个对象的。  
    两者关系：BOM包含DOM

21. 【32】说说你对HTML元素的显示优先级的理解(问题类同[day20](#20))  
    帧元素（frameset) 优先级最高 >>> 表单元素 > 非表单元素，即 input type="radio" 之类的表单控件 > 普通的如 a,div 等元素。  
    从有窗口和无窗口元素来分，有窗口元素 > 无窗口元素。有窗口元素如 Select 元素、Object 元素。  
    z-index 属性也可以改变显示优先级，但只对同种类型的元素才有效。

22. 【33】html和html5有什么区别呢？  
    1. HTML5简化了很多细微的语法，例如doctype的声明，只需要写`<!doctype html>`就行了。HTML5与HTML5，XHTML1兼容，但是与SGML不兼容。
    2. 新增与语义化标签【header、footer、section、article等】
    3. canvas替代Flash

23. 【34】Standards模式和Quirks模式有什么区别？  
    * 标准盒模型：元素内容宽度(width)； 实际宽度 = width + padding2 + border2 + margin2
    * 怪异盒模型：元素内容宽度(width) = width - padding2 - border2； 实际宽度 = width + padding2 + border2 + margin2(带入width) = width + margin2
