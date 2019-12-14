<template>
    <div class="utilisateur">
                <div class="card carduser">
                    <div class="card-body text-center">
                        <p><img class="avatar img-fluid" :src="img"></p>
                        <h4 class="card-title">{{name}}</h4>
                        <h5 class="card-subtitle mb-2 text-muted"> {{type}}</h5>
                        <p class="card-text"> Salut j'aime trop la musique lol</p>
                    </div>
                </div>
    </div>
</template>

<script>
    export default {
       props: {
           img: String,
           name: String,
           type: String
       }
    }
</script>

<style>

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.card-title {
    color: darkblue;
}

.carduser {
    width: 300px;
    height: 250px;
}

</style>