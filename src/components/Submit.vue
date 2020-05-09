<template>
  <div class="main jumbotron-fluid" id="Submit">
    <div class="Darkform container">
      <form @submit.prevent="SubmitDream" class="row" style="display: block">
        <h2 class="display-4">Submit A Dream</h2>
        <div class="form-group" v-if="errors.length">
          <h4 v-for="(error, x) in errors" :key="x" class="text-danger">
            {{ error }}
          </h4>
        </div>
        <h4 v-if="success" class="text-success">
          Your dream has been submitted
        </h4>
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
          <input
            type="file"
            accept=".obj"
            class="form-control-file"
            @change="getFileData"
          />
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
            Submit Your Dream
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
      success: false,
      errors: [],
      DreamFile: null,
      email: "",
      name: "",
      DreamName: "",
      story: "",
      informed: true,
      Newsletter: false
    };
  },
  methods: {
    getFileData(e) {
      this.DreamFile = e.target.files[0];
    },
    SubmitDream() {
      if (
        !this.DreamFile ||
        this.email == "" ||
        !this.name ||
        this.DreamName == ""
      )
        this.errors = ["One or several components are missing"];
      else {
        let formData = new FormData();
        formData.append("file", this.DreamFile);
        formData.append("email", this.email);
        formData.append("name", this.name);
        formData.append("dreamName", this.DreamName);
        formData.append("story", this.story);
        formData.append("informed", this.informed);
        formData.append("newsletter", this.Newsletter);
        this.$axios
          .post(this.$APIURL + "/dream", formData)
          .then(() => {
            this.errors = [];
            this.success = true;
            this.email = "";
            this.name = "";
            this.DreamName = "";
            this.story = "";
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style scoped>
.main {
  overflow: auto;
}

.Darkform {
  position: relative;
}

form {
  max-width: 55rem;
  background-color: #232323;
  padding: 40px;
  border-radius: 4px;
  margin: 2rem auto auto auto;
  color: #fff;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
}
form {
  @media screen and (max-width: 768px) {
    max-width: unset !important;
  }
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
