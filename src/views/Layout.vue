<template>
    <div>
        <Header/>
        <div class="wrapper">
            <!-- Sidebar -->
            <Sidebar class="menu py-1" />
            <!-- Contenu dynamique : on injecte les composants dans le slot-->
            <main class="container my-5">
                <slot> <FilActualite/> </slot>
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


</style>