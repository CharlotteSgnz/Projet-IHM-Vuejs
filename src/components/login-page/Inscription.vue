<template>
    <div class="inscription">
        <div class="container">
            <form @submit="completeForm()">
                <div class="inscription-pseudo form-group">
                    <input v-model="pseudo" type="text" class="inscription-form-input form-control" placeholder="Votre pseudo">
                </div>
                <div class="inscription-email form-group">
                    <input v-model="mail" type="email" class="inscription-form-input form-control" placeholder="Votre adresse email">
                </div>
                <div class="inscription-password form-group">
                    <input v-model="password" type="password" class="inscription-form-input form-control" placeholder="Votre mot de passe">
                </div>
                <div class="inscription-password-select form-group">
                    <select class="form-control" v-model="accountType">
                    <option value="" disabled selected>Choisir votre type de compte</option>
                    
                    <option value="spectateur">Spectateur</option>
                    <option value="artiste">Artiste</option>
                    <option value="organisateur">Organisateur</option>
                </select>
                </div>
                <button type="submit" class="btn btn-primary">S'inscrire</button>
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


<style scoped>

.inscription form {
    width: 500px;
    text-align: center;
}

.inscription-pseudo {
    padding-bottom: 16px;
}

.inscription-email {
    padding-bottom: 16px;
}

.inscription-password {
    padding-bottom: 16px;
}

.inscription-form-input {
    font-size: 16px;
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    color: #A3ABBD !important;
    text-decoration-color: white;
}

.form-control:focus {
     /* width: 50%; */
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    border-color: white;
    box-shadow: none;
    text-decoration-color: white;
}

::placeholder {
  color: #A3ABBD !important;
}

:focus::placeholder {
  color: white !important;
}

.inscription-password-select select {
    width: 100%;
}



.btn {
    width: 100%;
    margin-top: 40px;
    padding: 8px 16px;
    border: none;
    background: rgba(3, 37, 68, 0.8) !important;
    border-radius: 30px; 
}

/* Responsive */
@media screen and (max-width: 768px) {
    .inscription form {
        width: 200px;
        text-align: center;
    }
}
</style>