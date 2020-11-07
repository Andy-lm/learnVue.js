<template>
    <Header class="header">
        <div slot="left" class="header-left"></div>
        <p slot="center" class="header-title">FANTA</p>
        <div slot="right" class="header-right" @click.stop="showSelect"></div>
    </Header>
</template>

<script>
import Header from "./Header"
import {mapGetters,mapActions} from "vuex" 
export default {
    name:"MainHeader",
    components:{
        Header
    },
    computed:{
        ...mapGetters([
            'isShowSelect'
        ])
    },
    methods:{
        ...mapActions([
            'setShowSelect'
        ]),
        // accountClick(){
        //     this.$router.push('/account');
        // }
        showSelect(){
            this.setShowSelect(!this.isShowSelect);
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/css/variable";
@import "../assets/css/mixin";
.header {
    .header-left {
        @include bg_img('../assets/images/logo');
    }
    .header-right {
        @include bg_img('../assets/images/account');
    }
    .header-title {
        text-align: center;
        line-height: 100px;
        color: #fff;
        font-weight: 700;
        @include font_size($font_medium);
    }
}
</style>