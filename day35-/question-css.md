# day35

1. 【35】使用flex实现三栏布局，两边固定，中间自适应

    ```html
    <style>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
    }
    .left, .right {
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

2. 【36】写出主流浏览器内核私有属性的css前缀  
    1. -webkit- (谷歌, Safari, 新版 Opera 浏览器等)
    2. -moz- (火狐浏览器)
    3. -o- (旧版 Opera 浏览器等)
    4. -ms- (IE 浏览器 和 Edge 浏览器)

3. 【37】不使用border画出1px高的线，在不同浏览器的标准和怪异模式下都能保持效果一样  

    ```css
    .box::after{
        content: "";
        display: block;
        width: 100px;
        height: 1px;
        background-color: black;
    }
    ```
