<template>
  <div class="order_plan_popup"
       v-bind:class="{order_plan_popup__opened: isShown}">
    <div class="overlay"
         v-on:click="close"></div>
    <div class="content">
      <div class="title">Buy plan</div>
      <div class="description">Please enter following information and we'll contact you soon:</div>
      <input class="input_form" placeholder="Your name" v-model="name"
             v-bind:class="{input_form__not_valid: !nameInputValid}"/>
      <input class="input_form" placeholder="Email" v-model="email"
             v-bind:class="{input_form__not_valid: !emailInputValid}"/>
      <button class="submit"
              v-bind:class="{submit__valid: allInputValid}"
              v-on:click="submit">Submit</button>
    </div>
  </div>
  </div>
</template>

<!--======================================================================-->

<script>

export default {
  name: 'OrderPlanPopup',
  props: [
    'isShown'
  ],
  data () {
    return {
      email: '',
      name: '',
      title: 'title'
    }
  },
  computed: {
    nameInputValid: function () {
      return this.name.length > 0
    },
    emailInputValid: function () {
      return /^.+@.+\..+$/.test(this.email)
    },
    allInputValid: function () {
      return this.nameInputValid && this.emailInputValid
    }
  },
  methods: {
    submit: function () {
      if (this.allInputValid) {
        this.close()
      }
    },
    close: function () {
      this.$emit('close-pop')
    }
  }
}
</script>

<!--======================================================================-->

<style scoped lang="stylus">

.order_plan_popup
  display none
  position fixed
  z-index 1
  left 0
  top 0
  width 100%
  height 100%
  overflow auto

  &__opened
    display block

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

    .title
      font 30px OpenSansRegular

    .description
      font 20px OpenSansLight
      margin-top 20px

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


    .submit
      background rgba(1,1,1,0.3)
      color white
      font 15px OpenSansBold
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
