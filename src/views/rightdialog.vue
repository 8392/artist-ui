<template>
  <div>
    <el-button type="primary" @click="show = true">打开</el-button>
    <div :key='x' v-for="x in 60">阿达开始的黄金卡时间看到</div>
    <right-dialog :showdialog='show'>
      <template #footer>
        <el-button @click="show = false">关闭</el-button>
      </template>

      <el-button type="primary" @click="insidShow = true">打开内部</el-button>

      <right-dialog :showdialog='insidShow' >
        <template #footer>
          <el-button @click="insidShow = false">关闭</el-button>
        </template>
      </right-dialog>
    </right-dialog>

    <!-- <at-model :visible.sync='show'>

    </at-model> -->
  </div>
</template>


<script>
export default {
  data (){
    return {
      show: false,
      insidShow: false
    }
  }
}
</script>
<style lang="scss" scoped>

</style>