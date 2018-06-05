<template>
  <div id="app">
    <router-view/>
    <alert-tip></alert-tip>
    <loading></loading>   
  </div>
</template>

<script>
import loading from './components/common/loading'
import alertTip from './components/common/alertTip'

export default {
  name: 'App',
  components:{
     loading,
     alertTip
  }
}
</script>

<style>
@import './style/common.scss';

</style>
