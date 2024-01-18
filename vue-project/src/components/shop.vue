<script>
export default {
        data() {
            return {
            searchTerm: '',
            products: [
                {id:1 ,title: 'Apple Iphone 6', price: 400, image: 'src/assets/img/Iphone6.jpg'},
                {id:2 ,title: 'Apple Macbook', price: 800, image: 'src/assets/img/AppleMacbook.png'},
                {id:3 ,title: 'Apple Airpods', price: 300, image: 'src/assets/img/AppleAirpods.png'},
                {id:4 ,title: 'Apple Ipad', price: 600, image: 'src/assets/img/AppleIpad.png'},
                {id:5 ,title: 'Samsung S10E', price: 400, image: 'src/assets/img/SamsungS10e.png'},
                {id:6 ,title: 'Samsung Galaxy A70', price: 800, image: 'src/assets/img/SamsungA70.png'},
                {id:7 ,title: 'Samsung S9', price: 800, image: 'src/assets/img/SamsungS9.png'},
                {id:8 ,title: 'Oppo F9', price: 200, image: 'src/assets/img/OppoF9.png'},
                {id:9 ,title: 'Xiaomi 9T', price: 300, image: 'src/assets/img/Xiaomi9T.png'},
            ]
            };
        },
        computed: {
            filteredProducts() {
            return this.products.filter(product => {
                return product.title.toLowerCase().includes(this.searchTerm.toLowerCase());
            });
            }
        }
};

export const perehod = {
        methods: {
        goToPrevPage() {
        },
        goToNextPage() {
        }
        }
} 
</script>

<template>
    <div class="product-big-title-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-bit-title text-center mt-4">
                        <h2>Shop</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12">
        <div class="mx-auto text-center">
            <input class="input" v-model="searchTerm" type="text" placeholder="Поиск товара...">
        </div>
    </div>
    
    <div class="shop-area">
        <div class="container">
            <div class="row">
                <div v-for="product in filteredProducts" :key="product.id" class="col-md-4">
                    <div class="card mx-auto text-center border-primary">
                        <router-link to="/singlePROD"><img :src="product.image" class="card-img-top" :alt="product.title"></router-link>
                        <hr>
                    <div class="card-body">
                        <router-link id="rl" to="/singlePROD"><h5 class="card-title">{{ product.title }}</h5></router-link>
                        <router-link id="rl" to="/singlePROD"><p class="card-text">{{ product.price }} $</p></router-link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12 mt-4 mb-5 text-center">
        <button id="prev" type="button" class="btn btn-primary" @click="goToPrevPage">BACK</button>        
        <button id="next" type="button" class="btn btn-primary" @click="goToNextPage">NEXT</button>
    </div>
    <router-view></router-view>
</template>

<style>
.product-bit-title{
    background-color: #5a88ca;
}
.product-bit-title h2 {
  font-size: 50px;
  font-weight: 400;
  padding: 50px 0;color: #fff;
}

.card {
    width: 250px; 
    height: 275px; 
    margin-top: 30px;
}

.card-body h5 a {
    font-weight: 500;
}

.input {
    width: 400px;
    border: 3px solid #5a88ca;
}

#prev {
    margin-right: 20px;
}

#rl {
    text-decoration: none;
}
</style>
