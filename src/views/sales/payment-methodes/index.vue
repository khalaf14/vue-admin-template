<template>
  <div style="padding:30px;">
    <el-alert :closable="true" title="nested" type="success">
      <router-view />
    </el-alert>
  </div>
</template>

