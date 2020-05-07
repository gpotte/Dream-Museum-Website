<template>
  <div class="wrapper main" style="display:block">
    <h1>Login</h1>
    <form @submit.prevent="LoginForm">
      <p>login</p>
      <input type="text" v-model="login" /><br />
      <p>password</p>
      <input type="password" v-model="password" /><br />
      <input
        type="submit"
        class="btn"
        :class="{ 'btn-danger': error, 'btn-light': !error }"
      />
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  components: {},
  data: function() {
    return {
      error: false,
      login: "",
      password: ""
    };
  },
  methods: {
    //BUILD LOGIN API + SET COOKIE
    LoginForm() {}
  }
};
</script>
