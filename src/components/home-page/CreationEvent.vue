<template>
    <Layout class="home">
        <h1>Nouvel évenement</h1>
        <form>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputEmail4">Nom de l'évènement</label>
                <input type="email" class="form-control" id="inputEmail4" >
            </div>
            <div class="form-group col-md-4">
                <label for="inputPassword4">Date</label>
                <datepicker input-class="calendrier form-control bg-white" bootstrap-styling v-model="requestDate"></datepicker> 
            </div>
            <div class="form-group col-md-4">
                <label for="inputPassword4">Lieu</label>
                <input type="password" class="form-control" >
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputAddress">Resumé</label>
                <textarea type="text" class="form-control" rows="6"/>
            </div>
            <div class="form-group col-md-6">
                <label for="inputAddress2">Description</label>
                <textarea type="text" class="form-control" rows="6"/>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-1">
                <label for="inputCity">Prix</label>
                <input type="text" class="form-control" >
            </div>
            <div class="form-group col-md-3">
                <label>Site web de l'évènement</label>
                <input type="text" class="form-control" >
            </div>
            <div class="form-group col-md-4">
                <label>Image 1</label>
                <input type="file">
            </div>
            <div class="form-group col-md-4">
                <label for="inputZip">Image 2</label>
                <input type="file" >
            </div>
        </div>
        <div class="form-inline " >
            <div class="form-group mb-2">
                <label >Ajouter des artistes</label>
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <input type="text" class="form-control" >
            </div>
            <button type="submit" class="btn btn-primary mb-2">+</button>
        
            <div class="form-group mb-2">
                <label >Ajouter des artistes</label>
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <input type="text" class="form-control" >
            </div>
            <button type="submit" class="btn btn-primary mb-2">+</button>
        </div>
        <button type="submit" class="btn btn-light aligned-with-icon lebouton">Créer un évènement</button>
        </form>
    </Layout>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'

    export default {
        name: 'recherche',
        props: ['bootstrap-styling','input-class','calendar-class', ],
        components: {
            Datepicker
        },
    
}
</script>

<style>

</style>
