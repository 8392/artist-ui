<template>
  <div>
    <el-button @click="open">打开</el-button>
    <el-button type="primary" plain @click="testMeth">测试</el-button>
    <el-button type="primary" plain @click="testMeth2">测试2</el-button>
    <!-- <div :key='x' v-for="x in 50">阿达开始的黄金卡时间看到</div> -->
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

    <div style="width: 200px; margin: auto">
      <el-timeline>
        <el-timeline-item>
          <div>666</div>
          <div>222</div>
          <div>666</div>
          <template #dot>
            <div class="dot"></div>
          </template>
        </el-timeline-item>
        <el-timeline-item>
          <div>666</div>
          <div>666</div>
          <div>666</div>
          <template #dot>
            <div class="dot"></div>
          </template>
        </el-timeline-item>
      </el-timeline>
    </div>
    <!-- <div :aria-hidden='true' @click="handleClick">
      测试新元素
    </div> -->
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <el-button @click="openHeight">打开</el-button>
    <el-collapse-transition>
      <div class="testHeight" v-if="isHeight">

      </div>
    </el-collapse-transition>
    <!-- <div :class="['testHeight', {'isActive' : isHeight}]" >

    </div> -->
    <TestJsx>
      <div>
        <span>666</span>
      </div>
    </TestJsx>
  </div>
</template>

<script>

import ElCollapseTransition from '@/element-ui/src/transitions/collapse-transition'
import emitter from '@/element-ui/src/mixins/emitter.js'
// import emitter from '@/view'
import Test1 from './components/Test1'
import Test2 from './components/Test2.vue'
import TestJsx from './components/TestJsx.js'
export default {
  componentName: 'about',
  components: {
    Test1,
    Test2,
    TestJsx,
    ElCollapseTransition
  },
  mixins: [ emitter],
  data() {
    return {
      isActive: false,
      isHeight: false,
      visible: false,
      insidShow: false,
      outerVisible: false,
      innerVisible: false,
      activities: [{
        content: '活动按期开始',
        timestamp: '2018-04-15'
      }, {
        content: '通过审核',
        timestamp: '2018-04-13'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11'
      }],
      data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    }
  },
  wattch: {

  },
  created() {
    this.$on('submenu', this.handleSubmenuClick)
  },
  methods: {
    openHeight () {
      this.isHeight = !this.isHeight
    },
    handleNodeClick(data) {
      console.log(data)
    },
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
    },
    handleClick (e) {
      console.log('点击', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.dot{
  width: 10px;
  height: 10px;
  background: #f00;
  border-radius: 50%;
}
.testHeight{
  background: rgb(216, 241, 122);
  height: 400px;
  width: 300px;
  transition: height .5s;
}
.isActive {
  height: 0;
  overflow: hidden;
}
</style>
