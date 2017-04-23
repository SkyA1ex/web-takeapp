<template>
  <div class="customers">
    <router-link to="Main" class="top-bar">Back to main page</router-link>
    <div class="content">
      <h1>{{title}}</h1>
      </ol>
    </div>
  </div>
</template>

<!-- ==================================================================== -->

<script>
export default {
  name: 'customers',
  data () {
    return {
      title: 'Here is a complete list of our customers:'
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
  margin 0 auto
  text-align: center;
  vertical-align: middle;
  line-height: 90px;
  padding-top 100px
  padding-bottom 100px

  h1
    font 30px OpenSansRegular

</style>
