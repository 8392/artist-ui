<template>
  <div class="tree">
    <div class="tree-title" :key="index" v-for="(item, index) in data">
      <div class="tree-title-label" @click="handleFirst(item, index)">
          {{item.label}}
      </div>
      <el-collapse-transition>
        <Item class="tree-item" v-show="item.expaned" :data.sync='item.children'  />
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
import ElCollapseTransition from '@/element-ui/src/transitions/collapse-transition'

import Item from './item'
export default {
  components: {
    Item,
    ElCollapseTransition
  },
  props: {
    data: {
      type: Array
    },
    defaultProps: {
      type: Object,
      default() {
        return {
          children: 'children',
          label: 'label'
        }
      }
    }
  },
  data() {
    return {
      root: []
    }
  },
  created() {
    this.getRootData()
  },
  methods: {
    getRootData () {
      const children = this.defaultProps.children
      const getData = (data, level = 0) => {
        for(let val of data) {
          if(val[children] && val[children].length > 0) {
            getData(val[children], level+1)
          }
          val.level = level
          val.expaned = false
        }
      }
      getData(this.data)
    },
    handleFirst (data, index) {
      // console.log('data', data, index)
      if(data.expaned) {
        data.expaned = false
      }else {
        data.expaned = true
      }
      this.data[index] = data
      // this.data = copyData
      // console.log('data',this.data, data)
      this.$set(this.data, index, data)
    }
  }
}
</script>

<style lang="scss" scoped>
.tree {
  // width: 200px;
  border: 1px solid #ddd;
  text-align: left;
  padding-left: 10px;
}
.tree-title{
  line-height: 35px;
  color: #f00;
  &-label {
    cursor: pointer;
  }
}
</style>