<template>
  <div class="customers_component">
    <div class="top_bar">
      <router-link to="Main" class="back_to_main">Back to main page</router-link>
      <div class="button_login"
           v-bind:class="{button_login__hidden: userSignedIn}"
           v-on:click="showAuthPopup">Login</div>
    </div>
    <auth-popup v-bind:is-shown="isAuthPopupShown"
                v-on:close-pop="closeAuthPopup"/>
    <div class="content">
      <h1 class="title">{{title}}</h1>
      <ol class="customers">
        <li v-for="customer of customers" class="customer_item">{{customer['.value']}}</li>
      </ol>
    </div>
    <input class="add_customer_footer"
           v-on:keyup.enter="addCustomer"
           placeholder="Add new customer"
           v-model="newCustomerName"
           v-bind:class="{add_customer_footer__hidden: !userSignedIn}"/>
  </div>
</template>

<!-- ==================================================================== -->

<script>
import AuthPopup from './AuthPopup.vue'
import {customersRef} from '../firebase'

export default {
  name: 'customers',
  data: () => ({
    isAuthPopupShown: false,
    userSignedIn: false,
    newCustomerName: '',
    customers: [],
    title: 'Here is a complete list of our customers:'
  }),
  methods: {
    addCustomer: function () {
      if (this.newCustomerName.length > 0) {
        this.$firebaseRefs.customers.push({
          '.value': this.newCustomerName
        })
        this.newCustomerName = ''
      }
    },
    showAuthPopup: function () {
      this.isAuthPopupShown = true
    },
    closeAuthPopup: function () {
      this.isAuthPopupShown = false
    }
  },
  firebase: {
    customers: {
      source: customersRef,
      cancelCallback (err) {
        console.log(err)
      }
    }
  },
  components: {
    AuthPopup
  }
}
</script>

<!-- ==================================================================== -->

<style scoped lang="stylus">
.customers_component
  color #484848

.top_bar
  display block
  position fixed
  width 100%
  top 0px
  padding-top 15px
  padding-bottom 15px
  background black
  z-index 3

  .back_to_main
    font 20px OpenSansRegular
    color #42B983
    text-decoration none
    padding-left 15px
    padding-right 15px
    color white

    &:hover
      cursor pointer
      color #42B983

  .button_login
    font 20px OpenSansRegular
    float right
    padding-left 15px
    padding-right 15px
    color white

    &:hover
      cursor pointer
      color #42B983

    &__hidden
      display none

.content
  display block
  text-align center
  margin-top 57px
  margin-bottom 57px
  padding-top 25px
  padding-bottom 25px

  &__hidden
    display none

  .title
    font 30px OpenSansRegular

  .customers
    width 300px
    margin-left auto
    margin-right auto

    .customer_item
      padding 15px
      font 22px OpenSansMedium
      text-align left

      &:hover
        background rgba(0, 0, 0, 0.05)

.add_customer_footer
  background black
  width 100%
  color white
  font 20px OpenSansLight
  padding-top 15px
  padding-bottom 15px
  padding-left 100px
  padding-right 100px
  position fixed
  bottom 0px
  border 0px
  outline none

  &__hidden
    display none


</style>
