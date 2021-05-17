<template>
  <div>
    <div class="item" :key="index" v-for="(item, index) in data">
      <div class="item-title" :style="{'padding-left': (item.level * 20) + 'px' }" @click="handleItem(item, index)">{{item.label}}</div>
      <el-collapse-transition>
        <item :data='item.children' v-show="item.expaned" />
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
import ElCollapseTransition from '@/element-ui/src/transitions/collapse-transition'

export default {
  name: 'Item',
  components: {
    ElCollapseTransition
  },
  props: {
    data: {
      type: Array
    }
  },
  data() {
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
    handleItem(data, index) {
      if(data.expaned) {
        data.expaned = false
      }else {
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
.item-title {
  // padding-left: 20px;
  color: rgb(50, 99, 233);
  cursor: pointer;
}
</style>