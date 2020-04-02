# VUE

1. 从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织  
    [wujie520303的回答](https://github.com/haizlin/fe-interview/issues/983)
2. 你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解  
    模板引擎：  
    负责组装数据，以另外一种形式或外观展现数据。  
    优点：
    * 可维护性（后期改起来方便）；
    * 可扩展性（想要增加功能，增加需求方便）；
    * 开发效率提高（程序逻辑组织更好，调试方便）；
    * 看起来舒服（不容易写错）

    Vue使用了Mustache语法，即双大括号的语法  
    Vue曾经也使用过Pug语法，所以也支持Pug语法但几乎没什么人用了  
    [详细信息](https://www.yinzhuoei.com/index.php/archives/110/)
3. 你知道v-model的原理吗？说说看  
    `v-model`只是一个语法糖，本质上`v-model='message'`是`:bind=message`和`@input='message=$event.target.value'`的组合体。（其实就是动态绑定了 input 的 value 指向了 messgae 变量，并且在触发 input 事件的时候去动态把 message 设置为目标值，这样实际上就完成了数据双向绑定了，所以说 v-model 实际上就是语法糖。处理语法糖的过程是vue语法**生成事件代码**的过程）[Vue之v-model](https://www.jianshu.com/p/8e2b5e04a1f7) （PS. 这个文章真是牛批爆了！！）  
    v-model应用于组件：  
    这就是典型的 Vue 的父子组件通讯模式，父组件通过 prop 把数据传递到子组件，子组件修改了数据后把改变通过 $emit 事件的方式通知父组件，所以说组件上的 v-model 也是一种语法糖。  
4. 知道国际化吗？用过吗？  
    [Vue-i18n](https://www.cnblogs.com/rogerwu/p/7744476.html)
5. 在使用计算属性的时，函数名和data数据源中的数据可以同名吗？（同源问题：methods和data能否重名等）  
    同名会导致data覆盖methods。并且本就不该同名，同名说明你命名不规范。  
    然后解释为什么会覆盖，因为Props、methods、data、computed、watch都是在initState函数中被初始化的。初始化顺序就是我上面给出的顺序，本质上这些都是要挂载到vm实例上面的，你如果重名的话，后面出现的属性自然而然会覆盖之前挂载的属性了。如果你的eslint配置比较严格的话，同名是编译不通过的。
6. 怎么给vue定义全局的方法？
    1. 挂载到Vue的prototype上。  
    `Vue.prototype[method]=method`

        ```js
        // 把全局方法写到一个文件里面，然后for循环挂载到Vue的prototype上(这样不会有函数提示)
        Object.keys(tools).forEach(key => {
            Vue.prototype[key] = tools[key]
        })
        ```

    2. 利用全局混入mixin，因为mixin里面的methods会和创建的每个单文件组件合并

        ```js
        Vue.mixin(mixin)
        new Vue({
            store,
            router,
            render: h => h(App),
        }).$mount('#app')
        ```

        ```js
        import tools from "./tools"
        import filters from "./filters"
        import Config from '../config'
        import CONSTANT from './const_var'

        export default {
            data() {
                return {
                    CONFIG: Config,
                    CONSTANT: CONSTANT
                }
            },
            methods: {
                // //将tools里面的方法挂载到vue上,以方便调用，直接this.$xxx方法名就可以了
                // Object.keys(tools).forEach(key => {
                //     Vue.prototype[key] = tools[key]
                // })
                //将tools里面的方法用对象展开符混入到mixin上,以方便调用，直接this.$xxx方法名就可以了
                ...tools
            },
            filters: {
                // //将filter里面的方法添加了vue的筛选器上
                // Object.keys(filters).forEach(key => {
                //     Vue.filter(key, filters[key])
                // })
                ...filters
            }
        }
        ```

7. vue2.0不再支持v-html中使用过滤器了怎么办？  
    1. 在method中定义方法

        ```js
        htmlFilter(htmlString){
            return htmlString.replace(/+s/g,'')
        }
        ```

        在vue中`v-html="htmlFilter(htmlString)"`即可  
    2. computed
    3. $options.filters  
    `<p v-html="$options.filters.[filterName](this.msg,arg1,arg2)"></p>`

8. 怎么解决vue打包后静态资源图片失效的问题？  
    对于相对路径的使用严格化`/`要换成`./`

9. 怎么解决vue动态设置img的src不生效的问题？  
    因为动态添加src被当做静态资源处理了，没有进行编译，所以要加上require。  
    `<img :src="require('@/assets/images/xxx.png')" />`

10. 使用vue后怎么针对搜索引擎做SEO优化？  
    vue是单页面应用，meta固定了，js动态修改meta爬虫也是爬不到的。因此应对解决办法：
    * ssr,即单页面后台渲染
    * `vue-meta-info`与`prerender-spa-plugin`预渲染
    * nuxt静态化
    * phantom.js针对爬虫做处理

11. 跟keep-alive有关的生命周期是哪些？描述下这些生命周期  
    activated和deactivated

    keep-alive的生命周期：
    1. activated： 页面第一次进入的时候，钩子触发的顺序是created->mounted->activated
    2. deactivated: 页面退出的时候会触发deactivated，当再次前进或者后退的时候只触发activated

12. 如果现在让你从vue/react/angularjs三个中选择一个，你会选哪个？说说你的理由  
    我目前只用过vue，vue的优势：轻量级框架、简单易学、双向数据绑定、组件化、视图、数据和结构的分离、虚拟DOM、运行速度快

13. 你知道vue2.0兼容IE哪个版本以上吗？  
    不兼容ie8及以下  
    是因为vue的响应式原理是基于es5的Object.defineProperty的,而这个方法不支持ie8及以下

14. 用vue做一个todo list应用(挖个坑，自己也做一个，甚至可以用uniapp)  
    [大佬向硕的项目](https://github.com/xiangshuo1992/vue-note)

# ElementUI

1. 你有二次封装过ElementUI组件吗？  
    demo:

    ```js
    <template>
        <el-input
            placeholder="价格"
            v-model="current"
            :disabled="disabled"
            :maxlength="8"
            @change="change"
        ></el-input>
    </template>
    <script>
        export default {
            props: {
                value: Number,
                disabled: Boolean
            },
            data() {
                return {
                current: ""
                };
            },
            watch: {
                value(val) {
                if (val > 0) {
                    this.current = (val / 100).toFixed(2);
                } else {
                    this.current = "";
                }
                }
            },
            created() {
                if (this.value > 0) {
                this.current = (this.value / 100).toFixed(2);
                } else {
                this.current = "";
                }
            },
            methods: {
                /* change() {
                let value = this.current * 100 || 0;
                this.current = (value / 100).toFixed(2);
                this.$emit("input", value.toFixed(0) * 1);
                } */
                // 做防抖处理，等待用户全部输入完成再改变
                change() {
                    if(this.timer){
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {
                        let value = this.current * 100 || 0;
                        this.current = (value / 100).toFixed(2);
                        this.$emit("input", value.toFixed(0) * 1);
                    }, 1000)
                }
            }
        };
    </script>
    ```

2. 如何修改ElementUI组件的默认样式？  
    而且在vue中过多使用scoped导致页面打包文件体积增大。  
    我们可以通过在index样式中通过外层组件添加`唯一class`来区分组件和`第三方样式`来实现实现了类似于scoped的效果，又方便修改各种第三方组件的样式。  
    [vue中scoped的原理及慎用原因](https://www.jianshu.com/p/b92e2a022cd8)

    ```css
    // index.less
    .num-input {
        width: 90px;
        margin-top: 15px;
        .ivu-input {
        text-align: center!important;
        }
    }
    ```
