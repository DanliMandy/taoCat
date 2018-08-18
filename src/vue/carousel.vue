<template>
    <div class="focus-bd">
        <el-carousel :interval="5000" arrow="always" height="400px">
            <el-carousel-item v-for="(img, index) in focusImg" :key="index">
                <img :src="img.url">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                focusImg:[
                    {
                        url: require('../images/fs/fs1.jpg')
                    },
                    {
                        url: require('../images/fs/fs2.jpg')
                    },
                    {
                        url: require('../images/fs/fs3.jpg')
                    }
                ]
            }
        }
    }
</script>

<style>

</style>