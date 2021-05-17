<template>
  <div>
    <div class="item" :key="index" v-for="(item, index) in data">
      <div class="item-title" :style="{'padding-left': (item.level * 20) + 'px' }" @click="handleItem(item)">{{item.label}}</div>
      <item :data='item.children'  v-if="item.children && item.children.length > 0" />
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
  data() {
    return {

    }
  },
  methods: {
    handleItem(data) {
      console.log('data', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.item-title {
  // padding-left: 20px;
  color: rgb(50, 99, 233);
}
</style>