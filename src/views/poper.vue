<template>
  <div>
    <!-- poper -->
    <div class="content">
      <template v-for="item in btnList">
        <div :key="item.id"  :class="['btn', {'active': isActive === item.id}]" :ref="`btnRef-${item.id}`" @click.stop="openTlip(item.id)">{{item.title}}</div>
        <transition
          :key="item.id"
          name="fade-in-linear">
          <div class="poper" :ref="`poperRef-${item.id}`" v-if="item.id === isActive">

          </div>
        </transition>
      </template>
    </div>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core'
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js'
import flip from '@popperjs/core/lib/modifiers/flip.js'

export default {
  data() {
    return {
      btnList: [{
        id: 0,
        title: '成都'
      }, {
        id: 1,
        title: '重庆'
      }, {
        id: 2,
        title: '北京'
      }],
      isActive: 6,
      currEle: ''
    }
  },
  computed: {
    isShowPop() {
      const arrId = this.btnList.map(item => item.id)
      return arrId.includes(this.isActive)
    }
  },
  mounted() {
    document.addEventListener('click', () => {
      this.isActive = 6
    })
  },
  methods: {
    openTlip(id) {
      this.isActive = 6

      this.isActive = id

      if (this.currEle && this.currEle.parentNode === document.body) {
        document.body.removeChild(this.currEle)
      }

      this.$nextTick(() => {
        const btnRef = this.$refs[`btnRef-${id}`][0]
        // const poperRef = this.$refs.poperRef
        const poperRef = this.$refs[`poperRef-${id}`][0]
        const poperObj = createPopper(btnRef, poperRef, {
          placement: 'top',
          modifiers: [preventOverflow, flip],
        })
        // con
        this.currEle = poperObj.state.elements.popper
        // console.log(this.currEle)
        document.body.appendChild(this.currEle)
      })




      // poperObj.destroy(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  overflow: hidden;
}
.btn{
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  float: left;
  cursor: pointer;
}
.active {
  color: #f00;
}
.poper{
  height: 200px;
  width: 200px;
  border: 1px solid rgb(125, 255, 113);
}

$--fade-linear-transition: opacity 200ms linear !default;

.fade-in-linear-enter-active,
.fade-in-linear-leave-active {
  transition: $--fade-linear-transition;
}
.fade-in-linear-enter,
.fade-in-linear-leave,
.fade-in-linear-leave-active {
  opacity: 0;
  // transform: translateX(100px);
}

</style>