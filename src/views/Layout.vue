<template>
    <div>
        <!-- Header -->
        <nav class="navbar">
            <span class="navbar-brand mb-0 h1">IHM</span>
            <span class="navbar-deco-button">
                <router-link to ="/">Déconnexion</router-link>
            </span>
        </nav>
        <div class="wrapper">
            <!-- Sidebar -->
            <Sidebar class="menu py-1" />
            <!-- Contenu dynamique -->
            <main class="container my-5">
                <slot />
            </main>
        </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/navigation/Sidebar'

    export default {
        name: 'Layout',

        components: {
            Sidebar,
        }
    }
</script>

<style>
.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

/**
 * Header
 */
.navbar {
    background: #260f2f;
    color: white;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: #000;
    box-shadow: 0 1px 6px #000;
}

.navbar-deco-button a {
    color: white;
    text-decoration: none;
}

/**
 * Sidebar
 */
</style>