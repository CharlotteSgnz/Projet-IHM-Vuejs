<template>
    <Layout>
    <div class="fil-actu">
        <h1>Fil d'actualités</h1>
        <div v-for="event in data" v-bind:key="event.id">
            <EvenementMusical 
                v-bind:title="event.name"
                v-bind:date="event.date"
                v-bind:resume="event.description"
                v-bind:img="require(`@/assets/images/` + event.urlImage)"
                @click.native="goToEvent(event.id)"
            />
        </div>
    </div>
    </Layout>
</template>

<script>
    import EvenementMusical from '@/components/home-page/EvenementMusical'
    
    export default {
        name: 'fil-actu',
        components: {
            EvenementMusical,
        },
         data(){
            return{
                data: []
            }    
        },
        created(){
            this.data = JSON.parse(localStorage.getItem('eventsStorage'))
        },

        methods: {
            goToEvent(id) {
                this.$router.push({ name: 'event', params: { id } })
            }
        }
    }
</script>

<style>


</style>