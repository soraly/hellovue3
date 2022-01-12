<template>
  <div>
    {{ myname }}
  </div>
  <!-- <Child :childname="myname" @onInputChange="handleChange" /> -->
  <Child v-model:childname="myname" />
</template>

<script>
import Child from "./child.vue";
import { ref } from "vue";

export default {
  setup() {
    const myname = ref("xiangg");
    function handleChange(val) {
        myname.value = val
    }
    return { myname, handleChange };
  },
  components: {
    Child,
  },
};
</script>