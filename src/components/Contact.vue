<template>
  <div class="main" id="Contact" style="display: block">
    <h4>
      This project is actively looking for a musician who would like to create
      the soundtrack of the museum to make it more immersive.
    </h4>
    <div style="display: flex">
      <a href="https://github.com/gpotte"><img src="@/assets/Github.svg"/></a>
      <a href="mailto:stuvpic@gmail.com"><img src="@/assets/Mail.svg"/></a>
      <a id="stuv" href="https://www.stuvpic.me"
        ><img src="@/assets/Stuv.svg"
      /></a>
      <a href="https://instagram.com/cobblestuv"
        ><img src="@/assets/Insta.svg"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
.main {
  padding-top: 25vh;
}
img {
  width: 10vw;
  -webkit-filter: invert(100%); /* safari 6.0 - 9.0 */
  filter: invert(100%);
}

#stuv {
  margin-top: 1.5vh;
}
</style>
