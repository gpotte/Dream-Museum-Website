<template>
  <div
    class="main jumbotron-fluid d-md-none carousel slide"
    style="display: block"
    data-ride="carousel"
  >
    <p class="display-4">Download</p>
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="(info, x) in DownloadInfos"
        :key="x"
        :class="{ active: x == 0 }"
      >
        <img class="d-block w-100" :src="'http://localhost:7700/logos/' +info.logo" /><br />
        <div class="carousel-caption">
          <h1 slot="header">{{ info.OS }}</h1>
          <p slot="content">{{ info.date }}</p>
          <p slot="content">{{ info.version }}</p>
          <a
            class="btn btn-dark"
            slot="content"
            @click.prevent="downloadItem(info)"
            >Download</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Download",
  components: {},
  data: function() {
    return {
      DownloadInfos: []
    };
  },
  created() {
   this.Versions = [];
          this.$axios.get(this.$APIURL + '/version')
          .then((list)=>{
            var i;
            for (i = 0; i < list.data.length; i++ ){
              var date = new Date(list.data[i].date);
              var month = date.getMonth() + 1;
              var day = date.getDate();
              var year = date.getFullYear();
              list.data[i].date = day + "/" +month+ "/" + year
            }
          this.DownloadInfos = list.data;
        })
        .catch((err)=>{
          console.log(err);
        })
  },
  methods: {
    downloadItem(info) {
      this.$axios.get(
        'http://localhost:7700/download/'+info.path,
        { responseType: "blob" }
      )
        .then(response => {
          const blob = new Blob([response.data], {
            type: response.headers["content-type"]
          });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = info.name;
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    }
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
