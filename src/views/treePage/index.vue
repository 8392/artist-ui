<template>
  <div>
    <tree :data='data' :defaultProps='defaultProps' />
  </div>
</template>

<script>
import tree from './tree'
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>