<template>
    <nav class="nav">
        <ul>
            <li>
                <span><icon name="home" scale='1.5'></icon></span><span><a href='#' class="itMenu" @click="choice='accueil'">Accueil</a></span>
                <div v-show="choice==='accueil'" class="underline"></div>
            </li>
            <li>
                <icon name="search" scale='1.5'></icon><a href='#' class="itMenu" @click="choice='recherche'">Recherche</a>
                <div v-show="choice==='recherche'" class="underline"></div>
            </li>
            <li>
                <icon name="email" scale='1.5'></icon><a href='#' class="itMenu" @click="choice='messagerie'">Messagerie</a>
                <div v-show="choice==='messagerie'" class="underline"></div>
            </li>
            <li>
                <icon name="people" scale='1.5'></icon><a href='#' class="itMenu" @click="choice='abonnements'">Abonnements</a>
                <div v-show="choice==='abonnements'" class="underline"></div>
            </li>
            <li>
                <icon name="add_circle" scale='1.5'></icon><a href='#' class="itMenu" @click="choice='nouveauEvenement'">Créer évènement</a>
                <div v-show="choice==='abonnements'" class="underline"></div>
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
       }
    }
</script>

<style>
.nav {
    display: inline-block;
    width: 300px;
    font-weight: bold;
    background: #2D2D2D;
}

.nav ul {
    padding: 16px;
    list-style: none;
}

li {
    position: relative;
    margin: 2em 0; 
}

.itMenu {
    background: #2D2D2D;
    border: none;
    color:bisque;
    opacity: 60%;
    text-decoration: none;
    text-decoration-color: none;
}

.itMenu:hover {
    opacity: 100%;
    text-decoration: none;
    color: bisque; 
}

.nav a:focus {
    opacity: 100%;
    text-decoration: none;
    text-decoration-color: bisque;
}

.md-icon {
    color: white;
    padding-top: -8px;
    padding-right: 8px
}
</style>