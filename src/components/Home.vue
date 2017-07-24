<template>
  <div class="container">
    <div class="row marketing">
      <h2>Welcome</h2>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
      <p>Welcome to Home IT</p>
      <p>To give it a try:</p>
      <ol>
        <li>Signup using your email address, this will send through an activation code.</li>
        <li>Once you get the activation code enter it with your email address.</li>
        <li>Sign in with your credentials.</li>
        <li>You should now be able to navigate to the dashboard and see your JWT token decoded</li>
      </ol>
      <p>Your Funds: {{ funds | currency }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loggedIn: false
      }
    },
    computed: {
      funds: function () {
        return this.$store.getters.funds
      }
    },
    created: function () {
      this.$cognitoAuth.isAuthenticated((err, loggedIn) => {
        console.log('Home login check', err, loggedIn)
        if (err) {
          console.err("Home: Couldn't get the session:", err, err.stack)
          return
        }
        this.loggedIn = loggedIn
      })
    }
  }
</script>
