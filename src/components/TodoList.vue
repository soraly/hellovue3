<template>
  <div style="text-align: left">
    <h2>this is todo</h2>
    <div>
      <input type="text" style="padding: 4px" v-model="inputVal" />
      <button @click="addInput">点我添加</button>
    </div>
    <List :listData="list" @onDelete="handleDelete"  />
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import List from "./List.vue";

export default {
  components: {
    List,
  },
  setup() {
    // 使用todo逻辑
    var { list, inputVal, addInput, handleDelete } = todo();

    // 将数据和方法返回，暴露给模板使用
    return { list, inputVal, addInput, handleDelete };
  },
};

function todo() {
  let inputVal = ref("");
  let list = reactive([
    { id: 1, name: "吃饭" },
    { id: 2, name: "睡觉" },
    { id: 3, name: "打豆豆" },
  ]);

  function initData() {
    return console.log(inputVal, list);
  }

  function addInput() {
    list.push({ id: +new Date(), name: inputVal.value });
  }

  function handleDelete(index) {
    list.splice(index, 1);
  }

  return {
    inputVal,
    list,
    addInput,
    handleDelete,
  };
}
</script>