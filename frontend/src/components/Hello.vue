<template>
  <div>
    <h1>hello</h1>
    <p>{{ userInfo }}님, 안녕하세요</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {}
};
</script>
