<template>
    <div class="nav-wapper">
        <div class="content">
            <slot></slot>
        </div>
        <Nav></Nav>
    </div>
</template>

<script lang='ts'>
    export default {
        name:'Layout'
    }
</script>

<style lang="scss" scoped>
.nav-wapper {
        display: flex;
        flex-direction: column;
        // border: 1px solid green;
        // min-height: 100vh;
        height: 100vh;
        .content {
            // border: 1px solid black;
            overflow: auto;
            // 让其占满所有的空间
            flex-grow: 1;
            // flex: 1;
        }
    }
</style>