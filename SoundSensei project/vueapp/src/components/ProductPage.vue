<template>
    <div>
        <h1>All Products</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.name }} - {{ product.description }} - {{ product.brand_id }}
            </li>
        </ul>
        <form @submit.prevent="addProduct">
            <label>
                Name:
                <input type="text" v-model="newProduct.name" />
            </label>
            <label>
                Description:
                <input type="text" v-model="newProduct.description" />
            </label>
            <label>
                Brand ID:
                <input type="number" v-model="newProduct.brand_id" />
            </label>
            <button type="submit">Add Product</button>
        </form>
    </div>
</template>
<script>
    import axiosInstance from '@/axios';

    export default {
        data() {
            return {
                products: [],
                newProduct: {
                    name: '',
                    description: '',
                    brand_id: null
                }
            };
        },
        created() {
            axiosInstance
                .get('/products')
                .then((response) => {
                    this.products = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        methods: {
            addProduct() {
                axiosInstance
                    .post('/products', this.newProduct)
                    .then((response) => {
                        this.products.push(response.data);
                        this.newProduct.name = '';
                        this.newProduct.description = '';
                        this.newProduct.brand_id = null;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    };
</script>