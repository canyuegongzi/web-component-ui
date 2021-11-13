<script lang="ts">
export default {
  name: 'InputView',
  setup () {
    function inputChange(e: any) {
      console.log('input change', e);
    }
    return {
      inputChange
    }
  }
}
</script>

<template>
  <div style="width: 100%">
      <h3>Input</h3>
      <div style="display: flex;justify-content: space-between; align-items: center; padding: 16px">
        <wu-input name="setting" size="mini" @change="inputChange" value="222222" clearable="true" placeholder="请输入内容"></wu-input>
      </div>
  </div>

</template>
<style>

</style>
