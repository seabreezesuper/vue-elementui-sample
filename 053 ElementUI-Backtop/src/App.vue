<template>
<div>
  Scroll down to see the bottom-right button.
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
   <div>
     <ul>
       <li v-for="i in 100">
         {{i}}
       </li>
     </ul>
  </div>
</div>
</template>