<template>
    <nav class="navbar fixed-top">
            <span class="navbar-brand mb-0 h1">IHM</span>
            <span class="navbar-deco-button">
                <router-link to ="/">Déconnexion</router-link>
            </span>
        </nav>
</template>

<script>
    export default {
        
    }
</script>

<style >

.navbar {
    background: #081627;
    color: white;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    
}

.navbar-deco-button a {
    color: white;
    text-decoration: none;
}

</style>