<template>
	<div class="page">
        <scrollBar direction="x" :activeIndex="activeIndex">
            <div
                class="scrollBarItem"
                v-for="(item, index) in options"
                :key="index"
                @click="changeNav(item, index)"
                :class="index === activeIndex ? 'active' : null"
            >
                <div>{{item.name}}</div>
            </div>
	    </scrollBar>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth1">定时任务补偿</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth2">定时任务补偿</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth3">定时任务补偿</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth4">定时任务补偿</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourt5">定时任务补偿</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourt6h">定时任务补偿</el-tab-pane>
    </el-tabs>
    </div>
</template>
<script>
// 先导入再注册下
import scrollBar from './tab'
import VueTabsSwiper from 'vue-tabs-swiper'
console.log("VueTabsSwipe", VueTabsSwiper)
export default {
    components: {
        scrollBar,
        VueTabsSwiper
    },
    data() {
        return {
            activeIndex: 0,
            activeName: 'second',
            options: [
                {id: 1, name: '关注'},
                {id: 2, name: '推荐'},
                {id: 3, name: '本地'},
                {id: 4, name: '新闻'},
                {id: 5, name: '汽车'},
                {id: 6, name: '直播'},
                {id: 7, name: '游戏'},
                {id: 8, name: '小说'},
                {id: 9, name: '美女'}
            ]
        }
    },
    methods: {
        changeNav(item, index) {
            this.activeIndex = index
        },
        handleClick() {}
    }
}
</script>
<style lang="scss" scoped>
.page{
    width: 400px;
    overflow: auto;
}
.scrollBarItem {
    padding: rem(8) rem(15);
}
.active {
    color: red;
    div {
        border-bottom: 1px solid red;
    }
}
</style>