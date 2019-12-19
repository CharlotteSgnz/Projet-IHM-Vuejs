<template>
  <Layout>
    <div class="event-page">
      <!-- Image de couverture -->
      <header>
        <img class="d-block w-100" :src="require(`@/assets/images/` + event[0].urlImage)" alt="First slide">
      </header>

      <!-- Contenu de l'évènement -->
      <section class="event-page-content">
        <div class="row">
          <div class="col">
            <b-badge 
              v-for="genre in event[0].genres" 
              :key="genre.id"
              class="mr-2 mb-4"
              variant="dark"
            >
              {{ genre }}
            </b-badge>  
            <h1><strong>{{ event[0].name }}</strong></h1>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col">
            <p class="text-secondary">Date</p>
            <h4><strong>{{ event[0].date }}</strong></h4>
          </div>
          <div class="col">
            <p class="text-secondary">Lieu</p>
            <h4><strong>{{ event[0].location }}</strong></h4>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col">
            <p class="text-secondary">Site de l'évènement</p>
            <h4><strong><a :href="event[0].url">{{ event[0].url }}</a></strong></h4>
          </div>
          <div class="col">
            <p class="text-secondary">À partir</p>
            <h4><strong>{{ event[0].prix }} €</strong></h4>
          </div>
        </div>
        
        <!-- Tabs (Description/Discussions) -->
        <div class="event-page-tabs">
          <b-tabs class="mt-5" align="left">
            <!-- DESCRIPTION  -->
            <b-tab title="Description" class="event-page-tabs-discussions">
              <article v-show="choice === 'description'" class="mt-5">
                <div class="container">
                  <!-- Description -->
                  <div class="row">
                    <div class="col-4">
                      <h3 class="pb-4">{{ event[0].excerpt }}</h3>
                      <img class="d-block w-100" :src="require(`@/assets/images/` + event[0].urlImage2)" />
                    </div>
                    <div class="col-8">
                      <p>{{ event[0].description }}</p>
                      <p>{{ event[0].descriptionTwo }}</p>
                    </div>
                  </div>
                  <!-- Line-up -->
                  <div class="event-page-tabs-discussions-lineup row mt-5">
                    <div class="col">
                      <h3>Line-up</h3>
                      <div class="row">
                        <div v-for="artist in event[0].artists" :key="artist.id" class="col">
                          <b-card
                            overlay
                            :img-src="require(`@/assets/images/` + artist.image)"
                            img-alt="Card Image"
                          >
                            <b-card-text>
                              <p class="pt-2 mb-4" style="color: white;"><strong>{{ artist.name }}</strong></p>
                            </b-card-text>
                          </b-card>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Billeterie -->
                  <!-- <div class="row mt-5">
                    <div class="col">
                      <h3>Billeterie</h3>
                      <div class="row mt-5" style="position:relative">
                        <div v-for="artist in event[0].artists" :key="artist.id" class="col">
                          <img :src="require(`@/assets/images/` + artist.image)" width="400" />
                          <p class="pt-2 mb-4"><strong>{{ artist.name }}</strong></p>
                        </div>
                      </div>
                    </div>
                  </div> -->
                </div>
              </article>
            </b-tab>
            <!-- DISCUSSIONS -->
            <b-tab title="Discussions">
              <article class="mt-5">
                <div v-show="discussion === ''" class="container">
                  <div class="row">
                    <div @click="selectedDiscussion('faq')" class="col">
                      <div><Icon name="question_answer" scale='8'></Icon></div>
                      <p>FAQ</p>
                    </div>
                    <div @click="selectedDiscussion('covoiturage')"  class="col">
                      <Icon name="directions_car" scale='8'></Icon>
                      <p>Covoiturage</p>
                    </div>
                    <div class="col">
                      <Icon name="local_play" scale='8'></Icon>
                      <p>Revente de billets</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <Icon name="vpn_key" scale='8'></Icon>
                      <p>Objets trouvés</p>
                    </div>
                  </div>
                </div>
                
                <!-- Afficher les composants de discussion en fonction du choix de l'utilisateur -->
                <EventFaqDiscussion v-if="discussion === 'faq'" />
                <EventCovoiturageDiscussion 
                  v-if="discussion === 'covoiturage'"
                  @event-covoiturage="selectedDiscussion"
                />

              </article>
            </b-tab>
          </b-tabs>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
  import EventFaqDiscussion from '@/components/event-page/EventFaqDiscussion'
  import EventCovoiturageDiscussion from '@/components/event-page/EventCovoiturageDiscussion'

  export default {
    name: 'EventPage',

    components: {
      EventFaqDiscussion,
      EventCovoiturageDiscussion
    },

    data () {
      return {
        event: [],
        choice: 'description',
        discussion: ''
      }
    },

    created () {
      this.event = JSON.parse(localStorage.getItem('eventsStorage'))
      this.event = this.event.filter(x => x.id === this.$route.params.id)
    },

    methods: {
      selected (choix) {
        if (choix === 'description') {
          this.choice = 'description'
        }

        if (choix === 'discussions') {
          this.choice = 'discussions'
        }
      },

      selectedDiscussion (discussion) {
        switch (discussion) {
          case 'faq':
            this.discussion = 'faq'
            break;
          case 'covoiturage':
            this.discussion = 'covoiturage'
            break;
          case 'back':
            this.discussion = ''
            break;
          default:
            break;
        }
      }
    }
  }
</script>

<style lang="css" scoped>
h1 {
  font-size: 88px;
}

.event-page-content {
  position: relative;
  bottom: 104px;
  margin: 0 48px;
  padding: 40px 32px;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.event-page-info {
  padding: 0;
  list-style-type: none;
  list-style-position: inside;
}

.event-page-tabs {
  margin-top: 40px;
}

.event-page-tabs-discussions .col-8 {
  margin-top: 104px;
}

.event-page-tabs-discussions-lineup .card-img-overlay {
  background-color: black;
  opacity: 0.7;
}
</style>