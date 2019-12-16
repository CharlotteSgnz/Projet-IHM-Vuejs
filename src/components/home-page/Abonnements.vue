<template>
    <Layout class="home">
        <div class="abonnements">
            <header>
                <h1>Mes abonnements</h1>
            </header>
            <div class="row">
            <div v-for="users in this.dataU" v-bind:key="users.id">
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <Utilisateur v-bind:name="users.pseudo"
                             v-bind:type="users.accountType"
                            v-bind:img="require(`@/assets/images/` + users.urlAvatar)"
                        />
                    </div>
            </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Utilisateur from '@/components/home-page/Utilisateur'

    export default {
        components: {
            Utilisateur
        },
        data() {
            return {
                dataU: []
            }
        },
        created(){
            this.dataU = JSON.parse(localStorage.getItem('usersStorage'))
        }
    }
</script>

<style>
    .abonnements {
        margin-top: 5%;
        margin-left: 18%;
        
    }
</style>