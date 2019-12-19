<template>
    <Layout>
    <div class="fil-actu">
        <div v-for="event in data" v-bind:key="event.id">
            <EvenementMusical 
                v-bind:title="event.name"
                v-bind:date="event.date"
                v-bind:resume="event.description"
                v-bind:img="require(`@/assets/images/` + event.urlImage)"
                @click.native="goToEvent(event.id)"
                class="event-card-actu"
            />
        </div>
    </div>
    </Layout>
</template>

<script>
    import EvenementMusical from '@/components/home-page/EvenementMusical'
    
    export default {
        name: 'FilActu',
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
.event-card-actu {
    cursor: pointer;
}

</style>