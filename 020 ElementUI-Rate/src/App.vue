<template>
<div class="block">
  <span class="demonstration">默认不区分颜色</span>
  <el-rate v-model="value1"></el-rate>
</div>
</template>

<script>
  export default {
    data() {
      return {
        value1: null
      }
    }
  }
</script>