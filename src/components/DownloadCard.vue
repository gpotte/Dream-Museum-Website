<template>
  <div>
    <Card :data-image="'http://api.dream-museum.space/logos/' + info.logo">
      <h1 slot="header">{{ info.OS }}</h1>
      <p slot="content">{{ info.date }}</p>
      <p slot="content">{{ info.version }}</p>
      <a class="btn btn-dark" slot="content" @click.prevent="downloadItem"
        >Download</a
      >
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "DownloadCard",
  components: {
    Card
  },
  props: ["info", "index"],
  created: function() {},
  methods: {
    downloadItem() {
      this.$axios
        .get("http://api.dream-museum.space/download/" + this.info.path, {
          responseType: "blob"
        })
        .then(response => {
          const blob = new Blob([response.data], {
            type: response.headers["content-type"]
          });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = this.info.name;
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    }
  }
};
</script>
