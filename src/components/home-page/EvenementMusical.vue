<template>
    <div class="musical-event">
        <div class="card mb-3">
            <img :src="img" class="card-img-top" alt="couverture de l'evenement">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ resume }}</p>
                <p class="card-text"><small class="text-muted">Le {{ date }}</small></p>
            </div>
        </div>   
    </div>
</template>

<script>
    export default {
        props: {
            img: String,
            title: String,
            date: String,
            resume: String
        },

        methods: {
        
        }
    }
</script>

<style>
    .card {
        width: 100%;
        margin-top: 32px; 
        margin-bottom: 32px;
    }
</style>