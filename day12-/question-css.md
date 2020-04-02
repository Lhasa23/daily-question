# day12

1. 【12】说说你对css盒子模型的理解  
    1. css盒模型由两个盒子组成，外在的控制是否换行的盒子，以及内在的控制元素内容的盒子。比如：display: inline-block, 则它的外在的盒子就是inline也就是不占据一行，而block则表示内部的元素具有块状特性。所以，display: inline其实就是display: inline-inline的缩写，display: block就是display: block-block的缩写。
    2. 每一个内在的盒子有: width/height, padding, border, margin这几个控制盒子大小的属性。其中 width/height控制元素内容大小，padding则控制元素内容到border线内侧距离，border则是元素外围边框大小，而margin则是控制与其他元素的间距，它的背景透明。
    3. 对于早期，计算一个元素的占据大小，需要通过width +2* padding + 2*border来计算，css3中提出了box-sizing：border-box，通过这样设置，就可以使元素最终的宽高就是设定的width/height, 浏览器会根据width/height, padding, border的大小来自动调整内部元素的大小。

2. 【13】::before和:after中单冒号和双冒号的区别是什么，这两个伪元素有什么作用？  
    * `:`表示伪类，是一种样式，比如`:hover`, `:active`等  
    * `::`表示伪元素，是具体的内容，比如`::before`是在元素前面插入内容，`::after`则是在元素后面插入内容，不过需要`content`配合，并且插入的内容是`inline`的。
    * `:before`和`:after`其实还是表示伪元素，在css3中已经修订为`::before`和`::after`了，只是为了能兼容IE浏览器，所以也可以表示成`:before`和`:after`。  
    * [针对`content`的详细介绍](https://xiangshuo.blog.csdn.net/article/details/89843456)

3. 【14】position:fixed;在ios下无效该怎么办？  
    `position:fixed;`是将元素绝对固定在窗口，不受滚动条行为影响。  
    具体处理暂时用不到，[详情见](https://efe.baidu.com/blog/mobile-fixed-layout/)。

4. 【15】style标签写在body前和body后的区别是什么？  
    首先加载顺序不一样，style标签放在body前后会导致加载样式资源的时机在加载元素的前后。  
    其次，关于阻塞的机制：
    * CSS：  
        CSS放在head中会阻塞页面的渲染（也就是说页面的渲染会等到css加载完成）  
        CSS阻塞JS的执行 （因为GUI线程和JS线程是互斥的，因为有可能JS会操作CSS）  
        CSS不阻塞外部js的加载（**不阻塞JS的加载**，但**阻塞JS的执行**，因为浏览器都会有预先扫描器）
    * JS:  
        直接引入的JS会阻塞页面的渲染（GUI线程和JS线程互斥）  
        JS不阻塞资源的加载(这有赖于chrome的预加载机制)  
        JS顺序执行，阻塞后续JS逻辑的执行

5. 【16】请描述margin边界叠加是什么及解决方案  
    1. 可以通过给父元素添加`overflow:hidden;`使父元素变成BFC(块级格式化上下文)
    2. 使用`padding`代替，但父元素要减去相应高度
    3. 父元素设置1px的padding或者1px的透明border(后者高度减1px)
    4. 子元素使用`position`定位
    5. 给子盒子设置`display: inline-block`

6. 【17】解释下 CSS sprites的原理和优缺点分别是什么  
    * CSS sprites 的原理是将许多小图标或小图片拼成一张大图，然后利用 background-position + 固定的宽高来显示对应大图位置的图片作为背景。Amazon 的图标就是用的 CSS Sprites 拼在一张大图上。  
    * 由于合并成了一张图，所以好处就是在于请求数减少。而缺点就在于如果图片拼位置出现错误，在显示的时候就有可能显示不完整或者错位。  
    * 在HTML2来临以后，CSS sprites减少请求次数的优势荡然无存(HTTP2多路复用，并行传输，多张图片也只需建立一次HTTP请求)

7. 【18】什么是FOUC？你是如何避免FOUC的？  
    FOUC 即 Flash of Unstyled Content，是指页面一开始以样式 A（或无样式）的渲染，突然变成样式B。原因是样式表的晚于 HTML 加载导致页面重新进行绘制。  
    原因：使用@import导入样式；style写在body里  
    解决办法：把所有的样式放在`head`里。

8. 【19】css的属性content有什么作用呢？有哪些场景可以用到？  
    content属性通常与伪元素`::after` `::before`搭配使用，详情及实例请重新复习第【13】天。

9. 【20】要让Chrome支持小于12px的文字怎么做？  
    改用图片  
    使用`transform:scale()`缩小  
    使用`-webkit-text-size-adjust:none;`但是不支持chrome 27.0以上版本

10. 【21】说说你对line-height是如何理解的？  
    inline-height又称行高，指的是两行文字基线之间的距离，又可以称为这行文字所占的高度。行高=font-size+行间距(上下半间距之和)[张鑫旭大神的CSS世界：inline-height](https://juejin.im/post/5bf805fde51d453a68008e32)

11. 【22】说说浏览器解析CSS选择器的过程？[link第34天问题](#thirtyforth)

12. 【23】说说CSS的优先级是如何计算的？  
    根据选择器的权值加和进行优先级判定。id:100,class:10,tag:1,*选择器低于一切,!important高于一切  
    伪类，属性选择器特指度等同于类  
    伪元素特指度等同于标签名选择器  
    后代选择器用空格隔开，群组选择器用","隔开  
    CSS优化：为了减少可以优化的查询时间
    * 尽量少使用层级关系  
    一般写法：`#divBox p .red{color:red;}`  
    更好写法：`.red{..}`

    * 使用class代替层级关系  
    一般写法：`#divBox ul li a{display:block;}`  
    更好写法：`.block{display:block;}`

13. 【24】你有用过CSS预处理器吗？喜欢用哪个？原理是什么？  
    Sass，Less。这题原理能说出AST（抽象语法树）并能知道大概AST的原理就OK了[AST(抽象语法树)](https://segmentfault.com/a/1190000016231512)  
    人们可以通过AST生成任何代码，首先，less会转化为AST，然后AST遍历所有节点，生成CSS树。[Less文档](https://www.ibm.com/developerworks/cn/web/1207_zhaoch_lesscss/)

14. 【25】在页面中的应该使用奇数还是偶数的字体？为什么呢？  
    也有个人习惯问题，偶数字体好换算比例。  
    设计师一般都会给偶数字体。  
    奇数会在移动端开发中出现一些问题。

15. 【26】说说你对z-index的理解  
    当网页上出现多个由绝对定位`position:absolute`或固定定位`position:fixed`所产生的浮动层时，必然就会产生一个问题，就是当这些层的位置产生重合时，谁在谁的上面呢？或者说谁看得见、谁看不见呢？这时候就可以通过设置z-index的值来解决，这个值较大的就在上面，较小的在下面。  
    [还有更为复杂深层的理解:层叠上下文](https://github.com/haizlin/fe-interview/issues/91)

16. 【27】怎样修改chrome记住密码后自动填充表单的黄色背景？  
    通过内阴影的方式改变。  

    ```css
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
    }
    ```

    [原题目链接](https://github.com/haizlin/fe-interview/issues/95)

17. 【28】rgba()和opacity这两个的透明效果有什么区别呢？
    1. `opacity`是属性，`rgba()`是函数，计算之后形成属性值；
    2. `opacity`作用于元素和元素的内容，内容会继承元素的透明度，取值0-1；
    3. `rgba()`一般作为背景色`background-color`或者颜色`color`的属性值，透明度由其中的`alpha`值生效，取值0-1  
    拓展：
        1. `transparent`也是透明，是个属性值，颜色值，类似`rgba(0,0,0,0)`一样的值，不过它是关键字来描述。
        2. 如何隐藏一个元素？  
            `z-index=-1`层叠上下文相关知识，但层叠上下文不应该被滥用；`display:none`；`visibily:hidden`虽然隐藏，但仍有DOM节点；`opacity:1`独立的透明属性；`rbga(0,0,0,1)`

18. 【29】请描述css的权重计算规则  
    |选择器|示例|权重|
    |-----|--------|------|
    |!important|!important|infinity|
    |内联样式|style|1000|
    |id|#myName|100|
    |类|.myDiv|10|
    |伪类|:hover|10|
    |属性|input[type='text']|10|
    |标签|input|1|
    |伪元素|::after|1|
    |后代/相邻/通配符|>/+/*|0|

19. 【30】描述下你所了解的图片格式及使用场景  
    png：图片占内存较大，主要用于小图标或颜色简单对比强烈的小的背景图；  
    jpg：占用内存小，但是是有损耗压缩图片，不适合文字图片；  
    gif：所占内存大，但压缩损耗也大，主要用于比较小的动态图标；  
    svg：矢量图，可以通过js控制动画效果，节点多而杂，显示更慢；  
    WebP：谷歌（google）开发的一种旨在加快图片加载速度的图片格式。图片压缩体积大约只有JPEG的2/3，并能节省大量的服务器宽带资源和数据空间；但是需要占用更多计算资源；既支持无损压缩也支持有损压缩。

20. 【31】让网页的字体变得清晰，变细用CSS怎么做？

    ```css
    -webkit-font-smoothing: antialiased /*只有webkit内核的浏览器才起作用*/
    -moz-osx-font-smoothing: grayscale
    text-shadow: 1px 1px 1px 1px rgba(0,0,0,0.005)
    text-rendering: optimizeLegibility
    ```

    `font-weight`+`font-family`  
    `font-weight`来控制粗细还是需要看对应的字体有没有对应的变种字体。因此这就和`font-family`相关。

21. 【32】说下line-height三种赋值方式有何区别？  
    line-height: 1.2  
    line-height: 1.2em  
    line-height: 120%  
    这三种方式的区别在于，给父元素设置行高的时候子元素的继承方式。  
    `em`的形式会以`父元素font-size*1.2em`的方式继承父元素的行高给子元素的行高赋值；  
    `1.2/120%`的方式直接继承父元素的行高，`子元素的font-size*1.2`为子元素的行高。

22. 【33】用CSS绘制一个三角形  
    宽高设置为0，隐藏三条border(曾经出现过这道题)

23. 【34】<a id="thirtyforth"></a>浏览器是怎样判断元素是否和某个CSS选择器匹配？  
    先产生一个元素集合，然后从后往前判断；
    > 浏览器先产生一个元素集合，这个集合往往由最后一个部分的索引产生（如果没有索引就是所有元素的集合）。然后向上匹配，如果不符合上一个部分，就把元素从集合中删除，直到整个选择器都匹配完，还在集合中的元素就匹配这个选择器了。

    举个例子
    有选择器：
    `div.ready #wrapper > .bg-red`
    先把所有元素`class`中有`bg-red`的元素拿出来组成一个集合，然后上一层，对每一个集合中的元素，如果元素的 parent id 不为`#wrapper`则把元素从集合中删去。 再向上，从这个元素的父元素开始向上找，没有找到一个 tagName 为 div 且 class 中有 ready 的元素，就把原来的元素从集合中删去。
    至此这个选择器匹配结束，所有还在集合中的元素满足。大体就是这样，不过浏览器还会有一些奇怪的优化。

    注意：  
    1、为什么从后往前匹配因为效率和文档流的解析方向。效率不必说，找元素的父亲和之前的兄弟比遍历所有儿子快而且方便。关于文档流的解析方向，是因为现在的 CSS，一个元素只要确定了这个元素在文档流之前出现过的所有元素，就能确定他的匹配情况；应用在即使 html 没有载入完成，浏览器也能根据已经载入的这一部分信息完全确定出现过的元素的属性。

    2、为什么是用集合主要也还是效率。基于 CSS Rule 数量远远小于元素数量的假设和索引的运用，遍历每一条 CSS Rule 通过集合筛选，比遍历每一个元素再遍历每一条 Rule 匹配要快得多。
