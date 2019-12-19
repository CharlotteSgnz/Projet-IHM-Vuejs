<template>
    <div class="connexion">
        <div class="container">
            <form @submit="checkForm()">
                <div class="connexion-email form-group">
                    <input v-model="email" type="email" class="connexion-form-input form-control" placeholder="Votre adresse email">
                </div>
                <div class="connexion-password form-group">
                    <input v-model="password" type="password" class="connexion-form-input form-control" placeholder="Votre mot de passe">
                </div>
                <div class="form-check">
                    <div class="row">
                        <div class="col">
                            <input type="checkbox" class="form-check-input">
                            <label class="form-check-label">Souvenir de moi</label>
                        </div>
                        <div class="col">
                           <a>Mot de passe oublié ?</a>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Connexion</button>
            </form>
        </div>
    </div>
</template>

<script>


    export default {

        data(){
            return {
                email: '',
                password: '',
                data: []
            }
        },
        created(){
            this.data = JSON.parse(localStorage.getItem('usersStorage'))
        },
        methods: {
            checkForm(){
                    for (let i=0; this.data.length; i++){
                        if ((this.email === this.data[i].mail) && (this.password === this.data[i].password)){
                            localStorage.setItem('currentUser', JSON.stringify(this.data[i]))
                            this.$router.push("/home")
                        }else {
                            console.log("Mauvais mail ou mot de passe")
                        }
                    }
            }
        }
    
    }
</script>

<style scoped>
.connexion form {
    width: 500px;
    text-align: center;
}

.connexion-email {
    padding-bottom: 16px;
}

.connexion-form-input {
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
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    border-color: white;
    box-shadow: none;
    color: white !important;
    text-decoration-color: white;
}

::placeholder {
  color: #A3ABBD !important;
}

:focus::placeholder {
  color: white !important;
}

.form-check {
    margin-top: 40px;
    color: #A3ABBD;
}

.form-check .col:first-child {
    text-align: left;
}

.form-check .col:last-child {
    text-align: right;
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
    .connexion form {
        width: 200px;
        text-align: center;
    }
}
</style>