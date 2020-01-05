<template>
  <div class="wrap">
    <h1>영화 목록</h1>
    <b-nav-form>
      <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="searchData"></b-form-input>
      <!-- <div class="d-flex justify-content-center"> -->
      <!-- <b-button size="sm" class="my-2 my-sm-0" @click="search">Search</b-button> -->
      <!-- </div> -->
    </b-nav-form>

    <div>
      <b-card>
        <b-list-group-item
          title="더보기"
          v-for="movie in filteredMovies"
          class="item"
          v-bind:key="movie.id"
        >
          <router-link
            :to="{ name: 'show', params: { id: movie.id } }"
            tag="img"
            :src="movie.poster_url"
            width="200px"
            height="300px"
          ></router-link>
        </b-list-group-item>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("index page");
    this.$http.get("/api/movies").then(response => {
      this.movies = response.data;
    });
  },
  data() {
    return {
      movies: [],
      searchData: null,
      results: []
    };
  },
  methods: {},
  computed: {
    filteredMovies: function() {
      if (this.searchData === null) {
        return this.movies;
      } else {
        return this.movies.filter(movie => {
          return movie.name.match(this.searchData);
        });
      }
    }
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

b-nav-form {
  width: 100px;
  margin: auto;
}
</style>
