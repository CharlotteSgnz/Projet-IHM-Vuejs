<template>
    <Layout class="home">
    <div class="recherche">
        <header>
            <h1>Rechercher</h1>
        </header>
        <div class="search-container">
            <form  @submit.prevent="search()">
                <div class="form-row">
                    <input class="search-input form-control" 
                        type="text" 
                        v-model="request" 
                        />
                    <button type="submit" 
                        class="search-btn btn btn-primary">
                         <icon name="search" scale='1.5'></icon>
                    </button> 
                </div> 
            </form>
        </div>
        <div v-show="showResult===true">
            <h3>Résultat trouvé pour {{resultat}}</h3>
            <div v-for="event in this.data" v-bind:key="event.id">
                <EvenementMusical v-bind:title="event.name"
                                  v-bind:date="event.date"
                                  v-bind:resume="event.description"
                                  v-bind:img="require(`@/assets/images/` + event.urlImage)"
                                  />
            </div>
        </div>
    </div>
    </Layout>
</template>

<script>
    import 'vue-md-icons/src/icons'
    import Icon from 'vue-md-icons/src/components/Icon'
    import EvenementMusical from '@/components/home-page/EvenementMusical'
    export default {
        name: 'recherche',
        components: {
            Icon,
            EvenementMusical
        },
        data(){
            return{
                data: [],
                request: '',
                resultat:'',
                showResult: false,
                place:''
            }    
        },
        created(){
            this.data = JSON.parse(localStorage.getItem('eventsStorage'))
        }, 
        methods: {
            search() {
                this.showResult = true;
                this.resultat = this.request
            },
        }
    }
</script>

<style>


.form-row {
    margin-top: 20px;
    margin-bottom: 30px;
}

.search-input {
    width:50%;
    margin-right: 10px;
}

.filter-btn {
    margin-left: 10px;
}

.search-place {
    width: 10%;
}



</style>