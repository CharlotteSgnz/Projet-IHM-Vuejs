<template>
  <Layout>
    <div class="container">
      <div class="header">
        <!--{{title}}-->
      </div>
    </div>
  </Layout>
</template>

<script>
  export default {
    data(){
      return{
        data: '',
        id: ''
      }
    },
    created(){
      this.id = this.$route.params.id
      this.data = JSON.parse(localStorage.getItem('eventsStorage'))
    },
  }
</script>

<style>

.container {
  margin-top: 20px;
}

</style>