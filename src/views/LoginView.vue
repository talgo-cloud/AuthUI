<script setup lang="ts">
import GoogleLogin from '../components/GoogleLogin.vue'
import GitHubLogin from '../components/GitHubLogin.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="160"/>
      <div class="login">
        <div class="socials">
          <GoogleLogin />
          <GitHubLogin />
        </div>
        <p class="separat-or"><span>or</span></p>
        <input type="email" name="tlg_email" id="tlg_email" placeholder="Email address">
        <input type="password" name="tlg_password" id="tlg_password" placeholder="Password">
        <button type="submit">Sign In</button>
        <div class="remember">
          <label for="tlg_remember" class="chk-container">Remember me for 30 days
            <input type="checkbox" name="tlg_remember" id="tlg_remember">
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
    <div class="view-switch">Don't have an account? <RouterLink class="rlink" to="/register">Create an account.</RouterLink></div>
  </div>
</template>

<style>
.view-switch {
  text-align: center;
  margin-top: 4px;
}
.rlink {
  text-decoration: none;
  color: var(--purple);
  font-weight: 700;
}
.rlink:hover {
  color: var(--purple-light);
}
.logo {
  display: block;
  margin: 1em auto 0em auto;
}
.container {
  padding: 2em 4em;
  background-color: var(--white-soft);
  border-radius: 5px;
  max-width: 440px;
  filter: drop-shadow(3px 6px 6px var(--color-drop-shadow));
  margin: auto;
  margin-top: 6vh;
}
.login {
  display: flex;
  flex-direction: column;
}
.socials {
  margin: 3em 0em;
}
.socials > * {
  margin-bottom: 0.5em;
}
.separat-or {
  background-color: var(--white-soft);
  text-align: center;
  margin: 0px auto;
  margin-bottom: 3em;
  width: 90%;
  line-height: 0.1em;
  border-bottom: 2px solid var(--grey-light); 
}
.separat-or span {
  background: var(--white-soft); 
  padding:0 10px; 
}
.remember {
  margin: 1em;
  margin-bottom: 2em;
  position: relative;
}

/* custom checkmark code from https://www.w3schools.com/howto/howto_css_custom_checkbox.asp */

/* Customize the label (the container) */
.chk-container {
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.chk-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 2px;
  left: 0;
  height: 18px;
  width: 18px;
  border-radius: 3px;
  background-color: #ddd;
}

/* On mouse-over, add a grey background color */
.chk-container:hover input ~ .checkmark {
  background-color: #bbb;
}

/* When the checkbox is checked, add a blue background */
.chk-container input:checked ~ .checkmark {
  background-color: var(--purple);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.chk-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.chk-container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
