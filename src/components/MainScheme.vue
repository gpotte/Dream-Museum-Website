<template>
  <div>
    <About />
    <Download />
    <Submit />
    <Contact />
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
  }
};
</script>
