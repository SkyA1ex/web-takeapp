<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<!--======================================================================-->

<script>
export default {
  name: 'app'
}
</script>

<!--======================================================================-->

<style lang="stylus">

@font-face
  font-family OpenSansLight
  font-style normal
  src url(assets/fonts/OpenSans-Light.ttf)

@font-face
  font-family OpenSansRegular
  font-style normal
  src url(assets/fonts/OpenSans-Regular.ttf)

@font-face
  font-family OpenSansSemibold
  font-style normal
  src url(assets/fonts/OpenSans-Semibold.ttf)

@font-face
  font-family OpenSansBold
  font-style normal
  src url(assets/fonts/OpenSans-Bold.ttf)

@font-face
  font-family OpenSansExtraBold
  font-style normal
  src url(assets/fonts/OpenSans-ExtraBold.ttf)

@font-face
  font-family OpenSansItalic
  font-style normal
  src url(assets/fonts/OpenSans-Italic.ttf)

@font-face
  font-family FontAwesome
  src url('assets/fonts/fontawesome-webfont.eot?v=4.7.0')
  src url('assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype')
  font-weight normal
  font-style normal

body
  margin 0px
  padding 0px

</style>
