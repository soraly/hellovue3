import { ref, onMounted, onBeforeUnmount } from 'vue'

export default function () {
    var Xref = ref(0);
    var Yref = ref(0);

    onMounted(() => {
        window.addEventListener('mousemove', handleMove)
    })

    function handleMove(event) {
        Xref.value = event.pageX;
        Yref.value = event.pageY;
    }

    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', handleMove);
    })

    return { Xref, Yref }
}