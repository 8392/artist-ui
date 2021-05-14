// root 相当于eventbus参数传递，但是不用引入eventBus实例

function broadcast (componentName, eventName, params) {
  // 遍历所有子组件
  this.$children.forEach(child => {
    const name = child.$options.componentName;

    // 找到组件名为componentName的子组件，并调用该子组件的$emit方法；
    // 否则，继续递归
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    dispatch (componentName, eventName, params) {
      // 当前父组件
      let parent = this.$parent || this.$root;
      //当前父组件的组件名
      let name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
