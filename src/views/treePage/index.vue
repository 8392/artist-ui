<template>
  <div>
    <tree :data='data' :defaultProps='defaultProps' />
    <el-button @click="handleClick">点击</el-button>
    <div>
      <!-- <div v-for="x in arrData">{{x}}</div> -->
      <div ref="nameRef">{{name}}</div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import tree from './tree/index.vue'
export default {
  components: {
    tree
  },
  data() {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      name: '成都',
      arrData: {
        a: 1,
        b: 2
      }
    }
  },
  watch: {
    data: {
      handler(val) {
        console.log('监听data', val)
      },
      deep: true
    }
  },
  methods: {
    clickMenu(index) {
      this.arrData[index] = 66
      // this.arrData.push(20)
    },
    changeData () {

    },
    handleClick () {
      // console.log(99)
      this.name = '重庆'
      const nameRef = this.$refs.nameRef.innerText
      // console.log("nameRef1", nameRef)
      // Vue.nextTick(() => {
      //   const nameRef = this.$refs.nameRef.innerText
      //   console.log("nameRef2", nameRef)
      // })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>