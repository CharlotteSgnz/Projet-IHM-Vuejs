<template>
    <div class="login">
        <header>
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
        </header>
        <div v-show="test==='connexion'"><Connexion/></div>     
        <div v-show="test==='inscription'"><Inscription/></div>
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
                    "description": "Je veux taper du pieeeeeed !"
                },
                {
                    "id": 2,
                    "pseudo": "eme",
                    "mail": "eme@gmail.com",
                    "password": "eme",
                    "accountType": "Spectateur",
                    "urlAvatar": "Emeline.jpeg",
                    "description": "J'aime trop la musique et la bière !"
                },
                {
                    "id": 3,
                    "pseudo": "James Bond",
                    "mail": "jamesb@gmail.com",
                    "password": "007",
                    "accountType": "Spectateur",
                    "urlAvatar": "JamesBond.jpeg",
                    "description": "My name is Bond, James Bond."
                },
                {
                    "id": 4,
                    "pseudo": "Marilyn Manson",
                    "mail": "666@gmail.com",
                    "password": "say10",
                    "accountType": "Artiste",
                    "urlAvatar": "MarilynM.jpeg",
                    "description": "C'est trop bien ce que je fais 6664ever."
                }
            ]
            
            localStorage.setItem('usersStorage', JSON.stringify(users))
        }
    }
</script>

<style >

.login {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: url('../assets/images/background.jpg');
    background-size: cover;
    
}

.navbar-login {
    margin-top: 70px;
    margin-right: 100px;
    font-size: 12px;
    letter-spacing: 4px;
    text-transform: uppercase;
    float: right;
}

.navbar-buttons {
    float: none;
    vertical-align: top;
    
}

.navbar-login li a {
    padding: 15px;
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