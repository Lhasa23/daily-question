# CSS

1. ***圣杯布局和双飞翼布局的理解和区别，并用代码实现**

    [详解](https://github.com/haizlin/fe-interview/issues/2)

    圣杯布局和双飞翼布局解决的问题是一样的，就是两边顶宽，中间自适应的三栏布局，中间栏要在放在文档流前面以优先渲染。  
    * 圣杯布局：将中间div设置了左右padding，将左右两个div使用相对布局`position:relative`并分别配合left和right属性，以便左右两栏div移动后不遮挡中间。

    * 双飞翼布局：为了中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该子div里用margin-left和margin-right为左右两栏div留出位置

2. CSS3有哪些新增的特性？

    * 边框(borders):  
        border-radius 圆角  
        box-shadow 盒阴影
        border-image 边框图像  
    * 背景:  
        background-size 背景图片的尺寸  
        background_origin 背景图片的定位区域  
        background-clip 背景图片的绘制区域  
    * 渐变：  
        linear-gradient 线性渐变  
        radial-gradient 径向渐变
    * 文本效果：  
        word-break  
        word-wrap  
        text-overflow  
        text-shadow  
        text-wrap  
        text-outline  
        text-justify  
    * 转换：
        * 2D转换属性  
            transform  
            transform-origin  
        * 2D转换方法  
            translate(x,y)  
            translateX(n)  
            translateY(n)  
            rotate(angle)  
            scale(n)  
            scaleX(n)  
            scaleY(n)  
            rotate(angle)  
            matrix(n,n,n,n,n,n)
        * 3D转换：
            * 3D转换属性：  
                transform  
                transform-origin  
                transform-style  
            * 3D转换方法：  
                translate3d(x,y,z)  
                translateX(x)  
                translateY(y)  
                translateZ(z)  
                scale3d(x,y,z)  
                scaleX(x)  
                scaleY(y)  
                scaleZ(z)  
                rotate3d(x,y,z,angle)  
                rotateX(x)  
                rotateY(y)  
                rotateZ(z)  
                perspective(n)
    * 过渡：  
        transition
    * 动画：  
        @Keyframes规则  
        animation
    * 弹性盒子(flexbox)
    * 多媒体查询@media

3. 在页面上隐藏元素的方法有哪些？
    * display:none；visibility:hidden
    * 通过元素的位置：position:relative;left/right/top/bottom:-100%；z-index:-9999; magrin-left:100%
    * opacity:0
    * height:0;width:0
    * **transform: scale(0)/translateX(+-100%)/translateY(+-100%)/rotateX(90deg);**
    * **filter: opacity(0);**//加粗暂时不懂

4. CSS选择器有哪些？哪些属性可以继承？  
    标签、类/伪类、id选择器、属性、后代/子/兄弟、伪元素、通配符  
    可继承的属性(关于字体的属性)：font-size,font-weight,font-style,font-family,color

5. CSS3新增伪类有哪些并简要描述  
    CSS3 中规定伪类使用一个 : 来表示；伪元素则使用 :: 来表示。  
    * CSS3 中新增的伪元素有以下这些:  
        * :first-child / :last-child 表示子元素结构关系的  
        * :nth-child() / nth-last-child() 用来控制奇数、偶数行的（控制表单奇数、偶数行的样式）  
        * :first-of-type / :last-of-type 表示一组兄弟元素中其类型的第一个元素  
        * :nth-of-type() / :nth-last-of-type() 这个选择器匹配那些在相同兄弟节点中的位置与模式 an+b 匹配的相同元素`  
        * :root html 根元素  
        * :not() 否定选择器，用的比较多  
        * :only-child 只有一个子元素时才会生效  
        * :empty 选择连空格都没有的元素

6. 用css创建一个三角形，并简述原理

    原理：盒模型中的border实际上是由四个三角形拼接而成的，给边框border足够的宽度即可发现这一问题，然后再将content的宽高设置为0，再隐藏相应的边即可。[CSS绘制实心三角形详解](https://www.jianshu.com/p/9a463d50e441)

7. ***简述你对BFC规范的理解**

    块级格式化上下文——块级盒参与的一种规则  
    BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。  
    [详解](https://blog.csdn.net/sinat_36422236/article/details/88763187)

8. 清除浮动的方式有哪些及优缺点？

    浮动带来最显而易见的问题是高度塌陷，问题解决：[解决浮动造成的高度塌陷](https://xiangshuo.blog.csdn.net/article/details/52749993)

9. 简述下你理解的优雅降级和渐进增强

    * 优雅降级  
    先不考虑兼容，优先最新版本浏览器效果，之后再逐渐兼容低版本浏览器。

    * 渐进增强  
    考虑兼容，以较低（多）浏览器效果为主，之后再逐渐增加对新版本浏览器的支持，以内容为主。也是多数公司所采用的方法。

10. 对比下px、em、rem有什么不同？

    px是CSS中的逻辑像素，和移动端的物理像素间会有一个比值dpr(设备像素比DPR(devicePixelRatio)是默认缩放为100%的情况下，设备像素和CSS像素的比值)。  
    em和rem的值为font-size属性的值，其中em会继承父元素的font-size的值，rem(root em)是相对HTML根元素的font-size的大小。

11. css常用的布局方式有哪些？

    圣杯布局，双飞翼布局，流式布局，flex布局，grid布局(网格布局)，栅格布局(24列，row,col进行布局)，float布局，绝对定位。  
    [CSS常见布局](https://juejin.im/post/599970f4518825243a78b9d5)
