<template>
  <div class="oil-tree">
    <div class="oil-tree__search">
      <el-input
        placeholder="请输入标题，内容搜索"
        suffix-icon="el-icon-search"
        size='medium'
        v-model="input2">
      </el-input>
    </div>
    <div class="oil-tree__header">填报情况</div>
    <div class="oil-tree__wrapper" :key="index" v-for="(item, index) in data">
      <div class="oil-tree__first">
        <div class="oil-tree__nav">
          <i class="oil-tree--sign"></i>
          <span class="oil-tree__name">{{item.label}}</span>
        </div>
        <i @click="handleFirst(item, index)" :class="['oil-tree__down el-icon-arrow-down', {'oil-tree__active': item.expaned}]"></i>
      </div>
      <el-collapse-transition>
        <Item class="tree-item" v-show="item.expaned" :data.sync='item.children'  />
      </el-collapse-transition>
    </div>
    <!-- <div>{{father.child1.child2}}</div>
    <el-button @click="father.child1.child2 = 6">点击</el-button> -->
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
      default () {
        return {
          children: 'children',
          label: 'label'
        }
      }
    }
  },
  data () {
    return {
      father: {
        child1: {
          child2: 0
        }
      },
      input2: '',
      root: []
    }
  },
  created () {
    this.getRootData()
  },
  methods: {
    getRootData () {
      const children = this.defaultProps.children
      const getData = (data, level = 0) => {
        for (let val of data) {
          if (val[children] && val[children].length > 0) {
            getData(val[children], level + 1)
          }
          val.level = level
          val.expaned = false
        }
      }
      getData(this.data)
    },
    handleFirst (data, index) {
      // console.log('data', data, index)
  
      // this.data = copyData
      // console.log('data',this.data, data)
      // console.log("all", this.data)
      // this.data
      const children = this.defaultProps.children

      const nodeData = this.data

      const getData = (dataX) => {
        for (let val of dataX) {
          if(data.label !== val.label) {
            val.expaned = false
          }
        }
      }

      getData(this.data)

      if (data.expaned) {
        data.expaned = false
      } else {
        data.expaned = true
      }
      console.log("data", data)
      this.data[index] = data

      this.$set(this.data, index, data)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/artist-ui/theme-chalk/mixins/mixins.scss';


@include b(tree) {
  width: 300px;
  float: left;
  // @extend %box-shadow;
  border-radius: 6px;
  background: #fff;
  height: 500px;
  overflow: hidden;
  // text-align: left;

  @include e(search) {
    padding: 12px 20px;
    background: #FAFCFF;
  }

  @include e(header) {
    padding: 23px 20px;
    color: #0F1F48;
    font-size: 16px;
    font-weight: 600;
  }

  @include e(wrapper) {
    line-height: 35px;
    cursor: pointer;
    // padding: 0 20px;
    @include e(nav) {
      display: flex;
      align-items: center;
    }
    @include e(first) {
      padding: 0 20px;
      &:hover{
        background: #f2f2f2;
      }
      color: #f00;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #21366B;
      font-size: 14px;
      font-weight: 600;
      @include e(down) {
        color: #8D97B1;
        transform: rotate(180deg);
        transition: transform .3s;
      }
      @include e(active) {
        transform: rotate(0);
      }
    }

  }

  @include m(sign) {
    display: block;
    width: 5px;
    height: 12px;
    background: #32C5FF;
    margin-right: 5px;
  }
}

.height{
  height: 100%;
}
</style>
