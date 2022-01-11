<template>
  <div>hello,{{ nameRef }}</div>
</template>

<script>
import { ref, toRef, reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      name: "xiang",
      ag: 20,
    });

    const nameRef = toRef(state, "name");

    setTimeout(() => {
      nameRef.value = "fenfen";
    }, 1000);

    setTimeout(() => {
      state.name = "xiang2";
    }, 2000);

    return { nameRef };
  },
};
</script>
