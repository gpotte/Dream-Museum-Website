<template>
  <div class="main jumbotron jumbotron-fluid" id="About">
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

<style scoped></style>
