# day35

1. 【35】使用 flex 实现三栏布局，两边固定，中间自适应

   ```html
   <style>
     .container {
       width: 100%;
       height: 100%;
       display: flex;
     }
     .left,
     .right {
       flex: 0 0 auto;
       width: 50px;
       height: 100%;
     }
     .middle {
       flex: 1 1 auto;
       height: 100%;
     }
     .red {
       background-color: red;
     }
     .blue {
       background-color: blue;
     }
   </style>
   <body>
     <div class="container">
       <section class="left red"></section>
       <section class="middle blue"></section>
       <section class="right red"></section>
     </div>
   </body>
   ```

2. 【36】写出主流浏览器内核私有属性的 css 前缀

   1. -webkit- (谷歌, Safari, 新版 Opera 浏览器等)
   2. -moz- (火狐浏览器)
   3. -o- (旧版 Opera 浏览器等)
   4. -ms- (IE 浏览器 和 Edge 浏览器)

3. 【37】不使用 border 画出 1px 高的线，在不同浏览器的标准和怪异模式下都能保持效果一样

   ```css
   .box::after {
     content: '';
     display: block;
     width: 100px;
     height: 1px;
     background-color: black;
   }
   ```

4. 【38】实现单行文本居中和多行文本左对齐并超出显示"..."  
   [单行居中显示文字，多行居左显示，最多两行超过用省略号结尾](https://github.com/chokcoco/iCSS/issues/50)

5. 【39】写出你知道的 CSS 水平和垂直居中的方法  
   [如何居中一个元素（终结版）](https://juejin.im/post/5bc3eb8bf265da0a8a6ad1ce#comment)

6. 【40】怎么才能让图文不可复制？  
   让元素不能被选中。

   ```css
    {
     -webkit-user-select: none;
     -ms-user-select: none;
     -moz-user-select: none;
     -khtml-user-select: none;
     user-select: none;
   }
   ```

7. 【41】怎么让英文单词的首字母大写？  
   使用`text-transform`属性即可：

   > `capitalize`：强制每个单词的首字母转换为大写。  
   >  `uppercase`：强制所有字符被转换为大写。  
   >  `lowercase`：强制所有字符被转换为小写。  
   >  `none`：阻止所有字符的大小写被转换。  
   >  `full-width` （实验性属性值）：这个关键字强制字符 — 主要是表意字符和拉丁文字 — 书写进一个方形里，并允许它们按照一般的东亚文字（比如中文或日文）对齐。

8. 【42】重置（初始化）css 的作用是什么？  
   简单讲主要是为了 统一各个浏览器自带的默认样式而诞生的。  
   不过完全重置样式不利于开发和维护，推荐使用 normalize.css 在消除不同浏览器的样式差异的同时，保留元素的默认样式。

9. 【43】span 与 span 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？  
   去掉 span 标签内的空白  
   设置 margin 负值，但要根据字体调整，不方便大规模使用  
   可以设置父元素`font-size: 0;`解决，或者父元素设置`display:flex/inline-flex;`

10. 【44】手写一个满屏品字布局的方案  
    [品字布局](https://github.com/haizlin/fe-interview/issues/166)

11. 【45】你知道的等高布局有多少种？  
    margin 和 padding 抵消：

    ```css
    .box,
    .box2 {
      float: left;
      width: 100px;
    }
    .box {
      background: #cccccc;
      height: 300px;
    }
    .box2 {
      background: #306eff;
      padding-bottom: 99999px;
      margin-bottom: -99999px;
    }
    ```

    flex 拉伸：

    ```css
    display: flex;
    align-items: stretch;
    ```

12. 【46】说说你对媒体查询的理解  
    media query。包括现在有的时候为了兼容也会用到一些，查找对应范围使用不同的样式[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)

13. 【47】你是怎样抽离样式模块的？  
    在使用 Vue 时，CSS 本来就是在组件内的

14. 【48】你知道全屏滚动的原理是什么吗？它用到了 CSS 的哪些属性？  
    [全屏滚动详解](https://github.com/haizlin/fe-interview/issues/182#issuecomment-535862179)

15. 【49】假如设计稿使用了非标准的字体，你该如何去实现它？  
    设计的职责是美观，前端的职责是尽可能还原，设计之所以会使用非标准的字体、甚至侵权的字体是因为不了解技术实现和版权意识。  
    所以先沟通，告知设计实际的情况，然后在综合考量的情况下应该尽可能去实现，通常采用载入字体和图片化的方式。

16. 【50】列举 CSS 优化、提高性能的方法

    1. 加载性能
    2. 选择器性能
    3. 渲染性能  
       [细节分析](https://github.com/haizlin/fe-interview/issues/190#issuecomment-498898709)

17. 【51】有用过 Flex 吗？简要说下你对它的了解  
    方便/好用  
    子元素超出的 bug（`overflow: hidden;`）

18. 【52】要是 position 跟 display、overflow、float 这些特性相互叠加后会怎么样？  
    [position,display,overflow,float](https://www.cnblogs.com/jiangtuzi/p/4128962.html)

19. 【53】怎么使用自定义字体？有什么注意事项？

    ```css
    @font-face {
      font-family: '自定义字体名称';
      src: url('字体文件名.eot'); /* IE9 Compat Modes /
      src: url('字体文件名.eot?#iefix') format('embedded-opentype'), / IE6-IE8 /
      url('字体文件名.woff') format('woff'), / Modern Browsers /
      url('字体文件名.ttf') format('truetype'), / Safari, Android, iOS /
      url('字体文件名.svg#字体文件名') format('svg'); / Legacy iOS */
      font-style: normal;
      font-weight: normal;
    }
    ```

    之后使用 font-family 使用，但该方法适合英文字源的字体，中文字源字体文件过大，容易加载缓慢。

20. 【54】css3 的:nth-child 和:nth-of-type 的区别是什么？  
    :nth-child(n) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。  
    :nth-of-type(n) 选择器匹配属于父元素的特定类型的第 N 个子元素。  
    n 可以是数字、关键词或公式。

21. 【55】什么是视差滚动？如何实现视差滚动的效果？  
    页面进行滚动时，不同元素以不同速率滚动，产生生动的视觉效果。  
    实现：根据页面滚动高度的变化，JS 相应调整不同元素的不同位移。

22. 【56】margin 和 padding 使用的场景有哪些？  
    margin:

    > 需要在 border 外侧添加空白时；  
    >  空白处不需要背景（色）时；  
    >  上下相连的两个盒子之间的空白，需要相互抵消时。

    padding：

    > 需要在 border 内测添加空白时；  
    >  空白处需要背景（色）时；  
    >  上下相连的两个盒子之间的空白，希望等于两者之和时。
