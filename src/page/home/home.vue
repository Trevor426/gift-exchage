<template>
  <div class="home">
    <privilege-header></privilege-header>
    <privilege-list></privilege-list>
    <rule></rule>
  </div>
</template>

<script>
import privilegeHeader from './children/privilegeHeader'
import privilegeList from './children/privilegeList'
import validate from '../../components/validate/validate'
import rule from './children/rule'

export default {
  data () {
    return {

    }
  },
  components:{
    privilegeHeader,
    privilegeList,
    validate,
    rule
  },
  methods:{
   
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>

</style>