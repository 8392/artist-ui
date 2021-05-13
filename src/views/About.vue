<template>
  <div>
    <el-button @click="visible = true">打开</el-button>
    <div :key='x' v-for="x in 50">阿达开始的黄金卡时间看到</div>
    <at-dialog :visible.sync='visible'>
      <div>我的外部的</div>
      <el-button @click="insidShow = true">打开内部的</el-button>
      <at-dialog :visible.sync='insidShow'>
        <div>我是内部的</div>
      </at-dialog>
    </at-dialog>
    <!-- <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>
    <el-dialog title="外层 Dialog" append-to-body :visible.sync="outerVisible">
      <el-dialog
        width="30%"
        title="内层 Dialog"
        :visible.sync="innerVisible"
        append-to-body>
      </el-dialog>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
      </div>
    </el-dialog> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      insidShow: false,
      outerVisible: false,
      innerVisible: false
    }
  },
  wattch: {

  },
  methods: {

  }
}
</script>
