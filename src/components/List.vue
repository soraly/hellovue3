<template>
  <ul>
    <li v-for="(item, key) in listData" :key="item.id">
      {{ item.name }}
      <span @click="deleteItem(key)" style="font-weight: bold">X</span>
    </li>
  </ul>
</template>

<script>

export default {
  props: ["listData"],
  setup(params, { emit }) {
    console.log(params, "params");
    
    function deleteItem(key) {
      emit("onDelete", key);
    }
    return { deleteItem };
  },
};
</script>

