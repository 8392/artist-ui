<template>
  <div class="home">
    <!-- <at-button>测试</at-button> -->
    <el-button type="primary" plain @click="dialogVisible = true">主要按钮</el-button>
    <el-button type="primary" plain v-repeat-click="moreClickTest">测试多次点击</el-button>
    <!-- <div :key='x' v-for="x in 60">阿达开始的黄金卡时间看到</div> -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      :closeOnClickModal='false'
      class="abc"
      :showClose="false"
      customClass="customClass"
      width="400px">
      <template #title>
        <div>标题</div>
      </template>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
      <el-button type="primary" plain @click="innerShow = true">打开内部</el-button>
      <div class="dialog-main">
        <el-dialog
          title="提示"
          :visible.sync="innerShow"
          :closeOnClickModal='false'
          customClass="customClass"
          appendToBody
          width="200px">
          <template #title>
            <div>标题</div>
          </template>
          <div class="dialog-main">

          </div>
          <span slot="footer" class="innerShow-footer">
            <el-button @click="innerShow = false">取 消</el-button>
            <el-button type="primary" @click="innerShow = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

import RepeatClick from '@/element-ui/src/directives/repeat-click'

export default {
  name: 'Home',
  components: {},
  directives: {
    repeatClick: RepeatClick
  },
  data() {
    return {
      innerShow: false,
      dialogVisible: false,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶',
        disabled: true
      }],
      value: ''
    }
  },
  methods: {
    // handleClose(done) {
    //   this.$confirm('确认关闭？')
    //     .then(() => {
    //       done()
    //     })
    // }
    moreClickTest () {
      console.log('测试')
    }

  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 2000px;
  background: #f1f1f1;
}
.dialog-main{
  height: 300px;
  background: #ddd;
}

.dialog-footer{
  color: #f00;
}

/deep/ .customClass{
  background: #ffffb8;
}
</style>
