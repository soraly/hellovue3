<template>
  <div>{{ myname }} ———— {{ age }}</div>
  <div>food: {{ food.value.apple.name }}</div>
</template>

<script>
import Child from "./child.vue";
import { ref, watch, reactive, watchEffect,getCurrentInstance, onMounted } from "vue";

export default {
  data(){
    return {
      today: 2022
    }
  },
  setup() {
    const myname = ref("xiangg");
    const age = ref("age");
    const food = reactive({
      value: {
        apple: {
          name: 'AAA'
        }
      }
    })
    console.log(this,'this')

    var app = getCurrentInstance()
    
    onMounted(()=>{
      console.log(app.data.today,'todaytoday')
    })

    setTimeout(function () {
      myname.value = "fenfen";
    }, 1500);
    setTimeout(function () {
      food.value.apple.name = 'BBB'
    }, 2500);


    //初始化时，一定会立即执行第一次
    watchEffect(()=>{
      console.log(myname.value, 'watcheffect..');
      console.log(food.value.apple.name, 'watcheffect..');
    })


    // watch(myname, (newval, oldval) => {
    //   console.log(newval, oldval, "watch");
    // },{
    //   immediate: true
    // });

    // watch(()=>food, (newval, oldval) => {
    //   console.log(newval, oldval, "watch");
    // }, {
    //   deep: true
    // });




    return { myname, age, food  };
  },
  components: {
    Child,
  },
};
</script>