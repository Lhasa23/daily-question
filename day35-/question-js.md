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
