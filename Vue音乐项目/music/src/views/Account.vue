<template>
    <transition appear>
        <div class="account">
            <AccountHeader></AccountHeader>
        </div>
    </transition>
    
</template>

<script>
import AccountHeader from "../components/Account/AccountHeader"
export default {
    name:'Account',
    components:{
        AccountHeader
    }
}
</script>

<style scoped lang="scss">
    .account {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: blueviolet; 
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