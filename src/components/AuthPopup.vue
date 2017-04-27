<template>
  <div class="auth_popup_component"
       v-bind:class="{auth_popup_component__hidden: !isShown}">
    <div class="overlay"
         v-on:click="close"></div>
    <div class="content">
      <input class="input_form" placeholder="Email Address" v-model="email"/>
      <input class="input_form" placeholder="Password" v-model="password"/>
      <button class="button_auth"
              v-bind:class="{button_auth__valid: allInputValid}"
              v-on:click="auth">Login/SignUp</button>
    </div>
  </div>
</template>

<!-- ==================================================================== -->

<script>

export default {
  name: 'AuthPopup',
  props: [
    'isShown'
  ],
  data: () => ({
    email: 'skyalexx@gmail.com',
    password: '',
    allInputValid: true
  }),
  methods: {
    close: function () {
      this.$emit('close-pop')
    },
    auth: function () {
      console.log('auth')
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
    padding 20px
    border-radius 5px
    padding-bottom 100px
    width 50%
    box-shadow 0 0 50px rgba(1, 1, 1, 0.3)
    color rgba(0, 0, 0, 0.75)

</style>
