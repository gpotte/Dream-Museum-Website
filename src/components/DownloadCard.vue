<template>
  <div>
    <Card :data-image="info.Logo">
      <h1 slot="header">{{ info.OS }}</h1>
      <p slot="content">{{ info.ReleaseDate }}</p>
      <p slot="content">{{ info.Version }}</p>
      <a class="btn btn-dark" slot="content" @click.prevent="downloadItem"
        >Download</a
      >
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Axios from "axios";
export default {
  name: "DownloadCard",
  components: {
    Card
  },
  props: ["info"],
  created: function() {
    console.log(this.info.OS);
  },
  methods: {
    downloadItem() {
      Axios.get(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        { responseType: "blob" }
      ) //CHANGE URL
        .then(response => {
          const blob = new Blob([response.data], {
            type: response.headers["content-type"]
          });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = this.info.OS; //CHANGE BY NAME
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    }
  }
};
</script>
