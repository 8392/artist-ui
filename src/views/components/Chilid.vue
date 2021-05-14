<template>
  <div>
    <div @click="childMeth">child</div>
  </div>
</template>

<script>
import emitter from '@/element-ui/src/mixins/emitter'

export default {
  name: 'child',
  componentName: 'child',
  mixins: [ emitter],
  created() {
    this.$on('getData', this.getData)
  },
  methods: {
    getData() {
      console.log('getData99')
    },
    childMeth () {
      this.dispatch('about', 'submenu', this)  //触发父组件的方法
    }
  }
}
</script>

<style>

</style>