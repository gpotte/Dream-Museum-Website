<template>
  <div class="main">
    <DownloadCard />
  </div>
</template>

<script>
import DownloadCard from "@/components/DownloadCard";
export default {
  name: "Download",
  components: {
    DownloadCard
  }
};
</script>

<style scoped>
.main {
  background-color: #232323;
  min-height: 30vh;
  width: 100vw;
  padding: 3vh;
}
</style>
