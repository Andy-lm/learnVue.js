<template>
    <nav>
        <router-link to="/money" class="item" ><Icon name='money'></Icon>记账</router-link>
        <router-link to="/lables" class="item" ><Icon name="lable"></Icon>标签</router-link>
        <router-link to="/statistics" class="item"><Icon name='statistics'></Icon>统计</router-link>
    </nav>
</template>

<script lang='ts'>
// import x from '@/assets/icons/money.svg'
// import Icon from '@/components/Icon.vue';
// console.log(svg);
    
    export default {
        name:'Nav'
    }
</script>

<style lang="scss" scoped>
    nav {
        display: flex;
        font-size: 12px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        justify-content: space-around;
        // justify-content: space-between;
        .item {
            padding: 2px 0;
            // width: 33.333%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            &.router-link-active {
                color:blue
            }
            .icon {
                width: 32px;
                height: 32px;
            }
        }
    }
</style>