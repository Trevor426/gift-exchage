<template>
  <div>
    <div>{{loadingText}}</div>
    <button @click="toparent">childcount</button>
  </div>
</template>
<script>
export default {
  name:'loading',
  data(){
    return{
      childval:'child'
    }
  },
  props:['loadingText'],
  methods:{
    toparent(){
      this.$emit("getemit",this.childval);
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
