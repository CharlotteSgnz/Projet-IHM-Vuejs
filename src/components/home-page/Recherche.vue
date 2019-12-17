<template>
    <Layout class="home">
    <div class="recherche">
        <header>
            <h1>Recherche</h1>
        </header>
        <div class="searchSelector"><span class="RechercheU"><a class="linkUE" @click="choice='U'">Utilisateurs</a></span><span class="RechercheE"><a class="linkUE" @click="choice='E'">Événements</a></span></div>
        <div v-show="choice==='U'" class="underlineU"></div>
        <div v-show="choice==='E'" class="underlineE"></div>
        
        <!-- Recherche Utilisateur -->
        <div class="searchU" v-show="choice==='U'">
            <form  @submit.prevent="searchU()">
                <div class="form-row">
                    <input class="search-inputU form-control" 
                        type="text" 
                        v-model="requestU"
                        placeholder="Pseudo"
                        />
                    <button type="submit" class="search-buttonU btn btn-primary"> Rechercher </button> 
                </div> 
            </form>
        </div>

        <!-- Recherche Événement -->
        <div class="searchE" v-show="choice==='E'">
            <form  @submit.prevent="searchE()">
                <div class="form-row">
                    <span><input class="search-inputE form-control" 
                        type="text" 
                        v-model="requestNom"
                        placeholder="Quoi ?"
                        /></span>

                    <span><input class="search-inputE form-control" 
                        type="text" 
                        v-model="requestLieu"
                        placeholder="Où ?"
                        /></span> 
                       
                    <datepicker input-class="calendrier form-control bg-white" bootstrap-styling v-model="requestDate" placeholder="Quand ?"></datepicker>  
                    
                    <button type="submit" class="search-buttonE btn btn-primary"> Rechercher </button>
                </div> 
            </form>
        </div>
        <!-- Résultats Événements -->
        <div v-show="showResultE===true && choice==='E' && resultatE!=''">
            <h3>Résultat(s) trouvé(s) pour {{resultatE}}</h3>
            <div v-for="event in this.dataE" v-bind:key="event.id">
                <EvenementMusical v-bind:title="event.name"
                                  v-bind:date="event.date"
                                  v-bind:resume="event.description"
                                  v-bind:img="require(`@/assets/images/` + event.urlImage)"
                                  />
            </div>
        </div>

        <!-- Résultats Utilisateurs -->
        <div v-show="showResultU===true && choice==='U' && resultatU!=''">
            <h3>Résultat(s) trouvé(s) pour {{resultatU}}</h3>
            <div class="row">
            <div v-for="users in this.dataU" v-bind:key="users.id">
                    <div clas="col-xs-12 col-sm-6 col-md-4">
                        <Utilisateur v-bind:name="users.pseudo"
                             v-bind:type="users.accountType"
                             v-bind:img="require(`@/assets/images/` + users.urlAvatar)"
                             v-bind:description="users.description"
                        />
                    </div>
            </div>
            </div>
        </div>

    </div>
    </Layout>
</template>

<script>
    import 'vue-md-icons/src/icons'
    import EvenementMusical from '@/components/home-page/EvenementMusical'
    import Utilisateur from '@/components/home-page/Utilisateur'
    import Datepicker from 'vuejs-datepicker'

    export default {
        name: 'recherche',
        props: ['bootstrap-styling','input-class','calendar-class', ],
        components: {
            EvenementMusical,
            Utilisateur,
            Datepicker
        },
        data(){
            return{
                dataE: [],
                dataU: [],
                requestU: '',
                requestLieu: '',
                requestNom: '',
                requestDate: '',
                resultatU:'',
                resultatE:'',
                showResultU: false,
                showResultE: false,
                place:'',
                choice: 'U',

            }    
        },
        computed: {
            date: function(){
            let date = new Date();
            return date.toLocaleDateString();
            }
        },
        created(){
            this.dataE = JSON.parse(localStorage.getItem('eventsStorage'))
            this.dataU = JSON.parse(localStorage.getItem('usersStorage'))

        }, 
        methods: {
            searchE() {
                this.showResultE = true;
                this.resultatE = this.requestNom + " à " + this.requestLieu + " le " + this.requestDate.toLocaleDateString() + " : ";
            },
            searchU() {
                this.showResultU = true;
                this.resultatU = this.requestU;
            }
        }
    }
</script>

<style>

.recherche {
    margin-top: 2%;
    margin-left: 10%;
    width: 65%;
}

.searchSelector {
    margin-top: 2%;
}

.form-row {
    margin-top: 20px;
    margin-bottom: 30px;
}

.search-inputU {
    width: 50%;
    margin-left: 20px;
    margin-top: 20px;
}

.search-inputE {
    width: 87%;
    margin-right: 10px;
    margin-left: 20px;
    margin-top: 20px;
}

.search-buttonU {
    width: 25%;
    height: 38px;
    margin-top: 20px;
    margin-left: 20px;
    background: darkblue;
    border-color: darkblue;
}

.search-buttonU:hover {
    background: rgb(1, 1, 77);
    border-color: rgb(1, 1, 77);
}

.search-buttonE {
    margin-left: 20px;
    margin-top: 20px;
    height: 38px;
    width: 43%;
    background: darkblue;
    border-color: darkblue;
}

.search-buttonE:hover {
    background: rgb(1, 1, 77);
    border-color: rgb(1, 1, 77);
}

.calendrier {
    margin-left: 20px;
    margin-right: 10px;
    margin-top: 20px;
    background-color: white;
}

.filter-btn {
    margin-left: 20px;
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