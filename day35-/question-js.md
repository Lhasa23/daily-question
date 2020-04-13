# day35-

1. 【35】请你解释一个为什么10.toFixed(10)会报错？  
    之所以会报错，是因为在这里的`.`发生了歧义，它既可以理解为小数点，也可以理解为对方法的调用。  
    因为这个点紧跟于一个数字之后，按照规范，解释器就把它判断为一个小数点。  
    所以我们可以这样修改下：  
    `(10).toFixed(10)`  
    `10..toFixed(10)`  
    `10 .toFixed(10)`  
    `10.0.toFixed(10)`  
    当然出现这个报错是因为前面这个数是整数，如果本来就是小数就不会出现这个报错。

2. 【36】请手写一个幻灯片的效果  
    **欠债！**

3. 【37】找到字符串中最长的单词，并返回它的长度

    ```js
    const longestReducer = (pre, cur) => {
        if (!pre.length || pre[0].length < cur.length) return [cur]
        if (pre[0].length === cur.length) {
            pre.push(cur)
            return pre
        }
        return pre
    }
    const longest = array.reduce(longestReducer, [])
    ```

4. 【38】说说你对eval的理解  
    `eval()`相当于一个小型的js解析器，接受一个字符串，可以把字符串解析成js代码并执行，所以有很有大的安全隐患，并且写进去的代码都是字符串，不利于维护，使用它执行代码性能也会大大折扣，所以正常情况下不建议使用。  
    但某些特殊情况下，`webpack`中的一些情况下还是使用了`eval()`。

5. 【39】说说你对模块化的理解  
    es6 import/export  

    模块化解决了代码污染的问题。提高了代码的重复率以及让多人合作编程了可能。  
    模块化分为：  
    AMD: require.js 为代表，依赖前置，一律先加载再使用。  
    CMD: sea.js 为代表，依赖就近原则。  
    UMD: 同时支持 AMD 和 CMD 方法。  

6. 【40】为什么会有跨域问题？怎么解决跨域？  
    [文章：不要再问我跨域的问题了！](https://segmentfault.com/a/1190000015597029)

7. 【41】说说你对IIFE的理解  
    立即执行函数`;(function(){})()`；在一些常见的框架中，会使用立即执行函数形成一个独立作用域，在这个函数通常会写一些依赖环境之类的东西，在这个函数中，写完其中的变量不会被销毁，形成闭包。

    什么时候使用：
    1. 当我们需要写一个 js 插件，并且复用率很高的时候，建议使用
    2. 如果命名的函数只需要使用一次，建议使用
    3. 独立模块，这个跟第一点差不多。单独出来，想强调一下立即执行函数的好处，开发的时候，能做到各组合模块的低耦合，减少对全局作用域的污染

8. 【42】window对象和document对象有什么区别？
    * window对象  
    代表浏览器中的一个打开的窗口或者框架，window对象会在或者每次出现时被自动创建，在客户端JavaScript中，Window对象是全局对象global，所有的表达式都在当前的环境中计算，要引用当前的窗口不需要特殊的语法，可以把那个窗口属性作为全局变量使用，例如：可以只写document，而不必写window.document。同样可以把窗口的对象方法当做函数来使用，如：只写alert()，而不必写window.alert.  
    window对象实现了核心JavaScript所定义的全局属性和方法。

    * document对象  
    代表整个HTML文档，可以用来访问页面中的所有元素 。  
    每一个载入浏览器的HTML文档都会成为document对象。document对象使我们可以使用脚本(js)中对HTML页面中的所有元素进行访问。
    document对象是window对象的一部分可以通过window.document属性对其进行访问。  
    HTMLDocument接口进行了扩展，定义HTML专用的属性和方法，很多属性和方法都是HTMLCollection对象，其中保存了对锚、表单、链接以及其他可脚本元素的引用。

9. 【43】JQuery的源码看过吗？能不能简单概括一下它的实现原理？  
    **单例 + 链式调用？？？？？**

10. 【44】深拷贝对象的方法有哪些，并把你认为最好的写出来  
    递归，如果是基本数据类型直接复制，如果是引用类型再进一层递归。

    ```js
    function clone( o ){
        // 请补充代码
        let result
        if (o.constructor === Object) {
            result = {}
        } else if (o.constructor === Array) {
            result = []
        } else {
            return o
        }

        for (let i in o) {
            let value = o[i]
            if (value.constructor === Object || value.constructor === Array) {
            result[i] = clone(value)
            } else {
            result[i] = value
            }
        }
        return result
    }
    ```

11. 【45】写出几种创建对象的方式，并说说他们的区别是什么？  
    字面量，工厂模式，构造函数  
    [创建对象的方法](https://github.com/haizlin/fe-interview/issues/171)

12. 【46】写一个使两个整数进行交换的方法  
    利用运算优先级和`0*`:  
    `b = a + 0 * (a = b)`
    利用执行顺序：

    ```js
    a = a + b
    b = a - b
    a = a - b
    ```

    异或：

    ```js
    a ^= b
    b ^= a
    a ^= b
    ```

    解构数组：

    ```js
    let a = 1, b= 2
    [a, b] = [b, a]
    ```
