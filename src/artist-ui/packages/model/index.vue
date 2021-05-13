<template>
  <div :class="['at-model__wrapper', {'at-model--active': visible}]" @click="close">
    <!-- model__wrapper -->
    <div class="at-model" @click.stop>

    </div>
  </div>
</template>

<script>
export default {
  name: 'at-model',
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

}
</script>

<style lang="scss" scoped>

</style>