<template>
  <div class="event-covoiturage-discussion container">
    <div class="row">
      <div class="event-covoiturage-discussion-header col">
        <b-link @click="$emit('event-covoiturage', 'back')"><Icon name="arrow_back" scale='1'></Icon>Revenir aux discussions</b-link>
        <p class="mt-5">Covoiturage</p>
        <h3 class="pb-4"><strong>Des covoitureurs n'attentent que vous !</strong></h3>
      </div>
    </div>

    <div class="event-covoiturage-discussion-question row">
      <div class="col-3">
         <b-button class="btn-dark" @click="selected('chercher')">Chercher votre trajet</b-button>
      </div>
      <div class="col-1">
         <p>Ou</p>
      </div>
       <div class="col-3">
        <b-button class="btn-dark" @click="selected('proposer')">Proposer votre trajet</b-button>
      </div>
    </div>

    <hr>

    <section v-show="choice === 'chercher'">
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Préciser votre ville de départ">
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="card" style="width: 18rem;">
            <div class="card-header text-white bg-success">60€/pers. - Lyon</div>
            <div class="card-body">
              <h5>Paul GARNIER</h5>
              <p class="card-text">Je propse un trajet pour les gros fétards</p>
              <a href="#" class="btn btn-primary">Contacter</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem;">
            <div class="card-header text-white bg-success">60€/pers. - Marseille</div>
            <div class="card-body">
              <h5>Sophie Fox</h5>
              <p class="card-text">Je propse un trajet pour les gros fétards</p>
              <a href="#" class="btn btn-primary">Contacter</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem;">
            <div class="card-header text-white bg-success">60€/pers. - Lille</div>
            <div class="card-body">
              <h5>Tom Cruise</h5>
              <p class="card-text">Je propse un trajet pour les gros fétards</p>
              <a href="#" class="btn btn-primary">Contacter</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proposer un trajet -->
    <section v-show="choice === 'proposer'" class="mt-4">
      <div class="row">
        <div class="col">
          <form>
            <div class="form-group">
              <label for="ville-depart">Ville de départ</label>
              <input type="text" class="form-control" placeholder="Votre ville de départ">
            </div>
            <div class="form-group">
              <label for="date">Date</label>
              <input type="date" class="form-control" placeholder="Date de départ">
            </div>
            <div class="form-group">
              <label for="nb-places">Nombre de passagers</label>
              <select class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
             <div class="form-group">
              <label for="prix">Prix par personne</label>
              <input type="text" class="form-control" placeholder="Prix par personne">
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Soumettre le trajet</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'EventCovoiturageDiscussion',

    data () {
      return {
        choice: 'chercher',
        searchInput: ''
      }
    },

    methods: {
      selected(choix) {
        if (choix === 'chercher') {
          this.choice = 'chercher'
        }

        if (choix === 'proposer') {
          this.searchInput = ''
          this.choice = 'proposer'
        }
      }
    }
  }
</script>

<style scoped>
.event-covoiturage-discussion-question {
  display: flex;
  align-items: baseline;
}
</style>