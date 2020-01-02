<template>
  <div class="wrap">
    <h1>영화 목록</h1>
    <ul class="movies">
      <li v-for="movie in movies" class="item" v-bind:key="movie.id">
        <img
          v-bind:src="movie.poster_url"
          class="poster"
          width="200px"
          height="300px"
        />
        <router-link :to="{ name: 'show', params: { id: movie.id } }"
          >더보기</router-link
        >
      </li>
    </ul>
  </div>

  <!-- <div v-for="movie in movies" class="movie" v-bind:key="movie.id">
      <img
        v-bind:src="movie.poster_url"
        class="poster"
        width="400px"
        height="300px"
      />
      <div>
        <router-link :to="{ name: 'show', params: { id: movie.id } }"
          >더보기</router-link
        >
      </div>
    </div> -->
</template>

<script>
export default {
  created() {
    this.$http.get("/api/movies").then(response => {
      this.movies = response.data;
    });
  },
  data() {
    return { movies: [] };
  }
};
</script>

<style scoped>
.item {
  padding: 0px;
  display: inline;
}

.card {
  display: inline;
}

ul li {
  display: inline;
}

br {
  display: inline;
}
</style>
