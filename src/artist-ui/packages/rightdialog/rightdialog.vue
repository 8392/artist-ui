<template>
  <div class="right-dialog" :class="{'active' : showdialog}">
    <!-- <div ref="rightdialog" :style="dialogStyle" :class="['dialog animate__animated', dialogsanimate ? 'animate__fadeInRightBig' : 'animate__fadeOutRightBig']"> -->
    <div ref="rightdialog" :style="dialogStyle" class="dialog">

      <h2 class="header">{{title}}</h2>
      <div class="body">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'right-dialog',
  props: {
    showdialog: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showdialogs: this.showdialog,
      dialogsanimate: true,
      dialogStyle: {
        width: '83%'
      }
    }
  },
  watch: {
    showdialog: {
      immediate: true,
      handler (data) {
        if (!data) {
          this.dialogsanimate = data
          setTimeout(() => {
            this.showdialogs = data
          }, 600)
        } else {
          this.showdialogs = data
          this.dialogsanimate = data
        }
      }
    },
    width: {
      immediate: true,
      handler (val) {
        if (val) {
          this.dialogStyle.width = val
        }
      }
    }
  },
  components: {},
  created () {

  },
  mounted () { },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.active{
  opacity: 1 !important;
  pointer-events: auto !important;
}
.right-dialog {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  z-index: 2010;
  opacity: 0;
  pointer-events: none;
	transition: all 0.3s ease-in-out 0s;
  &.active{
    .dialog {
      // transform: translateX(0%);
      right: 0;
    }
  }
  .dialog {
    height: 100%;
    width: 83%;
    background: white;
    position: relative;
    position: absolute;
    right: 100%;
    border-radius: 14px 0 0 14px;
    box-shadow: 0 6px 9px 1px rgba(120, 141, 187, 0.19);
    box-sizing: border-box;
    // padding: 30px;
    // transform: translateX(1000px);
  }


  .body {
    height: calc(100% - 80px);

    .app-list {
      box-sizing: border-box;
      padding: 20px 0;
      overflow: hidden;

      .app-item {
        width: 80px;
        height: 80px;
        text-align: center;
        color: #494949;
        padding: 13px;
        float: left;
        cursor: pointer;
        border-radius: 5px;
        margin: 1px;

        &:hover {
          background: #deeeff;
          transition: 0.3s all;
        }

        img {
          width: 56px;
          height: 56px;
        }
      }

      .app-active {
        background: #deeeff;
      }
    }
  }

  .footer {
    height: 40px;

    .btn {
      height: 32px;
      padding: 0 20px;
      border-radius: 4px;
      color: white;
      background: rgb(169, 178, 187);

      &:hover {
        cursor: pointer;
        transition: 0.3s all;
        background: #b7c3d0;
      }
    }

    .btn-blue {
      background: #105ab4;

      &:hover {
        background: #1a75e2;
      }
    }
  }
}
</style>
