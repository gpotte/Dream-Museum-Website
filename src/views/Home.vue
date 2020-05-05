<template>
  <div class="wrapper">
    <Navbar />
    <Scheme />
  </div>
</template>

<script>
// @ is an alias to /src
import Scheme from "@/components/MainScheme";
import Navbar from "@/components/Navbar";

export default {
  name: "Home",
  components: {
    Scheme,
    Navbar
  }
};
</script>
