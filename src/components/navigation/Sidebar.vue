<template>
    <div class="sidebar">
        <nav class="nav">
            <ul>
                <li class="menuItem">
                    <span><icon name="home" scale='1.5'></icon></span><span><a href='#' class="itMenu" @click="goToHome()">Accueil</a></span>
                    <div v-show="choice==='accueil'" class="overline"></div>
                </li>
                <li class="menuItem">
                    <icon name="search" scale='1.5'></icon><a href='#' class="itMenu" @click="goToSearch()">Recherche</a>
                    <div v-show="choice==='recherche'" class="overline"></div>
                </li>
                <li class="menuItem">
                    <icon name="email" scale='1.5'></icon><a href='#' class="itMenu" @click="goToMessages()">Messagerie</a>
                    <div v-show="choice==='messagerie'" class="overline"></div>
                </li>
                <li class="menuItem">
                    <icon name="people" scale='1.5'></icon><a href='#' class="itMenu" @click="goToSubscribers()">Abonnements</a>
                    <div v-show="choice==='abonnements'" class="overline"></div>
                </li>
                <li v-if="organisateur" class="menuItem">
                    <icon name="add_circle" scale='1.5'></icon><a href='#' class="itMenu" @click="goToCreateEvent()">Créer évènement</a>
                    <div v-show="choice==='createEvent'" class="overline"></div>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import 'vue-md-icons/src/icons'
    import Icon from 'vue-md-icons/src/components/Icon'

    export default {
       name: 'Sidebar' ,

       components: {
           Icon
       },
       data(){
           return {
            data: [],
            choice: 'accueil'
           }
           
       },
        computed: {
            organisateur () {
                if (this.data.accountType === 'Organisateur') {
                    return true
                } else {
                    return false;
                }
            }
        },
        created () {
            this.data = JSON.parse(localStorage.getItem('currentUser'))
        },
       methods: {
           goToHome(){
               this.$router.push("/home")
           },
           goToSearch(){
               this.$router.push("/search")
           },
           goToMessages(){
               this.$router.push("/messages")
           },
           goToSubscribers(){
               this.$router.push("/subscribers")
           },
           goToCreateEvent(){
               this.$router.push("/createEvent")
           }
           
       }
    }
</script>

<style scoped>

.sidebar {
    background: #c6d1d8;
}

.nav {
    height: 100vh;
    display: inline-block;
    width: 300px;
    font-weight: bold;
}

.nav ul {
    margin-top: 20px;
    padding: 16px;
    list-style: none;
}

.menuItem {
    position: relative;
    margin: 2em 0; 
    padding-left: 20px;
}

.itMenu {
    font-family: 'Rubik', sans-serif;
    color: #515558;
    opacity: 60%;
    text-decoration: none;
    text-decoration-color: none;
}

.itMenu:hover {
    opacity: 100%;
    text-decoration: none;
    color: #081627; 
}

.nav a:focus {
    opacity: 100%;
    text-decoration: none;
    text-decoration-color: #081627; 
}

.md-icon {
    color: #515558;
    padding-top: -8px;
    padding-right: 8px
}

.overline {
    background: #212224
}
</style>