<template>
  <div>
    <About v-view="AboutScrollHandler" />
    <Download v-view="DownloadScrollHandler" />
    <Submit v-view="SubmitScrollHandler" />
    <Contact v-view="ContactScrollHandler" />
  </div>
</template>

<script>
import About from "@/components/About";
import Download from "@/components/DownloadCarousel";
import Submit from "@/components/Submit";
import Contact from "@/components/Contact";

export default {
  name: "Scheme",
  components: {
    About,
    Download,
    Submit,
    Contact
  },
  methods: {
    AboutScrollHandler(e) {
      if (e.type == "enter") this.$emit("UpdateScroll", "About", e.type);
    },
    DownloadScrollHandler(e) {
      if (e.type == "enter") this.$emit("UpdateScroll", "Download", e.type);
    },
    SubmitScrollHandler(e) {
      if (e.type == "enter") this.$emit("UpdateScroll", "Submit", e.type);
    },
    ContactScrollHandler(e) {
      if (e.type == "enter") this.$emit("UpdateScroll", "Contact", e.type);
    }
  }
};
</script>
