<template>
    <div class="home">
        <main class="root">
            <nav class="nav-header fixed-top ">
                <ul class="nav navbar-buttons">
                    <li class="deco-button">
                        <router-link to ="/">Déconnexion</router-link>
                    </li>
                </ul>
            </nav>
            <aside class="menu">
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
                    </ul>
                </nav>
            </aside>
            <div v-show="choice==='accueil'"><FilActualite/></div>
            <div v-show="choice==='recherche'"><Recherche/></div>
            <div v-show="choice==='messagerie'"><Messagerie/></div>
            <div v-show="choice==='abonnements'"><Abonnements/></div>
        </main>
    </div>
</template>

<script>
    import 'vue-md-icons/src/icons'
    import Icon from 'vue-md-icons/src/components/Icon'
    import Abonnements from '@/components/home-page/Abonnements'
    import FilActualite from '@/components/home-page/FilActualite'
    import Messagerie from '@/components/home-page/Messagerie'
    import Recherche from '@/components/home-page/Recherche'

    export default {
        name: 'home',
        components: {
            Icon,
            FilActualite,
            Abonnements,
            Messagerie,
            Recherche
        },
        data() {
            return {
                choice: 'accueil'
            }
        }
    }
</script>

<style >

.home {
    display: flex;
    flex-direction: column;
}

.nav-header {
    height: 45px;
    background: #260f2f;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: #000;
    box-shadow: 0 1px 6px #000;
}

.navbar-buttons { 
    float: right; 
}

.deco-button {
    margin-top: 35px;
    margin-right: 15px;
}

.deco-button a {
    color: white;
    text-decoration: none;
}

.menu {
    position: fixed;
    width: 200px;
    height: 100vh;
    background: #2D2D2D;
}

.nav {
    position: relative;
    text-align: right;
    top: 20%;
    transform: translateY(-50%);
    font-weight: bold;
}

.nav ul {
    list-style: none;
    margin: -50px; 
}

li {
    position: relative;
    margin: 1em 0; 
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

.underline  {
    width: 150px;
    height: 2px;
    background: linear-gradient(to right, #A04112, bisque);
    margin-top: 10px;
    margin-left: 48px;
}

.md-icon {
    color: white;
    margin-top: -8px;  
}

</style>