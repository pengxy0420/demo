<template>
    <a @click="clickActive()">{{ activeName }}</a>
</template>

<script>
    export default {
        props: ['activeName'],
        methods: {
            clickActive () {
                this.$emit("handleClick",this.index);
            }
        }
    }

</script>

<style scoped>
    
    a {
        display: inline-block;
        padding: 5px 10px;
        border: 1px solid #ccc;
        color: #000;
        font-size: 16px;
        margin-left: 20px;
        margin-top: 20px;
        cursor: pointer;
    }
    a.active {
        border-color: #32a4fc;
        color: #32a4fc; 
    }
</style>