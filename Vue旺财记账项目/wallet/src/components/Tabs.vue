<template>
    <div>
        <ul class="types">
            <li :class="{[classPrefix+'-item']:classPrefix,selected:value === '-'}"
            @click="selectType('-')">支出</li>
            <li :class="{[classPrefix+'-item']:classPrefix,selected:value === '+'}"
            @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>