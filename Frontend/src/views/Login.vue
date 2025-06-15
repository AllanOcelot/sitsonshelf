<template>
  <main class="loginPage">
    <h1>Login page</h1>
    <p>Welcome to Sits On Shelf, your self hosted physical media library</p>
    <form action="">
      <div class="input-container">
        <label for="username">Username:</label>
        <input type="text" id="username" />
      </div>
      <div class="input-container">
        <label for="password">Password:</label>
        <input type="text" id="password" />
      </div>
      <button>
        Login
      </button>
    </form>

    <div class="account-links">
      <a href="/create">Create Account</a>
      <a href="/reset">Forgotten Password</a>
    </div>
  </main>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
  .loginPage {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    height: 100vh;
  }
</style>

