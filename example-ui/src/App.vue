<script lang="ts">
import "@canyuegongzi/web-ui/src/packages";
// import "@canyuegongzi/web-ui/lib/index.esm";
import ButtonView from "./components/ButtonView.vue"
import { defineComponent, ref } from "vue";
import RadioView from "./components/RadioView.vue";
import IconView from "./components/IconView.vue";
import InputView from "./components/InputView.vue";
export default defineComponent({
  components: {
    ButtonView,
    RadioView,
    IconView,
    InputView
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
    <IconView />
    <InputView />
  </div>

</template>
<style>

</style>
