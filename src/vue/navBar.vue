<template>
    <div id="navBar" >
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="#F07C2E " @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2" @open = "handleOpen">
                <template slot="title">猫咪生活馆</template>
                <el-submenu index="2-1">
                    <template slot="title">主粮区</template>
                    <el-menu-item index="2-4-1">进口主粮</el-menu-item>
                    <el-menu-item index="2-4-2">国产主粮</el-menu-item>
                </el-submenu>
                <el-menu-item index="2-2">零食区</el-menu-item>
                <el-menu-item index="2-3">生活用品区</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">猫咪药店</el-menu-item>
            <el-menu-item index="4">喵喵社区</el-menu-item>
            <el-menu-item index="5">个人中心</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                    activeIndex: '1'
            }
        },
        methods: {
            handleSelect(index,indexPath) {
                console.log(index,indexPath);
            },
            handleOpen(index,indexPath){
                console.log(index,indexPath);
            }
        }
    }
</script>

<style scoped>

</style>