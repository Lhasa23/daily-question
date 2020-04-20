# day35-

1. 【35】请你解释一个为什么 10.toFixed(10)会报错？  
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

4. 【38】说说你对 eval 的理解  
   `eval()`相当于一个小型的 js 解析器，接受一个字符串，可以把字符串解析成 js 代码并执行，所以有很有大的安全隐患，并且写进去的代码都是字符串，不利于维护，使用它执行代码性能也会大大折扣，所以正常情况下不建议使用。  
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

7. 【41】说说你对 IIFE 的理解  
   立即执行函数`;(function(){})()`；在一些常见的框架中，会使用立即执行函数形成一个独立作用域，在这个函数通常会写一些依赖环境之类的东西，在这个函数中，写完其中的变量不会被销毁，形成闭包。

   什么时候使用：

   1. 当我们需要写一个 js 插件，并且复用率很高的时候，建议使用
   2. 如果命名的函数只需要使用一次，建议使用
   3. 独立模块，这个跟第一点差不多。单独出来，想强调一下立即执行函数的好处，开发的时候，能做到各组合模块的低耦合，减少对全局作用域的污染

8. 【42】window 对象和 document 对象有什么区别？

   - window 对象  
     代表浏览器中的一个打开的窗口或者框架，window 对象会在或者每次出现时被自动创建，在客户端 JavaScript 中，Window 对象是全局对象 global，所有的表达式都在当前的环境中计算，要引用当前的窗口不需要特殊的语法，可以把那个窗口属性作为全局变量使用，例如：可以只写 document，而不必写 window.document。同样可以把窗口的对象方法当做函数来使用，如：只写 alert()，而不必写 window.alert.  
     window 对象实现了核心 JavaScript 所定义的全局属性和方法。

   - document 对象  
     代表整个 HTML 文档，可以用来访问页面中的所有元素 。  
     每一个载入浏览器的 HTML 文档都会成为 document 对象。document 对象使我们可以使用脚本(js)中对 HTML 页面中的所有元素进行访问。
     document 对象是 window 对象的一部分可以通过 window.document 属性对其进行访问。  
     HTMLDocument 接口进行了扩展，定义 HTML 专用的属性和方法，很多属性和方法都是 HTMLCollection 对象，其中保存了对锚、表单、链接以及其他可脚本元素的引用。

9. 【43】JQuery 的源码看过吗？能不能简单概括一下它的实现原理？  
   **单例 + 链式调用？？？？？**

10. 【44】深拷贝对象的方法有哪些，并把你认为最好的写出来  
    递归，如果是基本数据类型直接复制，如果是引用类型再进一层递归。

    ```js
    function clone(o) {
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
    let a = 1,
      b = ((2)[(a, b)] = [b, a])
    ```

13. 【47】请说说你对事件冒泡机制的理解？  
    事件流的执行顺序，捕获阶段-》目标阶段-》冒泡阶段；从里到外的执行。`<div><span>点我</span></div>`点击 span 的时候会触发 span 上面绑定的事件，之后也会触发外面 div 上面的事件，这就是冒泡。  
    可以直接使用`event.stopPropagation()`阻止事件冒泡。

14. 【48】你对事件循环有了解吗？说说看！

    - 同步任务：没有被引擎挂起，在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。
    - 异步任务：被引擎挂起，不进入主线程，而进入任务队列的任务。只有引擎认为某个异步任务可以执行了，该任务才会进入主线程执行。排在异步任务后面的代码，不用等待异步任务结束会马上运行。  
      [详解：阮一峰的 js 任务机制](https://github.com/haizlin/fe-interview/issues/183#issuecomment-498984554)

15. 【49】写个还剩下多少天过年的倒计时  
    见本日 js 文件

16. 【50】请写出一个函数求出 N 的阶乘（即 N!）  
     使用**尾递归**的方法，数值很大也不会出现内存溢出的问题

    ```js
    const getN = function (n, sum = 1) {
      if (typeof n !== 'number') {
        return '请输入数字类型'
      }
      if (n === 0) {
        return sum
      } else {
        sum = sum * n
        return getN(--n, sum)
      }
    }
    ```

17. 【51】字符串相连有哪些方式？哪种最好？为什么？  
    模板字符串、+=、`Array.join('')`

18. 【52】什么是事件委托？它有什么好处？能简单的写一个例子吗？  
    使用浏览器的冒泡机制，给一个元素注册事件来管理所有元素。  
    优点：

    1. 利用冒泡的原理，将事件加到父级身上，触发执行效果，这样只在内存中开辟一块空间，既节省资源又减少 DOM 操作，提高性能
    2. 可以为动态添加的元素绑定事件

    步骤：

    1. 给父元素绑定事件
    2. 监听子元素的冒泡事件
    3. 找到是哪个子元素的事件

19. 【53】document 的 load 和 ready 有什么区别？  
    在页面资源（比如图片和媒体资源，它们的加载速度远慢于 DOM 的加载速度）加载完成之后才执行`window.onload`  
    页面 DOM 全部加载完成后执行`document.ready`

20. 【54】写一个函数找出给定数组中的最大差值

    ```js
    function maxSubtrack(arr) {
      return Math.max(...arr) - Math.min(...arr)
    }
    ```
