<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Todo from "./components/todo/TodoList.vue";
import RefsDeom from "./components/toRefAndtoRefs/toRefs.vue";
import FnDemo from "./components/toRefAndtoRefs/useFn.vue";
import AsyncDemo from "./components/asyncDemo/model.vue";
import WatchDemo from "./components/watchDemo/model.vue";
</script>

<template>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <div>
    <Todo title="nihao vue" />
    <hr />
    <!-- <RefsDeom />
    <hr /> -->
    <!-- <FnDemo /> -->
    <!-- <AsyncDemo/> -->
    <!-- <WatchDemo /> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #2c3e50;
  margin-top: 60px;
}
</style>
