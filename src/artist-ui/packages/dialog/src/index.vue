<template>
  <div class="at-dialog__wrapper" @click="close" v-show="visible">
    <div class="at-dialog" @click.stop>
      <!-- at-dialog -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'at-dialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  watch: {
    visible (val) {
      // console.log('val', val)
      // this.$emit('update: visible', val)
      if(val) {
        // this.$el.app
        // document.body.appendChild(this.$el)
      }
    }
  },
  methods: {
    close() {
      this.$emit('update:visible', false)
    }
  },
  beforeDestroy() {
    console.log(99,this.$el.parentNode)
    if (this.$el) {
      // this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>

<style lang="scss" scoped>
.at-dialog {
  position: relative;
  background: #fff;
  width: 50%;
  // margin: 0 auto;
  margin: 0 auto 50px;
  min-height: 400px;
  box-sizing: border-box;
  border-radius: 5px;
}

.at-dialog__wrapper {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  z-index: 2000;
}
</style>