<template>
  <div class="main jumbotron jumbotron-fluid">
    <div class="container">
      <!-- PROJECT TITLE + PROJECT DESCRIPTION + SOCIAL NETWORK (small)-->
      <H1 id="title">Dream Museum</H1>

      <Stats />
    </div>
  </div>
</template>

<script>
import Stats from "@/components/Stats";

export default {
  name: "About",
  components: {
    Stats
  },
  data: function() {
    return {};
  },
  created() {}
};
</script>
<style scoped>
.main {
  background-color: #111111;
  min-height: 30vh;
  width: 100vw;
  padding: 3vh;
}
#title {
  color: azure;
}
</style>
