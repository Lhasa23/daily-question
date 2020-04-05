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
