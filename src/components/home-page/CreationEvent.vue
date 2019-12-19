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
                    <datepicker input-class="form-control bg-white" bootstrap-styling v-model="requestDate"></datepicker> 
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
                    <label>Image bannière</label>
                    <input type="file">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputZip">Image description</label>
                    <input type="file" >
                </div>
            </div>
            <div class="form-inline " >
                <div class="form-group mb-2">
                    <label >Ajouter des artistes</label>
                </div>
                <div class="form-group mx-sm-3 mb-2">
                  <input type="text" class="form-control" v-model="artistName" >
                </div>
                <button type="submit" class="btn add-btn btn-primary mb-2" @click.prevent="addArtist()">+</button>
        
                <div class="form-group mb-2">
                  <label class="label2">Ajouter des styles de musiques</label>
                </div>
                <div class="form-group mx-sm-3 mb-2">
                  <input type="text" class="form-control" v-model="musicStyle" >
                </div>
								
                    <button type="submit" class="btn add-btn btn-primary mb-2"  @click.prevent="addStyles()">+</button>
									
            </div>

				<!-- 	<div class="form-inline " >
            <ul>
              <li v-for="artist in artistsList" v-bind:key="artist">
                <label>
                    <span>{{ artist }}</span>
                </label>
                <button type="button" v-on:click="remove(todo)"> x </button>
              </li>
            </ul>

						<ul>
              <li v-for="style in stylesList" v-bind:key="style">
                <label>
                    <span>{{ artist }}</span>
                </label>
                <button type="button" v-on:click="remove(todo)"> x </button>
              </li>
            </ul>
					</div> -->
				<div class="form-inline d-flex justify-content-end">
          <button type="submit" class="btn submit-btn btn-light aligned-with-icon lebouton">Créer un évènement</button>
				</div>
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
        data() {
            return {
								artistsList: [],
								stylesList: [],
								artistName: null,
								musicStyle: ''
            }
        },
        methods: {
            addArtist() {
							this.artistsList.push(this.artistName)
							this.artistName = null
						},
						addStyles() {
							this.stylesList.push(this.musicStyle)
							this.stylesList = null
            }
        }
    }
</script>

<style scoped>

.add-btn {
	margin-top: 0px;
	border-radius: 50px;
}

.label2 {
	margin-left: 75px;
}

.submit-btn {
	margin: 60px 0;
}


</style>
