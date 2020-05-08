<template>
  <div class="main jumbotron-fluid">
    <div class="Darkform container" >
      <form @submit.prevent="UploadFile" class="row" style="display: block">
        <h2 class="display-4">Upload New Version</h2>
        <div class="form-group" v-if="errors.length">
          <h4 v-for="(error, x) in errors" :key="x" class="text-danger">
            {{ error }}
          </h4>
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            v-model="OS"
            placeholder="OS *"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            v-model="Version"
            placeholder="Version *"
          />
        </div>
        <div class="form-group">
          <p style="text-align: left">OS ICON *</p>
          <input type="file" class="form-control-file" @change="getLogoData"/>
        </div>
        <div class="form-group">
          <p style="text-align: left">File *</p>
          <input type="file" class="form-control-file" @change="getFileData"/>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" type="submit">
            UPLOAD
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "UploadNewVersion",
  components: {

  },
   data: function() {
    return {
      errors: [],
      File: null,
      Logo: null,
      OS: "",
      Version: ""
    };
  },
  methods: {
    getFileData(e){
      this.File = e.target.files[0]
    },
    getLogoData(e){
      this.Logo = e.target.files[0]
    },
    UploadFile(){
      if (!this.File || this.OS == "" || !this.Logo || this.FileName == "" || this.Version == "" )
        this.errors = ["One or several components are missing"]
      else {
        let formData = new FormData();
        formData.append('file', this.File);
        formData.append('logo', this.Logo);
        formData.append('OS', this.OS);
        formData.append('Version', this.Version);
        this.$axios.post(this.$APIURL + '/version', formData)
        .then(()=>{
          this.errors = [];
          this.File = null
          this.Logo = null
          this.OS = ""
          this.Version = ""
        })
        .catch((err)=>{
          console.log(err);
        })
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
	@media screen and ( max-width: 768px ) {
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
