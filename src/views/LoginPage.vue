<template>
    <div class="login">
        <header>
            <nav class="navbar">
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
        }
    }
</script>

<style >

.login {
    display: flex;
    flex-direction: column;
}

.navbar {
    margin-top: 30px;
    margin-right: 100px;
    font-size: 12px;
    letter-spacing: 4px;
    text-transform: uppercase;
    float: right;
}

.navbar .navbar-buttons {
    float: none;
    vertical-align: top;
    
}

.navbar li a {
    padding: 15px;
    color: black;
    text-decoration: none;
}

.underline  {
    width: 45px;
    height: 2px;
    background: #4d1d57;
    margin-top: 10px;
    margin-left: 48px;
    
}


</style>