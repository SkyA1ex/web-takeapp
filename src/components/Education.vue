<template>
  <div class="education">
    <h1>Education</h1>
    <ol>
      <li>Start plan new life right now</li>
      <li>Stop thinking</li>
      <li>Leave parents' home</li>
      <li>...</li>
      <li><a href="http://http://mmcs.sfedu.ru/" target="_blank">Go to University</a></li>
    </ol>
  </div>
</template>

<!-- ==================================================================== -->

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

<!-- ==================================================================== -->

<style scoped lang="stylus">

h1
  font-weight normal

li
  display inline-block
  margin 0 10px
  padding 5px
  font 16px OpenSansRegular
a
  color #42b983

</style>
