<template>
    <div>
        <Header/>
        <div class="wrapper">
            <!-- Sidebar -->
            <Sidebar class="lemenu menu py-1" />
            <!-- Contenu dynamique : on injecte les composants dans le slot-->
            <main class="container my-5">
                <slot> <FilActualite></FilActualite> </slot>
            </main>
        </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/navigation/Sidebar'
    import Header from '@/components/navigation/Header'

    export default {
        name: 'Layout',

        components: {
            Sidebar,
            Header
        },
        created(){
            const events = [
                {
                    "id": 1,
                    "name": "Main Square 2020",
                    "date": "3, 4, 5 juillet 2020",
                    "location": "La Citadelle d'Arras, France",
                    "url": "https://mainsquarefestival.fr/fr",
                    "prix": "54",
                    "genres": ["Hip Hop", "Indie", "Musique alternative", "Rock", "Électrique"],
                    "excerpt": "Plus gros festival ch'ti de France",
                    "description": "Main Square Festival est une célébration éclectique qui envoûte la citadelle d'Arras depuis plus de dix ans à l'aide de ses programmations d'artistes internationaux.",
                    "descriptionTwo": "Depuis ses humbles début en 2004, le festival est devenu l'un des plus grands de l'Hexagone, attirant le temps d'un week-end estival des fans avides de performances de mégastars en tout genre mais aussi de découvertes.",
                    "urlImage": "MainSquare2020.jpeg",
                    "urlImage2": "main-square-description.jpg",
                    "artists": [ 
                        { "name": "Alan Walker", "image": "artists/alan-walker.jpg" }, 
                        { "name": "Blacked Eyed Peas", "image": "artists/black-eyed-peas.jpg" },
                        { "name": "Sting", "image": "artists/sting.jpg" },
                        { "name": "Vald", "image": "artists/vald.jpg" },
                    ]    

                },
                {
                    "id": 2,
                    "name": "Tomorrowland Winter 2020",
                    "date": "17-19 juillet 2020 & 24-26 juillet 2020",
                    "location": "Boom, Belgique",
                    "url": "https://global.tomorrowland.com/",
                    "prix": "300",
                    "genres": ["EDM", "Hardstyle", "House", "Techno", "Trance"],
                    "excerpt": "Le roi sans conteste de l'EDM",
                    "description": "A-t-on encore besoin de présenter Tomorrowland, le plus grand festival dance au monde, qui accueille chaque année une programmation de la crème des DJs dance dans la ville Belge de Boom ?",
                    "descriptionTwo": "Les accros de l'EDM, house, techno et du hardstyle savent déjà qu'ils n'y trouveront que le meilleur de l'électro, comme The Chainsmokers, Carl Cox, Martin Garrix, Armin van Buuren, ou encore Tiësto, aux platines lors des éditions précédentes.",
                    "urlImage": "TomorrowlandWinter2020.jpg",
                    "urlImage2": "tomorrowland-description.jpg",
                    "artists": [ 
                        { "name": "Thomas Schumacher", "image": "artists/thomas-schumacher.jpeg" }, 
                        { "name": "Angerfist", "image": "artists/angerfist.jpeg" },
                        { "name": "Odesza", "image": "artists/odesza.jpg" },
                        { "name": "Hilight Tribe", "image": "artists/highlight-tribe.jpeg" },
                    ] 
                }
            ]

            localStorage.setItem('eventsStorage', JSON.stringify(events));

        }
    }
</script>

<style>
.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
    background-color: white;
}
/* .lemenu {
    position: fixed;
} */


</style>