<template>
  <div class="tree">
    <div class="tree-title" :key="index" v-for="(item, index) in data">
      {{item.label}}
      <Item class="tree-item" :data='item.children'  v-if="item.children && item.children.length > 0" />
    </div>
  </div>
</template>

<script>
import Item from './item'
export default {
  components: {
    Item
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
        }
      }
      getData(this.data)
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
}
.tree-item{
  // padding-left: 20px;
}
</style>