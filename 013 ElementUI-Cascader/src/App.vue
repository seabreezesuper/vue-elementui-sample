<template>
<div id="app">
<div class="block">
  <span class="demonstration">默认 click 触发子菜单</span>
  <el-cascader
    v-model="value"
    :options="options"
    @change="handleChange"></el-cascader>
</div>
<div class="block">
  <span class="demonstration">hover 触发子菜单</span>
  <el-cascader id="hover" ref="hover"></el-cascader>
</div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        options: [{
          value: 'gd',
          label: '广东',
        },{
          value: 'gx',
          label: '广西',
        }],
        value2: [],
        options2: [{
          value: 'gz',
          label: '广州',
        },{
          value: 'sz',
          label: '深圳',
        }],
        value3: [],
        options3: [{
          value: 'nn',
          label: '南宁',
        },{
          value: 'lz',
          label: '柳州',
        }]
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);

        if(value="gd"){
           console.log(this.$hover.outerHTML);
 //          $hover.cascaderData = Items.map((value, i) => {
 //             return {
 //               options: options2,
 //             }
 //           })

        }
      }
    }
  }
</script>