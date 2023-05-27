<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <el-select v-model="value" filterable placeholder="Select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
//Component registeration
export default {
  name: 'App11',
  data() {
    return {
      options: [{
          value: 'Option1',
          label: 'khalaf'
        }, {
          value: 'Option2',
          label: 'issa'
        }, {
          value: 'Option3',
          label: 'ahmed'
        }, {
          value: 'Option4',
          label: 'mhmd'
        }, {
          value: 'Option5',
          label: 'talha'
        }],
        value: ''
    }
  }
}
</script>
<style>
</style>
