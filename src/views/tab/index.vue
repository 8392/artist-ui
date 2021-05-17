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
    <vue-tabs-swiper>
        <div tab-label="热点">热点</div>
        <div tab-label="发现">发现</div>
        <div tab-label="关注">关注</div>
        <div tab-label="成都">成都</div>
        <div tab-label="北京">北京</div>
        <div tab-label="上海">上海</div>
        <div tab-label="上海">上海</div>
        <div tab-label="上海">上海</div>
        <div tab-label="上海">上海</div>
    </vue-tabs-swiper>
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
        }
    }
}
</script>
<style lang="scss" scoped>
.page{
    width: 200px;
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