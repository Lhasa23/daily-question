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
