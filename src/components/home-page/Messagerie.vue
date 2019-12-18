<template>

    <Layout>

      <div class="messagerie">
        
        <h1>Ma messagerie</h1>

        <div class="lebouton">       
          <button
            v-show="choice==='conversations'"
            type="button"
            class="btn btn-light aligned-with-icon lebouton"
            @click="choice='new'"
          >
            <icon name="add_circle" class="newConv" scale="2"></icon>Nouvelle conversation
          </button>
        </div>

        <div class="contenu">
          <div v-show="choice==='conversations'" class="conversations">
            <h3>Mes conversations</h3>
              
              <div v-for="users in this.dataU" v-bind:key="users.id">
                      
                  <ConvApercu 
                      v-bind:name="users.pseudo"
                      v-bind:img="require(`@/assets/images/` + users.urlAvatar)"
                      v-bind:id="users.id"
                      @click.native="goToChat(users.id)"
                  />
                      
              </div>

          </div>

          <div v-show="choice==='convSpe'" class="chat">
            <ConvPage></ConvPage>
              

          </div>
<!--
          <div v-show="choice==='new'">
              <newConv></newConv>
          </div>
-->

        </div>
      </div>  
    </Layout>

</template>

<script>
import "vue-md-icons/src/icons";
import Icon from "vue-md-icons/src/components/Icon";
import ConvApercu from "@/components/home-page/ConvApercu";
//import newConv from "@/components/home-page/newConv";
import ConvPage from "@/views/ConvPage";

export default {
  components: {
    Icon,
    ConvApercu,
    //newConv,
    ConvPage
  },
  data() {
    return {
      dataU: [],
      choice: "conversations"
    };
  },
  created() {

    this.dataU = JSON.parse(localStorage.getItem("usersStorage"));
  },
  methods: {

      goToChat(id) {
        this.$router.push({ name: 'chat', params: { id } })
      }

  }
}
</script>

<style>
.messagerie {
  margin-top: 2%;
  margin-left: 10%;
}

.newConv {
  color: #112e52;
  padding-top: -25px;
  padding-right: 8px;
}

.contenu {

  margin-left: 20px;

}

.lebouton {

  margin-left: 20px;
  margin-top: 20px;

}

.aligned-with-icon {
  position: absolute;
  margin-top: 4.5px;
  margin-left: -2px;
}

.btn {
  margin-top: 20px;
}

.btn-light {
  background-color: rgb(218, 218, 218);
}

h3 {
  margin-top: 13%;
}

.avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-top: 15px;
        margin-left: -20px;
}

.nom {
    margin-top: -70px;
    margin-left: 100px;
    font-weight: bold;
    color: #112e52;
}

.lastM {
    margin-top: -40px;
    margin-left: 100px;
}

.limit-item {
    height: 50%;
}

</style>
