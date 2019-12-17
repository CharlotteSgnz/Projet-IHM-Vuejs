<template>
    <div class="utilisateur">
                
        <div class="card carduser shadow p-3 mb-5 bg-white rounded">                   
            <div class="card-body text-center">
                <p><img class="img-fluid rounded-circle avatarU shadow p-1 mb-5 bg-white rounded" :src="img"></p>
                <div class="infos">
                    <h4 class="card-title">{{name}}</h4>
                    <h5 class="card-subtitle mb-2 text-muted"> {{type}}</h5>
                    <p class="card-text"> {{description}}</p>
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
           type: String,
           description: String,
       }
    }
</script>

<style>


.card-title {
    color: darkblue;
    font-weight:bolder;
}

.carduser {
    width: 300px;
}

.avatarU {

    height: 160px;
    width: 160px;

}

.infos {

    margin-top: -45px;
}

</style>