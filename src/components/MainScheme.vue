<template>
  <div>
    <About v-view="AboutScrollHandler" />
    <Download v-view="DownloadScrollHandler" />
    <MobileDownload class="" />
    <Submit v-view="SubmitScrollHandler" />
    <Contact v-view="ContactScrollHandler" />
  </div>
</template>

<script>
import About from "@/components/About";
import Download from "@/components/DownloadCarousel";
import Submit from "@/components/Submit";
import Contact from "@/components/Contact";
import MobileDownload from "@/components/MobileDownload";

export default {
  name: "Scheme",
  components: {
    About,
    Download,
    Submit,
    Contact,
    MobileDownload
  },
  methods: {
    AboutScrollHandler(e) {
      //if (e.type == "enter")
      this.$emit("UpdateScroll", 0, e.percentCenter);
    },
    DownloadScrollHandler(e) {
      //if (e.type == "enter")
      this.$emit("UpdateScroll", 1, e.percentCenter);
    },
    SubmitScrollHandler(e) {
      //if (e.type == "enter")
      this.$emit("UpdateScroll", 2, e.percentCenter);
    },
    ContactScrollHandler(e) {
      //if (e.type == "enter")
      this.$emit("UpdateScroll", 3, e.percentCenter);
    }
  }
};
</script>
