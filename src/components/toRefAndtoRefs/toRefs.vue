<template>
  <div>hello,{{ name }} --- {{ age }}</div>
</template>

<script>
import { ref, toRefs, reactive, toRef } from "vue";

export default {
  setup() {
    const state = reactive({
      name: "xiang",
      age: 20,
    });

    // const stateAsRef = toRefs(state);


    // setTimeout(function () {
    //   // stateAsRef.name.value = 'fenfen'
    // }, 1000)

    // var { name2, age2 } = test()
    // console.log(name2, age2)

    // setTimeout(() => {
    //   // name2.value = 'hello,xiang'
    // }, 1500)
    var { name, age } = state;
    
    setTimeout(() => {
      state.name = 'xixihah';
      console.log(state)
    }, 1500)

    return toRefs(state);
  },
};

function test() {
  var state2 = reactive({
    name2: 'spidernam',
    age2: 100
  })
  return toRefs(state2)
}

</script>
