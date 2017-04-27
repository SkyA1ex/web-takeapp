<template>
  <div class="customers_component">
    <auth-popup v-bind:is-shown="isAuthPopupShown"
                v-on:close-pop="closeAuthPopup"/>
    <div class="top_bar">
      <router-link to="Main" class="back_to_main">Back to main page</router-link>
      <div class="button_login"
           v-bind:class="{button_login__hidden: userSignedIn}"
           v-on:click="showAuthPopup">Login</div>
      <div class="user_email"
           v-bind:class="{user_email__hidden: !userSignedIn}"
           v-on:click="logout">
           {{userEmail}}
           <span class="hint">Sing Out</span>
         </div>
    </div>
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
import {auth, customersRef} from '../firebase'

export default {
  name: 'customers',
  data: () => ({
    isAuthPopupShown: false,
    userSignedIn: false,
    userEmail: '',
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
    },
    authStateChanged: function (user) {
      if (user) {
        console.log('user is signed in:' + user.email)
        this.isAuthPopupShown = false
        this.userSignedIn = true
        this.userEmail = user.email
      } else {
        console.log('user is not signed in')
        this.userSignedIn = false
        this.userEmail = ''
      }
    },
    logout: function () {
      auth.signOut().then(function () {
        console.log('Signed Out')
      }, function (error) {
        console.log(error)
      })
    }
  },
  mounted: function () {
    auth.onAuthStateChanged(this.authStateChanged)
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

  .user_email
    font 20px OpenSansRegular
    float right
    padding-left 15px
    padding-right 15px
    color white

    &__hidden
      display none

    &:hover
      cursor pointer
      color #FFFFFFD0

      .hint
        visibility visible

    .hint
        visibility hidden
        width 120px
        background-color #000000A0
        color white
        font 14px OpenSansRegular
        text-align center
        margin-top 20px
        padding: 5px 0
        border-radius 6px
        position: absolute

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
    margin-bottom 40px

  .customers
    width 300px
    margin-left auto
    margin-right auto

    .customer_item
      padding 12px 20px
      font 22px OpenSansMedium
      text-align left

      &:hover
        color #42b983

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
