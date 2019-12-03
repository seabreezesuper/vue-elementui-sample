<template>
<div class="block">
  <span class="demonstration">有默认值</span>
  <el-color-picker v-model="color1"></el-color-picker>
</div>
</template>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF'
      }
    }
  };
</script>