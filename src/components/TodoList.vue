<template>
  <div style="text-align: left">
    <h2>this is todo</h2>
    <p>
      {{heroRef.name}}
    </p>
    <div>
      <input ref="myInput" type="text" style="padding: 4px" v-model="inputVal" />
      <button @click="addInput($event), test($event)">点我添加</button>
    </div>
    <List :listData="list" @onDelete="handleDelete"  />
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import List from "./List.vue";

export default {
  components: {
    List,
  },
  setup() {
    // 使用todo逻辑
    var { list, inputVal, addInput, handleDelete } = todo();
    var test = ()=>{console.log('test')}

    //在reactive中使用ref
    var nameRef = ref('xiang');

    var heroRef = reactive({
      id: 123,
      name: nameRef
    })

    setTimeout(function(){
      nameRef.value = 'fenfen';
    }, 2000)

    const myInput = ref(null);
    //在dom上使用ref
    onMounted( ()=>{
    })


    // 将数据和方法返回，暴露给模板使用
    return { list, inputVal, addInput, handleDelete, heroRef, myInput,test };
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
