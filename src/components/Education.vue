<template>
  <div class="education">
    <div class="top_bar">
      <router-link to="/" class="back_to_main">Back to main page</router-link>
    </div>
    <div class="content">
      <h1>Education</h1>
      <ol>
        <li>Start plan new life right now</li>
        <li>Stop thinking</li>
        <li>Leave parents' home</li>
        <li>...</li>
        <li><a href="http://mmcs.sfedu.ru/" target="_blank">Go to University</a></li>
      </ol>
    </div>
  </div>
</template>

<!--======================================================================-->

<script>

export default {
  name: 'education',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App.!'
    }
  }
}
</script>

<!--======================================================================-->

<style scoped lang="stylus">

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
    cursor pointer

</style>
