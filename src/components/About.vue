<template>
  <div class="main" id="About">
    <div class="container">
      <!-- PROJECT TITLE + PROJECT DESCRIPTION + SOCIAL NETWORK (small)-->
      <H1 class="display-1" id="title">Dream Museum</H1><br />
      <h4>
        Where is the frontier between the night and day and how do your dreams
        impact your life?
      </h4>
      <h4>
        Dream Museum is a collaborative VR experience where you can wander in a
        virtual art gallery generated from the dreams of creative minds.
      </h4>
      <h4>
        The goal of this museum is to collect 3D objects created from
        recollections of dreams, anyone is welcome to participate by submitting
        a 3d object that will be included in the museum.
      </h4>
      <youtube :video-id="id"></youtube>

      <Stats />
    </div>
  </div>
</template>

<script>
import Stats from "@/components/Stats";

export default {
  name: "About",
  components: {
    Stats
  },
  data: function() {
    return {
      id: "23hszqJRiME"
    };
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.container {
  width: 50vw;
  margin-top: 5vw;
}
.container {
  @media screen and (max-width: 768px) {
    width: unset !important;
  }
}
.display-1 {
  font-size: 13vw;
  line-height: 0.8;
}
</style>
