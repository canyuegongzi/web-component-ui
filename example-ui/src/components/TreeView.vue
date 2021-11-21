<script lang="ts">
export default {
  name: 'TreeView',
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
      <h3>Tree</h3>
      <h5>Normal</h5>
      <div style="display: flex;justify-content: space-between; align-items: center; padding-left: 16px">
        <wu-tree size="mini"></wu-tree>
      </div>
  </div>

</template>
<style>

</style>
