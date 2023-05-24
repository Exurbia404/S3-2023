<template>
    <div>
        <h1>Brands</h1>
        <ul>
            <li v-for="brand in brands" :key="brand.id">{{ brand.name }}</li>
        </ul>
        <form @submit.prevent="addBrand">
            <label for="name">Brand Name:</label>
            <input type="text" id="name" v-model="newBrandName">
            <button type="submit">Add Brand</button>
        </form>
    </div>
</template>

<script>
    import axiosInstance from '../axios'

    export default {
        data() {
            return {
                brands: [],
                newBrandName: ''
            }
        },
        created() {
            axiosInstance.get('/brands')
                .then(response => {
                    this.brands = response.data
                })
                .catch(error => {
                    console.error(error)
                })
        },
        methods: {
            addBrand() {
                axiosInstance.post('/brands', { name: this.newBrandName })
                    .then(response => {
                        this.brands.push(response.data)
                        this.newBrandName = ''
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        }
    }
</script>
