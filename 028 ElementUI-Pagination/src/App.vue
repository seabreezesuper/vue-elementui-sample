<template>
  <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-size="50"
      layout="total, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    methods: {
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage4: 4
      };
    }
  }
</script>