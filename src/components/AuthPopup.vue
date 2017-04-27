<template>
  <div class="auth_popup_component"
       v-bind:class="{auth_popup_component__hidden: !isShown}">
    <div class="overlay"
         v-on:click="close"></div>
    <div class="content">
      <input class="input_form" placeholder="Email Address"
             v-bind:class="{input_form__not_valid: !emailInputValid}"
             v-model="email"/>
      <input class="input_form" placeholder="Password"
             type="password"
             v-bind:class="{input_form__not_valid: !passInputValid}"
             v-model="password"/>
      <div class="error_message">{{errorMessage}}</div>
      <button class="button_auth"
              v-bind:class="{button_auth__valid: allInputValid}"
              v-on:click="signIn">Login/SignUp</button>
    </div>
  </div>
</template>

<!-- ==================================================================== -->

<script>
import {auth} from '../firebase'

export default {
  name: 'AuthPopup',
  props: [
    'isShown'
  ],
  data: () => ({
    email: '',
    errorMessage: '',
    password: ''
  }),
  methods: {
    close: function () {
      this.$emit('close-pop')
    },
    signIn: function () {
      auth.createUserWithEmailAndPassword(this.email, this.password)
          .then(this.onSignedIn)
          .catch(this.onAuthError)
    },
    login: function () {
      auth.signInWithEmailAndPassword(this.email, this.password)
          .then(this.onSignedIn)
          .catch(this.onAuthError)
    },
    onSignedIn: function () {
      this.email = ''
      this.password = ''
      this.errorMessage = ''
    },
    onAuthError: function (error) {
      if (error.code === 'auth/email-already-in-use') {
        this.login()
        return
      }
      console.log(error)
      this.errorMessage = error.message
    }
  },
  computed: {
    emailInputValid: function () {
      return /^.+@.+\..+$/.test(this.email)
    },
    passInputValid: function () {
      return this.password.length >= 6
    },
    allInputValid: function () {
      return this.emailInputValid && this.passInputValid
    }
  }
}
</script>

<!-- ==================================================================== -->

<style scoped lang="stylus">

.auth_popup_component
  display block
  position fixed
  z-index 1
  left 0
  top 0
  width 100%
  height 100%
  overflow auto

  &__hidden
    display none

  .overlay
    width 100%
    height 100%
    z-index 1
    background-color rgb(0,0,0) /* Fallback color */
    background-color rgba(0,0,0,0.4) /* Black w/ opacity */

  .content
    color black
    background-color #fefefe
    z-index 2
    position fixed
    top 50%
    left 50%
    transform translate(-50%, -50%)
    padding 15px
    border-radius 5px
    padding-bottom 80px
    width 50%
    box-shadow 0 0 50px rgba(1, 1, 1, 0.3)
    color rgba(0, 0, 0, 0.75)

    .error_message
      min-height 20px
      color red
      font 12px OpenSansLight
      width 200px
      margin 0 auto
      margin-top 15px


    .input_form
      display block
      color black
      font 16px OpenSansLight
      border 0px
      outline none
      border 1px solid rgba(0, 0, 0, 0.2)
      border-radius 3px
      padding-top 6px
      padding-bottom 6px
      padding-left 8px
      padding-right 8px
      margin-left auto
      margin-right auto
      margin-top 20px
      width 250px

      &:focus
        border 1px solid rgba(0, 0, 0, 0.2)
        box-shadow 0 0 5px rgba(1, 1, 1, 0.15)
        color #42b983

      &__not_valid
        color red

        &:focus
          color red

    .button_auth
        background rgba(1,1,1,0.3)
        color white
        font 15px OpenSansRegular
        position fixed
        bottom 15px
        left 50%
        transform translate(-50%,0%)
        padding-left 15px
        padding-right 15px
        padding-top 10px
        padding-bottom 10px
        margin 0 auto
        border-radius 2px
        border 0px solid rgba(0, 0, 0, 1)

        &__valid
          background #42b983

          &:hover
            box-shadow 0 0 5px rgba(0, 0, 0, 0.2)
            cursor pointer

</style>
