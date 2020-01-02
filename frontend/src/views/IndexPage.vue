<template>
  <div class="wrap">
    <h1>영화 목록</h1>
    <b-nav-form>
      <b-form-input
        size="sm"
        class="mr-sm-2"
        placeholder="Search"
        v-model="searchData"
      ></b-form-input>
      <!-- <div class="d-flex justify-content-center"> -->
      <b-button size="sm" class="my-2 my-sm-0" @click="search">Search</b-button>
      <!-- </div> -->
    </b-nav-form>

    <div>
      <b-card>
        <b-list-group-item
          title="더보기"
          v-for="movie in movies"
          class="item"
          v-bind:key="movie.id"
        >
          <router-link
            :to="{ name: 'show', params: { id: movie.id } }"
            tag="img"
            :src="movie.poster_url"
            width="200px"
            height="300px"
          >
          </router-link>
        </b-list-group-item>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get("/api/movies").then(response => {
      this.movies = response.data;
    });
  },
  data() {
    return {
      movies: [],
      searchData: null
    };
  },
  methods: {
    search() {
      // console.log(this.movies);
      this.movies.forEach(movie => {
        // console.log(movie.id);
        if (this.searchData === movie.name) {
          // let result = movies.filter(movie => this.searchData === movie.name);
          console.log(movie.name);
          let results = this.movies.filter(result => {
            // return 써주는것 잊지 말자!
            return this.searchData === result.name;
          });
          console.log(results);
        }
      });
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
</style>
