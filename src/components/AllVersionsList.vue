<template>
  <div class="main">
    <table class="table">
      <thead>
        <tr>
          <td>name</td>
          <td>OS</td>
          <td>date</td>
          <td>version</td>
          <td>logo</td>
        </tr>
      </thead>
      <tr class="" v-for="(version, x) in Versions" :key="x">
        <td>{{ version.name }}</td>
        <td>{{ version.OS }}</td>
        <td>{{ version.date }}</td>
        <td>{{ version.version }}</td>
        <td><img :src="'gpotte.drich.fr:7700/logos/' + version.logo" /></td>
        <td>
          <a
            class="btn btn-dark"
            slot="content"
            @click.prevent="downloadItem(version)"
            >Download</a
          >
        </td>
        <td>
          <a
            class="btn btn-danger"
            slot="content"
            @click.prevent="destroyItem(version._id)"
            >DESTROY</a
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "AllVersionsList",
  components: {},
  data: function() {
    return {
      Versions: []
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
        this.Versions = list.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    downloadItem(e) {
      this.$axios
        .get("gpotte.drich.fr:7700/download/" + e.path, {
          responseType: "blob"
        })
        .then(response => {
          const blob = new Blob([response.data], {
            type: response.headers["content-type"]
          });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = e.name;
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    },
    fetchAllItems() {
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
          this.Versions = list.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  background: #343434;
  color: white;

  &-item {
    background: #343434;
    display: flex;
    width: 90vw;
  }
  td img {
    width: 9vh;
    max-width: 100px;
  }
}
</style>
