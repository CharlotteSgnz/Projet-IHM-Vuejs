<template>
    <div class="recherche">
        <header>
            <h1>Recherche</h1>
        </header>
        <div><span class="RechercheU"><a class="linkUE" href='home#' @click="choice='U'">Utilisateurs</a></span><span class="RechercheE"><a class="linkUE" href='home#' @click="choice='E'">Événements</a></span></div>
        <div v-show="choice==='U'" class="underlineU"></div>
        <div v-show="choice==='E'" class="underlineE"></div>
        
        <!-- Recherche Utilisateur -->
        <div class="searchU" v-show="choice==='U'">
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

        <!-- Recherche Événement -->
        <div class="searchE" v-show="choice==='E'">
            <p>poussière</p>
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
                place:'',
                choice: 'U'
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

.recherche {
    margin-top: 5%;
    margin-left: 18%;
    width: 40%;
}

.form-row {
    margin-top: 20px;
    margin-bottom: 30px;
}

.search-input {
    width:50%;
    margin-right: 10px;
    margin-left: 20px;
    margin-top: 10px;
}

.filter-btn {
    margin-left: 10px;
}

.search-place {
    width: 10%;
}

.RechercheU {
    margin-left: 20px;
    font-size: 25px;
}

.linkUE {
    opacity: 60%;
    text-decoration: none;
    text-decoration-color: none;
    color: black;

}

.linkUE:hover {
    opacity: 100%;
    text-decoration: none;
    text-decoration-color: none;
    color: black;

}

.linkUE:focus {
    opacity: 100%;
    text-decoration: none;
    text-decoration-color: none;
    color: black;

}


.underlineU {
    width: 135px;
    height: 2px;
    background: darkblue;
    margin-top: 5px;
    margin-left: 15px;
}

.underlineE {
    width: 142px;
    height: 2px;
    background: darkblue;
    margin-top: 5px;
    margin-left: 182px;
}

.RechercheE {
    margin-left: 45px;
    font-size: 25px;
}



</style>