<template>
    <div class="inscription">
        <div class="form-container">
            <form class="form-group" @submit="completeForm()">
                <input class="form-input form-control" type="text" v-model="pseudo" placeholder="Pseudo"/>
                <input class="form-input form-control" type="text" v-model="mail" placeholder="Adresse mail" />
                <input class="form-input form-control" type="text" v-model="password" placeholder="Mot de passe" />
                <button type="submit" class="connexion-btn btn btn-primary">Inscription</button>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                pseudo: '',
                mail: '',
                password:''
            }
        },
        methods: {
            completeForm(){
                this.$router.push("/form-inscription")
            }
        }
    }
</script>

<style >

.form-container{
    margin-top: 200px;
    margin-left: 40%;
}

.form-input {
    width: 20%;
    margin: 5px;
}

.connexion-btn {
    margin: 5px;
    margin-top: 10px;
    width: 20%;
}

</style>