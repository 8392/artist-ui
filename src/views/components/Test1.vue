<template>
  <div>
    test1
    <Chilid v-bind="$listeners" />
  </div>
</template>

<script>
import Chilid from './Chilid'
export default {
  name: 'AAA',
  props: ['testName'],
  components: {
    Chilid
  },
  methods: {
    openTest() {}
  }
}
</script>

<style>

</style>