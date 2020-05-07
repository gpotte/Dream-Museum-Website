<template>
  <div class="main jumbotron-fluid" id="Submit">
    <div class="Darkform">
      <form @submit.prevent="SubmitDream">
        <h2 class="display-4">Submit A Dream</h2>
        <div class="form-group" v-if="errors.length">
          <h4 v-for="(error, x) in errors" :key="x" class="text-danger">
            {{ error }}
          </h4>
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            v-model="email"
            placeholder="Email *"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            v-model="name"
            placeholder="Name *"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            v-model="DreamName"
            placeholder="Name of your Dream *"
          />
        </div>
        <div class="form-group">
          <p style="text-align: left">3d object *</p>
          <input type="file" accept=".obj" class="form-control-file" />
        </div>
        <div class="form-group">
          <textarea
            v-model="story"
            class="form-control"
            placeholder="Share the story of your dream (optionnal)"
          ></textarea>
        </div>
        <div class="form-group">
          <input class="checkbox" type="checkbox" v-model="informed" />
          <p>Would you like to be informed of the usage of your object ?</p>
        </div>
        <div class="form-group">
          <input class="checkbox" type="checkbox" v-model="Newsletter" />
          <p>
            Would you like to be informed of the new releases and other
            projects<br />
            (one release every 15th of the month) ?
          </p>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Submit",
  data: function() {
    return {
      errors: [],
      email: "",
      name: "",
      DreamName: "",
      story: "",
      informed: true,
      Newsletter: false
    };
  }
};
</script>

<style scoped>
.Darkform {
  position: relative;
}

.Darkform form {
  height: 90vh;
  width: 50vw;
  background-color: #232323;
  padding: 40px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
}

.form-control {
  background: none;
  border: none;
  border-bottom: 1px solid #434a52;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: inherit;
}

.Darkform form .btn-primary {
  background: #434a52;
  border: none;
  border-radius: 4px;
  padding: 11px;
  box-shadow: none;
  margin-top: 26px;
  text-shadow: none;
  outline: none;
}

.Darkform form .btn-primary:hover,
.login-dark form .btn-primary:active {
  background: #214a80;
  outline: none;
}

.login-dark form .btn-primary:active {
  transform: translateY(1px);
}

.checkbox {
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  margin-top: 10px;
  float: left;
}
</style>
