<template>
  <div class="utilisateur">
    <!--
    <div class="card carduser shadow p-3 mb-5 bg-white rounded">
        <div class="card-body text-center">
            <p>
                <img class="img-fluid rounded-circle avatarU shadow p-1 mb-5 bg-white rounded" :src="img" />
            </p>
            <div class="infos">
                <h4 class="card-title">{{name}}</h4>
                <h5 class="card-subtitle mb-2 text-muted">{{type}}</h5>
                <p class="card-text">{{description}}</p>
                <button class="btn btn-dark btn-sm">S'abonner à {{name}}</button>
            </div>
        </div>
    </div> -->

    <div class="flip-card shadow p-3 mb-5 bg-white rounded">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div class="card-body text-center">
                    <p>
                        <img class="img-fluid rounded-circle avatarU shadow p-1 mb-5 bg-white rounded" :src="img"/>
                    </p>
                    <div class="infos-front">
                        <h4 class="card-title">{{name}}</h4>
                        <h5 class="card-subtitle mb-2 text-muted">{{type}}</h5>
                        <p class="card-text">{{description}}</p>
                    </div>
                </div>
            </div>
            <div class="flip-card-back">
                <div class="card-body text-center">
                    <div class="infos-back">
                        <h4 class="card-title">Styles de musique</h4>
                        <h5 class="card-subtitle mb-2 text-muted">{{styles}}</h5>
                        <button class="btn btn-dark btn-sm">{{abonnement}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    name: String,
    type: String,
    description: String,
    abonnement: String,
    styles: String
  }
};
</script>

<style>


.card-title {
  color: darkblue;
  font-weight: bolder;
  text-transform: uppercase;
}

.card-subtitle {
    margin-top: 5px;
}

.avatarU {

  height: 160px;
  width: 160px;
}

.infos-front {
    margin-top: -30px;
}

.infos-back {
  margin-top: 80px;
}

/** TEST */

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 370px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 95%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color:white;
  color: black;
  transform-style:preserve-3d;
}

/* Style the back side */
.flip-card-back {
  background-color: white;
  color: white;
  transform: rotateY(-180deg)
}

</style>
