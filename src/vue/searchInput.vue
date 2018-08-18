<template>
    <div id="searchInput">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
                select: ''
            }
        }
    };
</script>

<style>

</style>