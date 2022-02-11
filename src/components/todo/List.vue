<template>
  <li v-for="(item, key) in listData" :key="item.id">
      {{ item.name }}
      <span @click="deleteItem(key)" style="font-weight: bold">X</span>
    </li>

    <!-- 可以直接把h2挂载到body下 -->
    <!-- <teleport to="body">
      <h2>123</h2>
    </teleport>   -->
    
</template>

<script>

export default {
  props: ["listData"],
  emits: ['onDelete'],
  setup(params, { emit }) {
    
    function deleteItem(key) {
      emit("onDelete", key);
    }
    return { deleteItem };
  },
};
</script>

