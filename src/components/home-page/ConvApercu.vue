<template>

<div class="card mb-3 shadow p-3 mb-5 bg-white rounded" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img class="img-fluid rounded-circle avatarConv shadow p-1 mb-5 bg-white rounded" :src="img"/>
    </div>
    <div class="col-md-8 lebody">
      <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        <p class="card-text">Ceci est l'aperçu' d'une discussion très intéressante.</p>
        <p class="card-text"><small class="text-muted lastMsg">Il y a 5 min</small><button class="btn btn-dark btn-sm parler">Parler à {{name}}</button></p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  props: {
    img: String,
    name: String,
  }
};
</script>

<style>

    .card-horizontal {
        display: flex;
        flex: 1 1 auto;
        margin-left: 40px;
        margin-top: 10px;
    }

    .avatarConv {
        margin-top: 18px;
        margin-left: 15px;
        height: 150px;
        width: 150px;

    }

    .ouvrir {
        margin-left: 190px;
        background-color: #112e52;    
    }

    .convApercu {   
        height: 80%;
        width: 50%
    }

    .convApercu:hover {
        background-color: rgb(250, 250, 250);
    }

    .lebody {
        margin-top: 20px;
    }

    .lefooter {
      height: 20%;
    }

    .parler {
      float: right;
      margin-bottom: 15px;
    }



</style>