<template>
    <div id="wrapper" ref="wrapper">
    <!-- 使用插槽来获取需要滚动的范围 -->
    <slot></slot>
</div>
</template>

<script>
import IScroll from "iscroll/build/iscroll-probe";
export default {
    name:"ScrollView",
    mounted:function() {
        this.iscroll = new IScroll(this.$refs.wrapper,{
            mouseWheel: true,
            scrollbars: false,
            // 监听像素级别的滚动
            probeType: 3,
            // 解决拖拽卡顿问题
            scrollX: false,
            scrollY: true,
            disablePointer: true,
            disableTouch: false,
            disableMouse: true
        });
        // setTimeout(()=> {
        //     console.log(this.iscroll.maxScrollY);
        //     this.iscroll.refresh();
        //     console.log(this.iscroll.maxScrollY);
        // },3000);
        // 创建观察者
        let observer = new MutationObserver((mutationList, observer) =>{
            // console.log(mutationList)
            // console.log(this.iscroll.maxScrollY)
            this.iscroll.refresh();
            // console.log(this.iscroll.maxScrollY)
        });
        const config = {
            childList: true, // 观察目标子节点的变化，添加或者删除
            subtree: true, // 默认为 false，设置为 true 可以观察后代节点
            attributeFilter: ['height', 'offsetHeight'] // 观察特定属性
        }
        observer.observe(this.$refs.wrapper,config);
    },
    methods:{
        // 提供一个监听滚动距离的方法给外界使用
        scrolling(fn){
            // 监听iscroll的滚动
            this.iscroll.on('scroll',function(){
                fn(this.y);
            })
        },
        refresh(){
            setTimeout(()=>{
                this.iscroll.refresh();
            },100)
        },
        scrollTo(x,y,time){
            this.iscroll.scrollTo(x,y,time);
        }
    }

}
</script>

<style scoped lang="scss">
    #wrapper {
        width: 100%;
        height: 100%;
    }
</style>