<template>
    <div>
        <input type="text" :value="value" @input="input">
    </div>
</template>

<script>
    export default {
        name:"LmInput",
        props:{
            value:{
                type:String
            }
        },
        methods:{
            input(e){
                let value = e.target.value;
                this.$emit('input',value);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>