# day12-34

1. 【12】写一个获取当前url查询字符串中的参数的方法  
    查询字符串（URL参数）是指在URL的末尾加上用于向服务器发送信息的字符串(变量)，即是URL后的`？`之后的内容，一般以`name=value`用`&`连接.

    ```js
    url = 'https://github.com/kk?tab=stars&assetId=311&page=DETAIL&projectPhase=2'
    function splitUrl(url) {
        if(typeof url !== "string") return;
        var obj = {}
        url.split("?")[1].split("&").forEach(item => {
            var arr = [key, value] = item.split("=")
            obj[arr[0]] = arr[1]
        })
        console.log(obj)
    }
    // window.location.searh === '?tab=stars&assetId=311&page=DETAIL&projectPhase=2'
    // 或方法二
    function urlParam(){
        const param = {}
        location.search.replace(/([^&=?]+)=([^&]+)/g,(m,$1,$2)=> param[$1] = $2)
        return param
    }
    ```

    上方第二个方法的关注点：`String.prototype.replace()`方法和RegEx表达式。

2. 【13】说说你对javascript的作用域的理解  
    全局作用域，函数作用域(函数中定义的，只能在函数中或通过闭包访问到)，局部作用域(ES6,let,const)  
    作用域链： 详细查看之前的笔记：Chapter6-7

