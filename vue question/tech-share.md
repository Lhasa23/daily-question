1. `:`,`@`,`this.$emit`
    ```vue
    // parent
    <template>
      <son-component :value="value" :syncValue.sync="syncValue" @value-change="valueChange" />
    </template>

    // data: value,syncValue
    /* methods valueChange(val) {
      this.value = val
    } */
    ```

    ```vue
    // SonComponent
    <script>
      export default {
        props: {
          value, syncValue
        },
        watch: {
          value(val) {
            this.$emit('value-change', val)
          },
          syncValue(val) {
            this.$emit('update:syncValue', val)
          }
        }
      }
    </script>
    ```
2. 事件修饰符
    ```vue
    // parent
    <template>
      <son-component @click="sonComponentClick" @click.native.stop.prevent="nativeCick" />
    </template>
    ```

    ```vue
    // son-component
    <script>
      export default {
        methods: {
          sonComponentClick() {
            this.$emit('click')
          }
        }
      }
    </script>
    ```

    `.stop`是`e.stopPropogation()`的语法糖，`.prevent`是`e.preventDefault()`的语法糖。
3. `<component>`动态组件

    通过`:is`绑定组件，可以在组件有一系列规律的情况下使用这种方式节省写`v-if`的判断
    `<component>`在写的时候，标签里面的props属性和事件属性都是将会绑定的子组件会触发的。
4. `<style scoped lang="scss">`

    vue组件在写样式的时候最好在style标签上加scoped，vue 编译器会把这个组件的html标签加上`data-v-123u743`类似于这样的hash，然后本组件的样式都会变成`.class[data-v-123u743]`来做样式隔离。这样会出现一个问题，第三方组件库例如element-ui是根据调用组件的地方判定是不是scoped，外层调用的样式有scoped，element-ui组件就会有scoped

    这样可以在写vue style的时候用`/deep/`击穿element-ui样式。
5. vue兼容以前的jq代码

    jq是dom操作，vue不直接操作dom，当有需要的时候，可以使用`this.$refs[<vue元素标签上绑定的ref>]`，若是异步渲染出来的组件，推荐使用`W3C`原生的`document.querySelector`获取dom。
