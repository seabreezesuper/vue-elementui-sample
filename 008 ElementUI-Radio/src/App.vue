
<template>
<div id="app">
  <el-radio v-model="radio" label="1">备选项1</el-radio>
  <el-radio v-model="radio" label="2">备选项2</el-radio>
</div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      radio: '1'
    }
  }
}
</script>