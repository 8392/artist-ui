<template>
  <div>
    <el-pagination
      background
      prev-text='上一页'
      next-text='下一页'
      layout="prev, pager, next"
      :pager-count='5'
      :total="800">
    </el-pagination>
    <div>
      {{getData}}
    </div>
    <div @click="handelClick">按钮</div>
    <div @click="handelClick2">按钮2</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      second: 2,
      obj: {
        city: '成都'
      },
    }
  },
  computed: {
    getData() {
      console.log('getData-computed')
      return this.obj
    }
  },
  methods: {
    handelClick() {
      // console.log(22)
      // this.num = 66
      this.obj.aa = 'saas'
    },  
    handelClick2 () {
      // console.log(22)
      this.second = 22
    }
  }
}
</script>

<style>

</style>