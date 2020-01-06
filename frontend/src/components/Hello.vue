<template>
  <div>
    <h1>hello</h1>
    <p>{{result}}님, 안녕하세요</p>
  </div>
</template>


<script>
export default {
  created() {
    this.result = this.$route.params.userEmail;
  },
  data() {
    return {
      result: {}
    };
  },
  methods: {}
};
</script>