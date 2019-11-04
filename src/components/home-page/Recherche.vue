<template>
    <div class="search">
        <header>
            <h1>Rechercher</h1>
        </header>
        <div class="search-container">
            <form  @submit.prevent="search()">
                <div class="form-row">
                    <input class="search-input form-control" 
                        type="text" 
                        v-model="request" 
                        placeholder="petite loupe"/>
                    <button type="submit" 
                        class="search-btn btn btn-primary">
                        Valider
                    </button>  
                    <button type="" 
                        class="filter-btn btn btn-primary">
                        Filtrer
                    </button>
                </div>
                <label> Localisation</label>
                <input class="search-place form-control" 
                        type="text" 
                        v-model="place" />
            </form>
        </div>
        <h3 v-show="show===true">Résultat trouvé pour {{resultat}}</h3>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                request: '',
                resultat:'',
                show: false
            }
        },
        methods: {
            search() {
                this.show = true;
                this.resultat = this.request
            }
        }
    }
</script>

<style>

.form-row {
    margin-bottom: 10px;
}

.search-input {
    width: 25%;
    margin-right: 10px;
}

.filter-btn {
    margin-left: 10px;
}

.search-place {
    width: 10%;
}

</style>