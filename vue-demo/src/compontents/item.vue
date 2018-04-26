<template>
    <li class="item-content">
        <img alt="" :src="img">
        <p>
            <span>名称：</span>
            <span class="name">{{ name }}</span>
        </p>
        <p>
            <span>年份：</span>
            <span class="name">{{ year }}</span>
        </p>
    </li>
</template>



<script>
    export default {
        props:['img','name','year'],
    }

</script>

<style scoped>
    
.item-content {
    width: 240px;
    height: 320px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 5px;
    float: left;
    margin-left: 20px;
    margin-top: 10px;
}
.item-content:hover {
    border-color: #32a4fc;
}
.item-content img {
    width: 100%;
    height: 200px;
}
.item-content span.name {
    color: #32a4fc;

}
.item-content p {
}
</style>