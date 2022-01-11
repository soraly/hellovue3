<template>
  <div>
    <h2>userFnDemo</h2>
    <div>鼠标位置是 {{ x }} {{ y }}</div>
  </div>
</template>

<script>
import useMouse from "./useMouse2.js";

export default {
  setup() {
    const { x, y } = useMouse();
    // console.log(Xref, Yref);

    return {x, y}
  },
};
</script>