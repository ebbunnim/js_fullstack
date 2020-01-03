<template>
  <div>
    <h1>movie page</h1>
    <!-- <ul>
      <ol v-for="item in items" :key="item.id">{{item.title}}</ol>
    </ul>-->
    <b-card>
      <b-list-group-item title="더보기" v-for="item in items" class="item" :key="item.id">
        <router-link :to="{name: 'index'}" tag="img" :src="item.image" width="200px" height="300px"></router-link>
      </b-list-group-item>
    </b-card>
  </div>
</template>


<script>
export default {
  created() {
    this.$http.get("/api/getDatas").then(res => {
      // console.log(res.data.items);
      this.items = res.data.items;
      console.log(this.items);
    });
  },
  data() {
    return {
      items: {}
    };
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
</style>