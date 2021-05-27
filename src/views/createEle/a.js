export default {
  render(h) {
    const createRender = this.createRender()
    const createRender2 = this.createRender2()
    console.log("this", this)
    return (
      <div>
        <div>测试createEle</div>
        {/* {this.createEle()} */}
        <createRender />
        {/* <createRender2 /> */}
      </div>
    )
  },
  components: {
    // createRender: {
    //   render() {
    //     console.log(99, this)
    //   }
    // }
  },
  data() {
    return {
      
    }
  },
  mounted() {
    console.log("打印组件信息", this.$children)
  },
  methods: {
    createEle() {
      return this.$createElement('div', [
        '测试组件'
      ])
    },
    
    createRender() {
      const child = {
        // render(h, data) {
        //   console.log("data", data)
        //   return <div>我是孩子</div>
        // }
        // functional: true, //设置了这个相当于访问不到this，只能在第二个参数获取
        // props: {

        // },
        // data() {
        //   return {

        //   }
        // },
        render(h, emit) {
          // console.log("data", emit.scopedSlots, emit.slots().default)
          // console.log("this", this.$slots.default)
          return h('div', [
            'AAA',
            // emit.scopedSlots
            // emit.slots().default
            this.$scopedSlots.default({text: '文本'}),
            this.$scopedSlots.title({title: '标题插槽'}),
            
            // h('div', this.$scopedSlots.default({
            //   text: 'i am xutong'
            // }))
          ])
        }
      }

      const data = {
        render() {
          console.log("father", this)
          return <div>
            666

            <child scopedSlots={{
              default: props => {
                return <div style="line-height: 30px;">{props.text}</div>;
              },
              title: props => {
                return <div>{props.title}</div>
              }
            }}
            >
            {/* <child> */}
              <div>我是默认插槽 </div>
              <div >222</div>
            </child>
          </div>
        }
      }

      return data
    },

    createRender2() {
      return {
        render(h) {
         return h('div', '你好啊啊啊啊啊')
        }
      }
    }
  }
}