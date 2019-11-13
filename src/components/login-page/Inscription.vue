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
    import account from '@/data/account'
    export default {
        data(){
            return {
                myData: account,
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
                        id: 3,
                        pseudo: this.pseudo,
                        mail: this.mail,
                        password: this.password,
                        accountType: this.accountType

                    }
                    this.myData.push(newAccount)
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