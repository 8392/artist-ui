<template>
  <div class="home">
    <!-- <at-button>测试</at-button> -->
    <el-button type="primary" plain @click="dialogVisible = true">主要按钮</el-button>
    <div :key='x' v-for="x in 60">阿达开始的黄金卡时间看到</div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      :closeOnClickModal='false'
      appendToBody
      class="abc"
      :showClose="false"
      customClass="customClass"
      width="400px">
      <template #title>
        <div>标题</div>
      </template>
      <div class="dialog-main"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    // handleClose(done) {
    //   this.$confirm('确认关闭？')
    //     .then(() => {
    //       done()
    //     })
    // }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 2000px;
  background: #f1f1f1;
}
.dialog-main{
  height: 500px;
  background: #ddd;
}

.dialog-footer{
  color: #f00;
}

/deep/ .customClass{
  background: #ffffb8;
}
</style>
