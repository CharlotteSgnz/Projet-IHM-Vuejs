<template>
    <div class="inscription">
        <div class="form-container">
            <form class="form-group" @submit="completeForm()">
                <input class="form-input form-control" type="text" v-model="pseudo" placeholder="Pseudo"/>
                <input class="form-input form-control" type="text" v-model="mail" placeholder="Adresse mail" />
                <input class="form-input form-control" type="text" v-model="password" placeholder="Mot de passe" />
                <br/>
                <select class="custom-select" v-model="accountType">
                    <option selected>Type de compte</option>
                    <option value="spectateur">Spectateur</option>
                    <option value="artiste">Artiste</option>
                    <option value="organisateur">Organisateur</option>
                </select>
                <br/>
                <button type="submit" class="connexion-btn btn btn-primary">Valider</button>
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
                password:'',
                accountType: ''
            }
        },
        methods: {
            completeForm(){
                if (this.pseudo !== "" && this.mail !== "" && this.password !== ""){
                    let newAccount = {
                        id: localStorage.usersStorage.length + 2,
                        pseudo: this.pseudo,
                        mail: this.mail,
                        password: this.password,
                        accountType: this.accountType
                    }
                    const usersStorage = JSON.parse(localStorage.getItem('usersStorage'))
                    usersStorage.push(newAccount)
                    localStorage.setItem('usersStorage', JSON.stringify(usersStorage))
                    
                    this.$router.push("/home")
                }else 
                    alert("Veuillez remplir le formulaire")
            }
        }
    }
</script>


<style >

.form-container{
    margin-top: 150px;
    margin-left: 40%;
}

.form-input {
    width: 22%;
    margin: 5px;
}

.connexion-btn {
    margin: 5px;
    margin-top: 10px;
    width: 20%;
}

.custom-select {
    width: 22%;
}

</style>