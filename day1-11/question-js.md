# js

1. 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

    ```js
    function ttt(arr1){
        let random = parseInt(Math.random() * 31 + 2, 10)
        if(arr1.indexOf(random) < 0){
            arr1.push(random)
        } else {
            random = parseInt(Math.random() * 31 + 2, 10)
        }
        if(arr1.length === 5){
            arr = arr1
            return
        } else {
            ttt(arr1)
        }
    }
    ttt([])
    console.log(arr)
    ```

2. 删除一个字符串的前中后方的空格  
    通过`split(' ').join('')`可以轻松删除全部空格，另一方面主要考察正则表达式的应用，可以轻松去除需求处的空格。

    ```js
    str.replace(/\s*/g,""); //去除字符串内所有的空格
    str.replace(/^\s*|\s*$/g,""); //去除字符串内两头的空格
    str.replace(/^\s*/,""); //去除字符串内左侧的空格
    str.replace(/(\s*$)/g,""); //去除字符串内右侧的空格
    ```

3. 去除字符串中最后一个指定的字符

    ```js
    function deleteLast(str, target){
        let index = str.lastIndexOf(target)
        return str.substring(0, index) + str.substring(index+1, str.length)
    }
    //或使用正则
    function delLast(str,target) {
        let reg =new RegExp(`${target}(?=([^${target}]*)$)`)
        return str.replace(reg,'')
    }
    ```

4. 写一个方法把下划线命名转成大驼峰命名  

    ```js
    function transCalmal(str){
        let temp = str.split('_')
        temp = temp.map((item, index) => {
            if(index > 0){
                return item[0].toUpperCase() + item.substring(1)
            } else return item
        })
        return temp.join('')
    }
    ```

5. 写一个把字符串大小写切换的方法

    ```js
    function convertString(str){
        return str.split('').map(v => {
            if(v.charCodeAt() < = 90){
                return v.toLowerCase()
            }
            return v.toUpperCase()
        }).join('')
    }
    ```

6. 写一个去除制表符和换行符的方法

    ```js
    function clearTab(str){
        str.replace(/[\n\t]/g, '')
    }
    ```

7. 统计某一字符或字符串在另一个字符串中出现的次数

    ```js
    function modelMatch(sourceStr, targetStr) {
        return sourceStr.split(targetStr).length - 1
    }
    // 另一种方法
    function modelMatch(sourceStr, targetStr) {
        let reg = new RegExp(targetStr, 'g')
        return sourceStr.match(reg).length
    }
    ```

8. 写一个加密字符串的方法

    ```js
    // 利用 base64, 浏览器环境自带 btoa / atob 方法
    // Node.js 需要引入相关库
    const str = "abcdefg";

    console.log(btoa(str));
    console.log(atob(btoa(str)));

    // 凯撒密码
    const encodeCaesar = ({str = "", padding = 3}) => {
        !str ? str
            : str.split("")
                .map((s) => String.fromCharCode(s.charCodeAt() + padding))
                .join("")
    }

    const decodeCaesar = ({str = "", padding = 3}) => {
        !str ? str
            : str.split("")
                .map((s) => String.fromCharCode(s.charCodeAt() - padding))
                .join("")
    }

    console.log(encodeCaesar({str: "hello world"}));
    console.log(decodeCaesar({str: "khoor#zruog"}));
    ```

9. 写一个方法判断数据类型

    ```js
    function type (obj) {
        return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g,'');
    }
    // typeof 只能判断基本类型 string,number,boolean, undefined,object, 无法判断Array和Object
    // 比较全面的是使用 Object.prototype.toString 方法，只需要对返回值进行字符串分割即可
    ```

10. 简要描述下什么是回调函数并写一个例子出来

    ```js
    dom.addEventerlisten('click',function(){
    // do something
    })
    ```

11. 简要描述下JS有哪些内置的对象

    [JavaScript 标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)
