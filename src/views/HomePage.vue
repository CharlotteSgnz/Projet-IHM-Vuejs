<template>
    <Layout class="home">
        <div v-show="choice==='accueil'"><FilActualite/></div>
        <div v-show="choice==='recherche'"><Recherche/></div>
        <div v-show="choice==='messagerie'"><Messagerie/></div>
        <div v-show="choice==='abonnements'"><Abonnements/></div>
    </Layout>
</template>

<script>
    import FilActualite from '@/components/home-page/FilActualite'
    import Abonnements from '@/components/home-page/Abonnements'
    import Messagerie from '@/components/home-page/Messagerie'
    import Recherche from '@/components/home-page/Recherche'

    export default {
        name: 'home',

        components: {
            FilActualite,
            Abonnements,
            Messagerie,
            Recherche
        },

        data() {
            return {
                choice: 'accueil'
            }
        },

        created(){
            const events = [
                {
                    "id": 1,
                    "name": "Main Square 2020",
                    "date": "7 juillet 2020",
                    "description": "voici la description du Main Square 2020",
                    "urlImage": "MainSquare2020.jpeg"
                },
                {
                    "id": 2,
                    "name": "Tomorrowland Winter 2020",
                    "date": "14 mars 2020",
                    "description": "voici la description de Tomorrowland Winter 2020",
                    "urlImage": "TomorrowlandWinter2020.jpg"
                }
            ]
            localStorage.setItem('eventsStorage', JSON.stringify(events))
        }
    }
    
</script>

<style>

</style>