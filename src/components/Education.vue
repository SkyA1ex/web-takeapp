<template>
  <div class="education">
    <router-link to="Main" class="top-bar">Back to main page</router-link>
    <div class="content">
      <h1>Education</h1>
      <ol>
        <li>Start plan new life right now</li>
        <li>Stop thinking</li>
        <li>Leave parents' home</li>
        <li>...</li>
        <li><a href="http://http://mmcs.sfedu.ru/" target="_blank">Go to University</a></li>
      </ol>
    </div>
  </div>
</template>

<!--======================================================================-->

<script>

// import firebaseApi from './firebase'

export default {
  name: 'education',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App.!'
    }
  }
  // ,
  // firebase: {
  //
  // }
}
</script>

<!--======================================================================-->

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
  width 300px
  margin 0 auto
  padding-top 100px
  padding-bottom 100px

  h1
    font 30px OpenSansRegular

  ol
    margin 0px
    padding 0px

  li
    font 22px OpenSansRegular


  a
    color #42b983

</style>
