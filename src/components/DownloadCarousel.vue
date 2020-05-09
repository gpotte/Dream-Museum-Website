<template>
  <div class="main jumbotron-fluid d-none d-md-block" id="Download">
    <p class="display-3">Download</p>
    <div class="d-md-flex" style="justify-content: center">
      <DownloadCard
        v-for="(info, x) in DownloadInfos"
        :key="x"
        v-bind:info="info"
        v-bind:index="x"
      />
    </div>
  </div>
</template>

<script>
import DownloadCard from "@/components/DownloadCard";
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
    this.Versions = [];
    this.$axios
      .get(this.$APIURL + "/version")
      .then(list => {
        var i;
        for (i = 0; i < list.data.length; i++) {
          var date = new Date(list.data[i].date);
          var month = date.getMonth() + 1;
          var day = date.getDate();
          var year = date.getFullYear();
          list.data[i].date = day + "/" + month + "/" + year;
        }
        this.DownloadInfos = list.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.d-md-block {
  justify-content: center;
}

.d-md-flex {
  flex-wrap: wrap;
  margin-left: 25vw;
  max-width: 50vw;
  align-self: center;
}

.display-3 {
  line-height: 2.5;
  display: block;
}
</style>
