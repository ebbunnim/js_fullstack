<template>
  <div>
    <h1>상세 내용</h1>
    <h1>{{ movie[0].name }}</h1>
    <img :src="movie[0].poster_url" class="poster" />
  </div>
</template>
<script>
export default {
  created: function() {
    /* eslint-disable no-console */
    console.log("showpage");
    var id = this.$route.params.id;
    this.$http.get(`/api/movies/${id}`).then(response => {
      this.movie = response.data;
      console.log(this.movie);
    });
  },

  data() {
    return { movie: null };
  }
};
</script>
