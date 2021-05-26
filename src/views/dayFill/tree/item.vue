<template>
  <div>
    <div class="item" :key="index" v-for="(item, index) in data">
      <div 
        class="item-title" 
        :style="{'padding-left': (item.level * 15 + 20) + 'px' }"
      >
        <span class="oil-tree__name">{{item.label}}</span>
        <i @click="handleItem(item, index)"  v-if="item.children && item.children.length > 0" :class="['oil-tree__down el-icon-arrow-down', {'oil-tree__active': item.expaned}]"></i>
      </div>

      <el-collapse-transition>
        <item :data='item.children' v-show="item.expaned" />
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Item',
  props: {
    data: {
      type: Array
    }
  },
  data () {
    return {

    }
  },
  // watch: {
  //   data: {
  //     handler(val) {
  //       console.log('val', val)
  //     },
  //     deep: true
  //   }
  // },
  methods: {
    handleItem (data, index) {
      if (data.expaned) {
        data.expaned = false
      } else {
        data.expaned = true
      }
      this.data[index] = data
      // this.data = copyData
      // console.log('data',this.data, data)
      this.$set(this.data, index, data)
      // this.$emit('update:data', this.data)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/artist-ui/theme-chalk/mixins/mixins.scss';

.item-title {
  // padding-left: 20px;
  // color: rgb(50, 99, 233);
  color: #54638B;
  cursor: pointer;
  font-size: 14px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  &:hover{
    background: #f2f2f2;
  }
}

@include b(tree) { 
  @include e(nav) {
    display: flex;
    align-items: center;
  }

    @include e(down) {
      color: #8D97B1;
      transform: rotate(180deg);
      transition: transform .3s;
    }
    @include e(active) {
      transform: rotate(0);
    }
}

</style>
