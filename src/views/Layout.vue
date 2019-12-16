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
                    "date": "7 juillet 2020",
                    "description": "voici la description du Main Square 2020",
                    "urlImage": "MainSquare2020.jpeg"
                },
                {
                    "id": 2,
                    "name": "Tomorrowland Winter 2020",
                    "date": "14 mars 2020",
                    "description": "voici la description de Tomorrowland Winter 2020",
                    "urlImage": "TomorrowlandWinter2020.jpg"
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
    background-color: rgb(240, 240, 240);
}
.lemenu {
    position: fixed;
}


</style>