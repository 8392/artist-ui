<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/poper">poper</router-link> |
      <router-link to="/treePage">treePage</router-link> |
      <router-link to="/tab">tab</router-link> |
      <router-link to="/rightdialog">right-dialog</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import arrayTreeFilter from 'array-tree-filter';

const data = [{
  value: 'a',
  children: [{
    value: 'b',
    children: [{
      value: 'c',
      children: [{
        value: 'f'
      }]
    }]
  }],
}];

const values = ['a', 'b', 'c', 'f'];
const result = arrayTreeFilter(data, (item, level) => {
  console.log("item", item, level)
  return item.value === values[level]
});

console.log(result);

export default {
  componentName: 'appName',
  data() {
    return {

    }
  },
  mounted() {
    window.vm = this
    // console.log('this', this.$options.methods)
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
