<template>
    <!-- app.vue 的template标签内只能有一个节点 -->
    <div class="content">

        <div class="tabs">
            <active  v-for="(list,index) in lists" :key="index" :activeName="list.name" @handleClick="queryMethods(index)" :class="{'active':isActive == index}"></active>
        </div>
        <ul>
            <item v-for="(item, index) in list" :key="index" :img="getMoveInfo(item).images.small" :name="getMoveInfo(item).title" :year="getMoveInfo(item).year"></item>
        </ul>
        
    </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
    import jsonp from 'jsonp';
    import item from './compontents/item.vue';
    import active from './compontents/active.vue';
    export default {
        components: {
            item: item,
            active: active
        },
        data () {
            return {
                isActive: 0,
                list: [],
                lists:[
                    {
                        name: '即将上映'
                    },
                    {
                        name: '北美票房榜'
                    },
                    {
                        name: '正在上映'
                    }
                ]
            }
        },
        computed: {
            movieUrl: function(){
                let url = "https://api.douban.com/v2/movie/in_theaters";
                if(this.isActive == 0){
                    url = "https://api.douban.com/v2/movie/in_theaters"
                }else if(this.isActive == 1){
                    url = "https://api.douban.com/v2/movie/us_box"
                }else if(this.isActive == 2){
                    url = "https://api.douban.com/v2/movie/coming_soon"
                }
                return url;
            }
        },
        methods: {
            queryMethods (index) {
                let _this = this;
                _this.isActive = index || 0;
                jsonp(_this.movieUrl, {
                    //jsonp的回调函数名
                    name: 'success_jsonpCallback'
                }, function (err, data) {  //注意第一个参数是 err，第二个参数是 data
                    return _this.list = data.subjects;
                });
            },
            getMoveInfo: function(data){
                if(data.subject){
                    return data.subject
                }else{
                    return data
                }
            }
        },
        //挂载结束，请求数据
        mounted (url) {    
            console.log(1111232)
            this.queryMethods();
        }
    }

</script>

<!-- 设置scoped 表示当前组件下的id只在当前组件起作用，不会跟其他组件引起冲突 -->
<style scoped>
    .tabs {
        font-size: 0;
    }
</style>
