<template>
  <!-- div 내 class 이렇게 줘서 center 위치할 수 있음 -->
  <div class="d-flex justify-content-center">
    <b-card
      :title="`${movie[0].name}`"
      :img-src="`${movie[0].poster_url}`"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 30rem;"
      class="mb-2"
    >
      <b-card-text>
        <p>
          관람 연령 : {{ movie[0].rating }} | 감독 : {{ movie[0].director }}
        </p>
        {{ movie[0].description }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  created: function() {
    /* eslint-disable no-console */
    console.log("showpage");
    console.log(this.$route);
    let id = this.$route.params.id;
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
