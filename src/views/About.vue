<template>
  <div>
    <el-button @click="open">打开</el-button>
    <el-button type="primary" plain @click="testMeth">测试</el-button>
    <el-button type="primary" plain @click="testMeth2">测试2</el-button>
    <div :key='x' v-for="x in 50">阿达开始的黄金卡时间看到</div>
    <!-- <at-dialog :visible.sync='visible'>
      <div>我的外部的</div>
      <el-button @click="insidShow = true">打开内部的</el-button>
      <at-dialog :visible.sync='insidShow'>
        <div>我是内部的</div>
      </at-dialog>
    </at-dialog> -->
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
    <Test1 :testName='666' @open='open' />
    <Test2 />
    <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
      <el-button>上边</el-button>
    </el-tooltip>
  </div>
</template>

<script>


import emitter from '@/element-ui/src/mixins/emitter'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
export default {
  componentName: 'about',
  components: {
    Test1,
    Test2
  },
  mixins: [ emitter],
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
  created() {
    this.$on('submenu', this.handleSubmenuClick)
  },
  methods: {
    open () {
      // this.visible = true
      console.log('child', this.$children)
    },
    testMeth() {
      this.broadcast('child', 'getData', 66) //触发子组件的方法
      // this.$emit('child', 'getData')
    },
    testMeth2 () {
      // console.log('testMeth2')
      this.$emit('submenu', 66)
    },
    handleSubmenuClick(val) {
      console.log('handleSubmenuClick', val)
    }
  }
}
</script>
