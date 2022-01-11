import { reactive, onMounted, onBeforeUnmount, toRefs } from 'vue'

export default function () {
    var obj = reactive({
        x: 0,
        y: 0
    })

    onMounted(() => {
        window.addEventListener('mousemove', handleMove)
    })

    function handleMove(event) {
        obj.x = event.pageX;
        obj.y = event.pageY;
    }

    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', handleMove);
    })

    return toRefs(obj)
}