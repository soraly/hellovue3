<template>
  <div>
    <input
      type="text"
      :value="childname"
      @input="$emit('update:childname', $event.currentTarget.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    childname: String,
  },
  methods: {},
};
</script>