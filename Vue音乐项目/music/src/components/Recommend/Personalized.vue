<template>
    <div class="personalized">
        <div class="personalized-top">
            <h3>{{title}}</h3>
        </div>
        <div class="personalized-list">
            <div class="item" v-for="values in personalized" :key="values.id" @click="selectItem(values.id)">
                <!-- <img :src="values.picUrl"> -->
                <img v-lazy="values.picUrl">
                <p>{{values.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Personalized",
    methods:{
        selectItem(id) {
            // console.log(id);
            // 子组件调用父组件的方法，传递数据进去，由父组件切换路由地址
            // console.log(id);
            this.$emit('select',id,this.type);
        }
    },
    props:{
        personalized:{
            type: Array,
            default: () => [],
            required: true,
        },
        title:{
            type: String,
            default: '',
            required: true,
        },
        type:{
            type: String,
            default: '',
            required: true,
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
    .personalized {
        @include bg_sub_color();
        .personalized-top {
            width: 100%;
            height: 84px;
            line-height: 84px;
            @include bg_sub_color();
            padding: 0 20px;
            border-bottom: 1px solid #cccccc;
            h3 {
                @include font_size($font_large);
                font-weight: bold;
                @include font_color();
            }
        }
        .personalized-list {
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 20px 0;
            .item {
                width: 200px;
                padding-bottom: 20px;
                img {
                    width: 200px;
                    height: 200px;
                    border-radius: 20px;
                }
                p {
                    @include clamp(2);
                    @include font_size($font_medium_s);
                    @include font_color();
                    text-align: center;
                }
            }
        }
    }
</style>
