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

    import account from '@/data/account'

    export default {

        data(){
            return {
                myData: account,
                email: '',
                password: ''
            }
        },
        methods: {
            checkForm(){
                    for (let i=0; this.myData.length; i++){
                        if ((this.email === this.myData[i].mail) && (this.password === this.myData[i].password)){
                            console.log(this.myData[i])
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