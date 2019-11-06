<template>
    <div class="musical-event">
        <div class="card">
            <img :src="img">
            <div class="card-body">
                <h1>{{title}}</h1>
                <p>{{date}}</p>
                <p>{{resume}}</p>
            </div>
            <div class="card-footer">
            </div>
        </div>
    
    </div>
</template>

<script>

    export default {
        data(){
            return {
            }    
        },
        props: {
            title: String,
            date: String,
            resume: String,
            img: String

        }
    }
</script>

<style>

.card {
    height: 380px;
    width: 100%;
    margin-top: 5%; 
    margin-bottom: 30px;
    box-shadow: 0 0.5px 3px rgb(49, 49, 49);

}

.card-footer {
    height: 20px;
    background: rgb(0, 0, 0, .125);
}

img {
    height: 150px;
}



</style>