<template>
    <nav class="nav">
        <ul>
            <li>
                <span><icon name="home" scale='1.5'></icon></span><span><a href='#' class="itMenu" @click="goToHome()">Accueil</a></span>
                <div v-show="choice==='accueil'" class="underline"></div>
            </li>
            <li>
                <icon name="search" scale='1.5'></icon><a href='#' class="itMenu" @click="goToSearch()">Recherche</a>
                <div v-show="choice==='recherche'" class="underline"></div>
            </li>
            <li>
                <icon name="email" scale='1.5'></icon><a href='#' class="itMenu" @click="goToMessages()">Messagerie</a>
                <div v-show="choice==='messagerie'" class="underline"></div>
            </li>
            <li>
                <icon name="people" scale='1.5'></icon><a href='#' class="itMenu" @click="goToSubscribers()">Abonnements</a>
                <div v-show="choice==='abonnements'" class="underline"></div>
            </li>
            <li>
                <icon name="add_circle" scale='1.5'></icon><a href='#' class="itMenu" @click="goToCreateEvent()">Créer évènement</a>
                <div v-show="choice==='createEvent'" class="underline"></div>
            </li>
        </ul>
    </nav>
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
            choice: 'accueil'
           }
           
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

<style>
.nav {
    
    display: inline-block;
    width: 300px;
    font-weight: bold;
    background: rgb(240, 240, 240);
}

.nav ul {
    margin-top: 20px;
    padding: 16px;
    list-style: none;
}

li {
    position: relative;
    margin: 2em 0; 
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
</style>