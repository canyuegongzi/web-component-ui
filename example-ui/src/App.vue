<script lang="ts">
import "@canyuegongzi/web-ui/src/packages";
import ButtonView from "./components/ButtonView.vue"
import { defineComponent, ref } from "vue";
import RadioView from "./components/RadioView.vue";
export default defineComponent({
  components: {
    ButtonView,
    RadioView
  },
  setup(){
    const sonRef = ref(null);
    const handleClick = () => {
      sonRef.value.song();
    }
    return { sonRef, handleClick, }
  }
})
</script>

<template>
  <div style="width: 70%">
    <ButtonView />
    <RadioView />
  </div>

</template>
<style>

</style>
