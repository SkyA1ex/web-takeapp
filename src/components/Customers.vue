<template>
  <div class="customers">
    <router-link to="Main" class="top-bar">Back to main page</router-link>
    <div class="content">
      <h1 class="title">{{title}}</h1>
      <ol class="customers">
        <li v-for="customer of customers" class="customer-item">{{customer['.value']}}</li>
      </ol>
    </div>
  </div>
</template>

<!-- ==================================================================== -->

<script>
import {customersRef} from '../firebase'

export default {
  name: 'customers',
  data: () => ({
    customers: [],
    title: 'Here is a complete list of our customers:'
  }),
  firebase: {
    customers: {
      source: customersRef,
      cancelCallback (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- ==================================================================== -->

<style scoped lang="stylus">

.top-bar
  display block
  padding 15px
  font 20px OpenSansRegular
  background rgba(1, 1, 1, 0.09)
  color #42B983

  &:hover
    background rgba(1, 1, 1, 0.13)

.content
  display block
  text-align center
  padding-top 100px
  padding-bottom 100px

  .title
    height 100px
    font 30px OpenSansRegular

  .customers
    width 200px
    margin-left auto
    margin-right auto

    .customer-item
      padding 15px
      font 22px OpenSansMedium
      text-align left
      color black

</style>
