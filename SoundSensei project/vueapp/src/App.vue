<template>
    
    <div class="header">
        <div class="nav-items">
            <router-link class="nav-link" to="/home">Home</router-link>
            <router-link class="nav-link" to="/brands">Brands</router-link>
            <router-link class="nav-link" to="/products">Products</router-link>
        </div>
    </div>
    
    <div class="MainPage">
        <router-view />
    </div>

</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
    .header {
        background-color: #333;
        color: white;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }

    .nav-items {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .nav-link {
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
</style>