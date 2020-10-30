<template>
    <transition appear>
        <div class="account">
            <AccountHeader @switchItem="switchItem"></AccountHeader>
            <AccountBottom :switchNum="switchNum"></AccountBottom>
        </div>
    </transition>
    
</template>

<script>
import AccountHeader from "../components/Account/AccountHeader"
import AccountBottom from "../components/Account/AccountBottom"
import MetaInfo from "../../vue-meta-info"
export default {
    name:'Account',
    metaInfo:MetaInfo.account,
    components:{
        AccountHeader,
        AccountBottom
    },
    methods:{
        switchItem(num){
            this.switchNum = num;
        }
    },
    data(){
        return {
            switchNum:0
        }
    }
}
</script>

<style scoped lang="scss">
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
    .account {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        @include bg_sub_color();
    }
    .v-enter {
        /* opacity指变化的程度 */
        transform: translateX(100%);
    }

    .v-enter-to {
        transform: translateX(0%);
    }

    .v-enter-active {
        transition: transform 0.3s linear;
    }

    .v-leave {
        transform: translateX(0%)
    }

    .v-leave-to {
        transform: translateX(100%);
    }

    .v-leave-active {
        transition: transform 0.3s linear;
    }
</style>