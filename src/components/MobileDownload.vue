<template>
  <div class="main jumbotron-fluid d-md-none" id="Download">
    <DownloadCard
      v-for="(info, x) in DownloadInfos"
      :key="x"
      v-bind:info="info"
    />
  </div>
</template>

<script>
import axios from "axios";

import DownloadCard from "@/components/DownloadCard";
import { CarouselCard, CarouselCardItem } from "vue-carousel-card";
import "vue-carousel-card/styles/index.css";

export default {
  name: "Download",
  components: {
    DownloadCard
  },
  data: function() {
    return {
      DownloadInfos: []
    };
  },
  created() {
    axios
      .get(
        "https://my.api.mockaroo.com/CarouselToDownloadShit.json?key=7490e1b0"
      )
      .then(r => {
        this.DownloadInfos = r.data;
        console.log(this.DownloadInfos.length);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style scoped>
.display-1 {
  font-size: 8vw;
  line-height: 0.8;
  display: block;
}
</style>
