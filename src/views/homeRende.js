export default {
  data() {
    return {
      name: '张三'
    }
  },
  render(h) {
    // return (
    //   <div>
    //     {this.name}
    //     {this.getDom()}
    //   </div>
    // )
    return h('div', {
      id: 'ad'
    }, [this.getDom()])
  },
  methods: {
    getDom () {
      const dom = this.$createElement('div', {
        attrs: {
          id: 'aaa'
        },
        style: {
          color: '#f00'
        },
        on: {
          click: this.testClick
        }
      }, '我是最原始的创建方式')

      return dom
    },
    testClick () {
      console.log("this", this)
    }
  }
}