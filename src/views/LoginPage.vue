<template>
    <div class="login">
        <header class="d-flex">
            <div class="container">
                <div class="row">
                    <!-- Left -->
                    <div class="col d-flex justify-content-start">
                         <nav class="navbar-logo">
                            <ul class="nav navbar-buttons">
                                <li>
                                    <h1>FYME</h1>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <!-- Right -->
                    <div class="col d-flex justify-content-end">
                        <nav class="navbar-login">
                            <ul class="nav navbar-buttons">
                                <li @click="test='connexion'">
                                    <a href="#">Connexion</a>
                                    <div v-show="test==='connexion'" class="underline"></div>
                                </li>
                                <li @click="test='inscription'">
                                    <a href="#">Inscription</a>
                                    <div v-show="test==='inscription'" class="underline"></div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <div v-show="test==='connexion'" class="login-content"><Connexion/></div>     
        <div v-show="test==='inscription'" class="login-content"><Inscription/></div>
    </div>
</template>

<script>

    import Connexion from '@/components/login-page/Connexion'
    import Inscription from '@/components/login-page/Inscription'

    export default {
        name: 'login',
        components: {
            Connexion,
            Inscription
        },
        data(){
            return{
                test: 'connexion',
            }
        },
        created(){
            const users = [
                {
                    "id": 1, 
                    "pseudo": "cha",
                    "mail": "cha@gmail.com",
                    "password": "cha",
                    "accountType": "Spectateur",
                    "urlAvatar": "Charlotte.jpeg",
                    "description": "Ceci est ma super description.",
                    "abo": "S'abonner",
                    "desabo": "Se désabonner",
                    "styles": "Hardore, Electro, House, Minimal"
                },
                {
                    "id": 2,
                    "pseudo": "eme",
                    "mail": "eme@gmail.com",
                    "password": "eme",
                    "accountType": "Spectateur",
                    "urlAvatar": "Emeline.jpeg",
                    "description": "Ceci est ma super description.",
                    "abo": "S'abonner",
                    "desabo": "Se désabonner",
                    "styles": "Rock, Punk, Psyché, Trance"
                },
                {
                    "id": 3,
                    "pseudo": "Fan de Johnny",
                    "mail": "johnnyb@gmail.com",
                    "password": "johnny",
                    "accountType": "Spectateur",
                    "urlAvatar": "FanJohnny.jpeg",
                    "description": "Ceci est ma super description.",
                    "abo": "S'abonner",
                    "desabo": "Se désabonner"  ,
                    "styles": "Johnny, Johnny, Johnny, Johnny "                  
                },
                {
                    "id": 4,
                    "pseudo": "Marilyn Manson",
                    "mail": "666@gmail.com",
                    "password": "say10",
                    "accountType": "Artiste",
                    "urlAvatar": "MarilynM.jpeg",
                    "description": "Ceci est ma super description.",
                    "abo": "S'abonner",
                    "desabo": "Se désabonner",
                    "styles": "Metal, Goth Metal, Grunge, Metal Alternatif"                  
                },
                {
                    "id": 5,
                    "pseudo": "Angerfist",
                    "mail": "angerfist@gmail.com",
                    "password": "angerfist",
                    "accountType": "Artiste",
                    "urlAvatar": "Angerfist.jpeg",
                    "description": "Ceci est ma super description.",
                    "abo": "S'abonner",
                    "desabo": "Se désabonner",
                    "styles": "Techno, Hardcore, Gabber"                  
                },
                {
                    "id": 6,
                    "pseudo": "Rockstore",
                    "mail": "rockstore@gmail.com",
                    "password": "rockstore",
                    "accountType": "Organisateur",
                    "urlAvatar": "Rockstore.jpeg",
                    "description": "Ceci est ma super description.",
                    "abo": "S'abonner",
                    "desabo": "Se désabonner",
                    "styles": "Electro, Rap, Rock, Jazz"                  
                },
                {
                    "id": 7,
                    "pseudo": "Transbordeur",
                    "mail": "transbordeur@gmail.com",
                    "password": "transbo",
                    "accountType": "Organisateur",
                    "urlAvatar": "Transbordeur.png",
                    "description": "Ceci est ma super description.",
                    "abo": "S'abonner",
                    "desabo": "Se désabonner",
                    "styles": "Electro, Techno, Rock, Rap"                  
                }
            ]
            
            localStorage.setItem('usersStorage', JSON.stringify(users))
        }
    }
</script>

<style>



.login {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    background: url('../assets/images/background.jpg');
    background-size: cover;   
}

.login-content {
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 144px;
}

.navbar-logo {
    font-size: 16px;
    letter-spacing: 4px;
    text-transform: uppercase;
    float: right;
}

.navbar-logo h1 {
    padding-top: 4px;
    font-size: 36px;
    color: white;
    letter-spacing: 4px;
    text-transform: uppercase;
}

.navbar-login {
    font-size: 12px;
    letter-spacing: 4px;
    text-transform: uppercase;
}

.navbar-buttons {
    float: none;
    vertical-align: top;
}

.navbar-login li a {
    padding: 15px;
    font-size: 16px;
    color: white;
    text-decoration: none;
}

.underline  {
    width: 45px;
    height: 1px;
    background: white;
    margin-top: 10px;
    margin-left: 48px;
    
}
</style>

