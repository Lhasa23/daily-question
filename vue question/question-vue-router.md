# vue-router

公司项目是使用vuex+vue-router进行路由管理，从后台获取的路由信息先会存储到store中，根据登陆用户权限判定，按需提取路由，进行跳转处理等。

1. vue-router怎么重定向页面？  

    ```js
    <div id="first">
        <router-link to="/a">老八一号</router-link>
        <router-view></router-view>
    </div>
    <script>
        let a={
            template:`<h1>奥里给 干了 兄弟们</h1>`
        };
        let b={
            template:`<h2>虽然不是同一个时间，但是是同一个撤所儿</h2>`
        };
        let routeObj=new VueRouter({
            routes:[
                {path:'/a',redirect:'/b'},
                {path:'/b',component:b}
            ]
            // 或使用name指定路由
            /* routes:[
                {path:'/a',redirect:'routerb'},
                {path:'/b',component:b,name:"routerb"}
            ] */
        });

        let vm=new Vue({
            el:"#first",
            data:{},
            router:routeObj
        })
    </script>
    // redirect中写一个路径就可以
    ```

2. vue-router怎么配置404页面？

    ```js
    export default {
        path: '*',
        name: '404',
        component: '组件404',
    }
    ```

    需注意：将改路由配置放到所有路由的配置信息的最后，否则会其他路由path匹配造成影响。
