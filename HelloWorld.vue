
<script>
import { createVNode, h } from 'vue'
import * as vm from 'vue' 

console.log("vm", vm)
window.vm = vm
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    // console.log("this", this.$createElement)
  },
  setup() {
    // console.log("createVNode", createVNode)
    // console.log("this", getCurrentInstance(), createVNode, h)

    // const divTest = createVNode('div', {
    //   'onClick': function() {
    //     console.log("点击老弟", this)
    //   }
    // }, ['测试', h('div', '你好啊')])

    const divTest = {
      setup(props, { slots }) {
        console.log("props", props, slots)
        return () => createVNode('div', {
          'onClick': function() {
            console.log("点击老弟", this)
          }
        }, ['测试', h('div', slots.foo(666))])


        // return () => {
        //   return (
        //     <div>{
        //       slots.foo('BBBB')
        //     }</div>
        //   )
        // }

      }

      // render(props) {
      //   console.log("slots", props.$slots)
      //   return (
      //     <div>{
      //       props.$slots.foo('CCCC')
      //     }</div>
      //   )
      // }
    }

    // console.log("div", divTest)

    // const App = {
    //   setup() {
    //     const slots = {
    //       foo: () => <span>B</span>
    //     };
    //     return () => (
    //       <A v-slots={slots}>
    //         <div>A</div>
    //       </A>
    //     );
    //   }
    // };


    const slots = {
      foo: (data) => {
        console.log("测试", data)
        return <span>{data}</span>
      }
    };
    return () => {
      return (
        <div>
          <divTest 
            // slots={{
            //   default: (props) => {
            //     console.log("data", props)
            //     return <div style="line-height: 30px;">AAA</div>;
            //   },
            //   title: props => {
            //     return <div>{props.title}</div>
            //   }
            // }}
            v-slots={slots}
          >
            <div>我是slot</div>
          </divTest>
        </div>
      )
    }
  },
  // render() {
  //   return (
  //     <div>22</div>
  //   )
  // }
}
</script>

<style scoped>

</style>