3. 【14】什么是闭包？优缺点分别是什么？  
    闭包closure(函数作用域的一个副产品)，**关闭变量**或者说是**隐藏一个变量**，我们函数套函数其实相当于形成了一个局部作用域，就达到了隐藏的目的，仅此而已
    优点：防止变量污染作用域  
    缺点：~~有可能会造成内存泄漏~~内存泄漏是指无法控制的变量依旧占据内存，但这是低版本IE的bug。[详见](https://link.zhihu.com/?target=http%3A//www.cnblogs.com/rubylouvre/p/3345294.html)  
    [详解闭包](https://zhuanlan.zhihu.com/p/22486908)

4. 【15】写一个数组去重的方法（支持多维数组）  
    知识点：`Set`对象(ES6新特性)/`Array.prototype.flat()`(ES2019/ES10新特性)迭代一定深度的数组。  
    整体思路是：利用`Set`去重，利用`Array.prototype.flat()`降维。

    ```js
    function flat(arr, target) {
        arr.forEach(item => {
            if (Array.isArray(item)) {
                flat(item, target)
            } else {
                target.push(item)
            }
        })
    }

    function flatArr(arr) {
        let result = []
        flat(arr, result)
        return result
    }

    function uniqueArr(arr) {
        return [...new Set(flatArr(arr))]
    }

    const result = uniqueArr([1, 2, 3, 4, [3, 4, [4, 6]]])

    console.log(result) // 1,2,3,4,6
    // 或者一步到位
    function uniqueArr(arr) {
        return [...new Set(arr.flat(Infinity))]
    }
    ```

5. 【16】返回到顶部的方法有哪些？把其中一个方法出来  
    1. 利用`a`标签的锚点。在顶部放一个`a`标签`<a name="top" hidden>顶部</a>`和浮动的`<a href="#top">回到顶部</a>`。
    2. 利用`#`，在url后增加`#`不会让页面刷新，并且可以回到顶部。可以对`location.href`进行设置`location.href += '#'`。当这个方法执行多次即有多个`#`时，页面不会有响应。
    3. 利用`javascript`设置`scrollTop = 0`，一般设置在最外层，即`document.documentElement.scrollTop = 0`就可以返回顶部。

6. 【17】typeof('abc')和typeof 'abc'都是string, 那么typeof是操作符还是函数？  
    `typeof`是操作符，不是函数。可以添加括号，但是括号的作用是进行分组而非函数的调用。

7. 【18】你理解的"use strict";是什么?使用它有什么优缺点？  
    设立"严格模式"的目的，主要有以下几个：  
    * 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;  
    * 消除代码运行的一些不安全之处，保证代码运行的安全；  
    * 提高编译器效率，增加运行速度；  
    * 为未来新版本的Javascript做好铺垫。  
    [详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

8. 【19】"attribute"和"property"有什么不同？  
    在操作`DOM`时，我们经常会操作`attribute`和`property`。不过从两者的所属关系上来说：`property`属于DOM Object，而`atrribute`属于HTML。

    `property`通常比较容易获取，并且有固定的值（当然，类似JavaScript的对象，我们可以添加自定义的值，只是这些不会被DOM所认识）。比如`el.id`、`el.value`、`el.style`都是`property`而设置也只需要`el.id=newId`即可。`attribute`的值不是固定的，我们可以自己为DOM添加需要的属性（以前常常用来存放数据或者标志位，在HTML5有了`data-*`的属性后，一般就利用`data-*`来存放数据了）。对于`attribute`的设定和获取我们使用`setAttribute`和`getAttribute`两个方法。

    在书写方面`property`对于大小写敏感；而`attribute`对于大小写不敏感。

    总的来看 property 的值更偏向于标准而 attribute 的值更偏向于自定义和非标准。

9. 【20】写一个验证身份证号的方法  
    [二楼的详解](https://github.com/haizlin/fe-interview/issues/68)还是对于正则的应用

10. 【21】写一个方法验证是否为中文

    ```js
    function isChinese(str) {
        const re = /^[\u4e00-\u9fa5]+$/;
        return re.test(str);
    }
    // 使用的Unicode 编码, 4e00 和 9fa5 分别表示第一个汉字和最后一个汉字的编码
    ```

11. 【22】你对new操作符的理解是什么？手动实现一个new方法

    ```js
    function _new(Fn, ...arg) {
        const obj = Object.create(Fn.prototype);
        const obj1 = Fn.apply(obj, arg);
        return obj1 instanceof Object ? obj1 : obj;
    }
    ```

12. 【23】0.1 + 0.2、0.1 + 0.3和0.1 * 0.2分别等于多少？并解释下为什么？  
    ```EcmaScrpt规范定义Number的类型遵循了IEEE754-2008中的64位浮点数规则定义的小数后的有效位数至多为52位导致计算出现精度丢失问题！```  
    二进制表示0.1时这这样表示1001100110011...(0011无线循环)，那么这些循环的数字被js裁剪后，就会出现精度丢失的问题，也就造成了0.1不再是 0.1 了，而是变成了 0.100000000000000002

    ```js
    // 0.1+0.2= 0.30000000000000004
    // 0.1+0.3= 0.4
    // 0.1*0.2= 0.020000000000000004
    0.100000000000000002 === 0.1//true
    0.200000000000000002 === 0.2 // true
    // 解决方法
    parseFloat((0.1+0.2).toFixed(10)) === 0.3//true
    ```

13. 【24】如何快速让一个数组乱序，写出来  
    首先提出，可以使用`Array.sort()`进行数组乱序

    ```js
    arr.sort(function(a,b){return Math.random() > 0.5 ? 1 : -1})
    ```

    但是数组样本大了之后会发现该算法的排序并不能完全随机，于是提出使用洗牌算法(Fisher–Yates shuffle)进行乱序处理

    ```js
    Array.prototype.shuffle = function() {
        var input = this
        for (var i = input.length-1; i >= 0; i--) {
            var randomIndex = Math.floor(Math.random()*(i+1))
            var itemAtIndex = input[randomIndex]
            input[randomIndex] = input[i]
            input[i] = itemAtIndex
        }
        return input
    }
    var tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    tempArray.shuffle()
    console.log(tempArray);
    ```

14. 【25】写一个判断设备来源的方法  
    1. npm有一个`current-device`的包，可以使用他的方法来判断具体设备。
    2. `const UA = window.navigator.userAgent.toLowerCase();
        “正则”.test(UA)`

15. 【26】说说bind、call、apply的区别？并手写实现一个bind的方法  
    call和apply都是为了解决改变this的指向。作用都是相同的，只是传参的方式不同。

    除了第一个参数外，call可以接收一个参数列表，apply只接受一个参数数组。 bind绑定完之后返回一个新的函数，不执行。相当于固化一个指向固定this的函数。

16. 【27】说说你对arguments的理解，它是数组吗？  
    `arguments`是一种类数组对象，无法显示的new进行创建，是js能够完成一定程度重载功能的关键因素。可以使用`[]`数组下标进行引用，`arguments.length`为函数实参个数，在函数内使用`arguments.callee`引用函数自身。

17. 【28】解释下这段代码的意思！

    ```js
    [].forEach.call($$("*"),function(a){
        a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
    })
    ```

    简单来说，是获取并遍历页面所有元素，然后获取随机颜色(6位十六进制数)，为这些所有元素加上边框。  
    `$$('*')`即是`document.querySelectorAll('*')`（`$$('a')`是Chrome特有的函数）  
    `~~a`即是`parseInt(a)`,`1<<24`这段加上前面随机数的方法，是获取一个24位二进制数

18. 【29】写一个获取数组的最大值、最小值的方法

    ```js
    function maxAndMin(arr){
        // return Math.max.apply('', arr)
        // return Math.min.apply(Array, arr)
        // 第一个参数传''和Array对象都可以，是为什么？
        // ES6 => Math.max(...arr)
    }
    ```

19. 【30】写一个方法判断字符串是否为回文字符串

    ```js
    function isReverse(str){
        if (s.length === 1) return true
        let subStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        let targetStr = subStr.split('').reverse().join('')
        return subStr === targetStr
    }
    ```

20. 【31】写一个方法把0和1互转（0置1，1置0）

    ```js
    // binary直接取反
    a // => ~a
    function reverse(num){
        let eve = num.toString().split('')
        eve = eve.map(item => {
            return item === '0' ? '1' : item === '1' ? '0' : item
        })
        return Number(eve.join(''))
    }
    ```

21. 【32】造成内存泄漏的操作有哪些？
    * 死循环
    * 过度递归
    * 无效的全局变量
    * addEventListener
    * setInterval

22. 【33】说说你对this的理解  
    从现象上来看，就是谁调用了某个方法，那么这个方法中的 this 指向谁。

    ```js
    const obj = {
        sayThis: function() {
            console.log(this);
        }
    };
    obj.sayThis(); // obj
    const globalSay = obj.sayThis;
    globalSay(); // window 浏览器中的 global 对象
    ```

    同时，要注意箭头函数`=>`会获取定义位置的上下文作为自己的this。

23. 【34】请用canvas写一个关于520浪漫表白的代码  
    **技术债！！！！！**
