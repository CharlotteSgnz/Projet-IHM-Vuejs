<template>
    <div class="form-inscription">
        <h1>Formulaire complet</h1>
        <form class="form-group" @submit="validateForm()">
                <input class="form-input form-control" type="text" v-model="pseudo" placeholder="Pseudo"/>
                <input class="form-input form-control" type="text" v-model="mail" placeholder="Adresse mail" />
                <input class="form-input form-control" type="text" v-model="password" placeholder="Mot de passe" />
                <input class="form-input form-control" type="text" v-model="city" placeholder="Ville" />
                <p>Styles de musiques :</p>
                    <label class="btn btn-primary"><input type="checkbox" value="rock"/> Rock </label>
                    <label class="btn btn-secondary"><input type="checkbox" value="rock"/> Punk </label>
                    <label class="btn btn-success"><input type="checkbox" value="rock"/> Techno </label>
                    <label class="btn btn-danger"><input type="checkbox" value="rock"/> Classique </label>
                    <label class="btn btn-warning"><input type="checkbox" value="rock"/> Jazz </label>
                    <label class="btn btn-info"><input type="checkbox" value="rock"/> Funk </label>
                    <label class="btn btn-light"><input type="checkbox" value="rock"/> Trance </label>
                    <label class="btn btn-dark"><input type="checkbox" value="rock"/> Metal </label>
                <br/>
                <select class="custom-select">
                    <option selected>Choisissez votre type de compte</option>
                    <option value="spectateur">Spectateur</option>
                    <option value="artiste">Artiste</option>
                    <option value="organisateur">Organisateur</option>
                </select>
                <br/>
                <button type="submit" class="connexion-btn btn btn-primary">Valider</button>
            </form>

    </div>
</template>

<script>
    
    export default {
        data(){
            return{
                pseudo: '',
                mail: '',
                password:'',
                city: ''
            }
        },
        methods: {
            validateForm(){
                this.$router.push("/home")
            }
        }
    }
        
    
</script>

<style>
 .custom-select {
     width: 25%;
 }




</style>