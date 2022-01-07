<template>
  <div>
    <div>{{ title }}</div>
    <div class="home" style="margin-top: 20px">
      计数器》》
      <span>{{ state.count }}</span> <br />
      <button @click="coutadd">{{ state.text }}</button>
    </div>
  </div>
</template>

<script>
import { h, ref, reactive, onMounted, onUpdated } from "vue";
//ref用来创建响应式的值
//reactive用来创建响应式对象
export default {
  props: ["title"],
  setup(props) {
    onMounted(() => {
      console.log("mounted...");
    });
    
    //定义一个不需要改变的数据
    var btnText = "点按钮数字会变";

    //定义一个 count 的响应式数据，赋值为0
    var count = ref(100);

    //定义一个响应式对象
    var state = reactive({
      name: 'xiang',
      text: '点按钮',
      count: 666
    })
    console.log(state,'state')

    //定义一个函数，修改count的值
    var coutadd = ()=>{
      state.count ++ 
    }
    return { count, btnText, coutadd, state };
  },
};
/* 
划重点
首先，我们的组件不用写一堆东西了，只需要一个 setup 函数即可。

这样做得好处就是，我们可以把很多零碎的东西拆成公共组件，然后交给其他组件去调用。我写 vue 有一个痛苦的点就是很多的东西我想抽离成组件，
但是一拆，就得有 data (), methods 等等一堆。因此，有时候就偷懒，懒得拆了。

现在好了，可以一个函数就是一个组件，多方便啊！

其次，在 setup 函数中 return 出去的东西，可以在模板区域直接使用，也不必理会 this 这个神奇的东西。

然后就是 ref 这个函数，我们可以从 vue 中引入它，它传入一个值作为参数，返回一个基于该值的 响应式 Ref 对象，该对象中的值一旦被改变和访问，
都会被跟踪到，通过修改 count.value 的值，可以触发模板的重新渲染，显示最新的值。

最重要的是，编程风格的统一。对于 react 转 vue 的开发者来说，这样的编写风格是十分舒服的。但对于 vue 2.0 的开发者来说，会不太习惯。
但是没关系，习惯后你会很喜欢的。

原文链接：https://blog.csdn.net/FungLeo/article/details/106208437
 */
</script>