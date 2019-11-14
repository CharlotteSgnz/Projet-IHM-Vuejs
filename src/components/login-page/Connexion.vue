<template>
    <div class="connexion">
        <div class="form-container">
            <form class="form-group" @submit="checkForm()">
                <input class="form-input form-control" 
                       type="text" 
                       v-model="email" 
                       placeholder="email"/>
                <input class="form-input form-control" 
                       type="password" 
                       v-model="password" 
                       placeholder="mot de passe"/>
                <button type="submit" 
                        class="connexion-btn btn btn-primary">
                        Connexion
                </button>  
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
                            this.$router.push("/home")
                        }else {
                            console.log("Mauvais mail ou mot de passe")
                        }
                    }
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
    width: 50%;
    margin: 5px;
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    text-decoration-color: white;
}


.connexion-btn {
    margin: 5px;
    margin-top: 15px;
    width: 20%;
    border: none;
    background: rgba(3, 37, 68, 0.5);
    border-radius: 20px; 
}

</style>