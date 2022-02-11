<template>
  <div>this is my name: {{ nameRef }}</div>
  <h4>age: {{ hero.age }}</h4>
  <h4>today: date — {{date}} </h4>
  <button @click="changeDate">修改日期</button>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  setup() {
    var nameRef = ref("xiangggg");
    var hero = reactive({
      name: "spiderman",
      age: 200,
    });

    //const {temp, date} = getNowtime1();
    //console.log(temp, date,'temp, date') //输出 37度 2022/2/10 temp, date，无响应式 

    const {temp, date} = getNowtime2();
    console.log(temp, date,'temp, date') //输出 37度 2022/2/10 temp, date，无响应式 

    function changeDate(){
        date.value = '2021'
    }

    return { nameRef, hero, temp, date, changeDate };
  },
};

function getNowtime1(){
    var today = reactive({temp: '37度', date: '2022/2/10'})

    return today
}

function getNowtime2(){
    var today = reactive({temp: '37度', date: '2022/2/10'})

    return toRefs(today)
}

</script>