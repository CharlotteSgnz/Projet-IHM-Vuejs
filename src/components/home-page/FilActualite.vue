<template>
    <div class="fil-actu">
        <h1>Fil d'actualités</h1>
        <div v-for="event in eventData" v-bind:key="event.id">
                <EvenementMusical v-bind:title="event.name"
                                  v-bind:date="event.date"
                                  v-bind:resume="event.description"
                                  v-bind:img="event.urlImage"
                                  />
            </div>
    </div>
</template>

<script>
    import EvenementMusical from '@/components/home-page/EvenementMusical'
    import musicalEvent from '@/data/musicalEvent'
    export default {
        name: 'fil-actu',
        components: {
            EvenementMusical,
        },
         data(){
            return{
                eventData: musicalEvent,
            }    
        },
        
    }
</script>

<style>

.fil-actu {
    margin-top: 5%;
    margin-left: 15%;
    width: 40%;
}

</style>