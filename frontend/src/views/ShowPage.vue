<template>
  <!-- div 내 class 이렇게 줘서 center 위치할 수 있음 -->
  <div class="d-flex justify-content-center">
    <b-card
      :title="`${movie.name}`"
      :img-src="`${movie.poster_url}`"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 30rem;"
      class="mb-2"
    >
      <b-card-text>
        <p>관람 연령 : {{ movie.rating }} | 감독 : {{ movie.director }}</p>
        {{ movie.description }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  created: function() {
    /* eslint-disable no-console */
    console.log("showpage");
    // console.log(this.$route);
    let id = this.$route.params.id;
    this.$http.get(`/api/movies/${id}`).then(response => {
      // response.data[0]으로 했어야 오류 뜸
      this.movie = response.data[0];
    });
  },

  data() {
    // null이라고 하면 안됨. {}으로 지정해야 에러 안뜸
    return { movie: {} };
  }
};
</script>
