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
        const filtered = this.products.filter(product => {
            return product.title.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
        return filtered.slice(0, 3);
        }
    },
    methods: {
        getProductById(id) {
        return this.products.find(product => product.id === id);
        }
    }
};    
</script>

<template>
    <div class="cor justify-content-center">
        <div id="carouselExampleInterval" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="1000">
                    <img src="src\assets\img\h4-slide.png" class="d-block w-100" alt="...">
                    <div class="card-img-overlay">
                        <h2 class="caption title">
								iPhone <span class="primary">6 <strong>Plus</strong></span>
						</h2>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                    <img src="src\assets\img\h4-slide2.png" class="d-block w-100" alt="...">
                    <div class="card-img-overlay">
                        <h2 class="caption title">
                            School supplies & backpacks 
						</h2>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                    <img src="src\assets\img\h4-slide3.png" class="d-block w-100" alt="...">
                    <div class="card-img-overlay">
                        <h2 class="caption title">
								Apple <span class="primary">Store <strong>Ipod</strong></span>
						</h2>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    <h1 class="section-title">New products</h1>

    <div class="shop-area">
        <div class="container">
            <div class="row">
                <div v-for="product in filteredProducts" :key="product.id" class="col-md-4">
                <div class="card mx-auto text-center border-primary">
                    <router-link to="/singlePROD">
                    <img :src="product.image" class="card-img-top" :alt="product.title">
                    </router-link>
                    <hr>
                    <div class="card-body">
                    <router-link id="rl" to="/singlePROD">
                        <h5 class="card-title">{{ product.title }}</h5>
                    </router-link>
                    <router-link id="rl" to="/singlePROD">
                        <p class="card-text">{{ product.price }} $</p>
                    </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br> <br> <br>
    <div class="product-widget-area">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h2 class="wid-title">Top sales</h2>
                    <hr>
                    <div class="single-wid-product" v-if="getProductById(1)">
                        <a href="#"><img :src="getProductById(1).image" alt="" class="product-thumb"></a>
                        <h2><router-link to="/singlePROD">{{ getProductById(1).title }}</router-link></h2>
                        <div class="product-wid-price">
                            <ins>{{ getProductById(1).price }}</ins>
                        </div>                            
                    </div>

                    <div class="single-wid-product" v-if="getProductById(2)">
                        <a href="#"><img :src="getProductById(2).image" alt="" class="product-thumb"></a>
                        <h2><router-link to="/singlePROD">{{ getProductById(2).title }}</router-link></h2>
                        <div class="product-wid-price">
                            <ins>{{ getProductById(2).price }}</ins>
                        </div>                            
                    </div>
                </div>

                <div class="col-md-4">
                    <h2 class="wid-title">Recently viewed</h2>
                    <hr>
                    <div class="single-wid-product" v-if="getProductById(3)">
                        <a href="#"><img :src="getProductById(3).image" alt="" class="product-thumb"></a>
                        <h2><router-link to="/singlePROD">{{ getProductById(3).title }}</router-link></h2>
                        <div class="product-wid-price">
                            <ins>{{ getProductById(3).price }}</ins>
                        </div>                            
                    </div>

                    <div class="single-wid-product" v-if="getProductById(4)">
                        <a href="#"><img :src="getProductById(4).image" alt="" class="product-thumb"></a>
                        <h2><router-link to="/singlePROD">{{ getProductById(4).title }}</router-link></h2>
                        <div class="product-wid-price">
                            <ins>{{ getProductById(4).price }}</ins>
                        </div>                            
                    </div>
                </div>

                <div class="col-md-4">
                    <h2 class="wid-title">Top New</h2>
                    <hr>
                    <div class="single-wid-product" v-if="getProductById(5)">
                        <a href="#"><img :src="getProductById(5).image" alt="" class="product-thumb"></a>
                        <h2><router-link to="/singlePROD">{{ getProductById(5).title }}</router-link></h2>
                        <div class="product-wid-price">
                            <ins>{{ getProductById(5).price }}</ins>
                        </div>                            
                    </div>

                    <div class="single-wid-product" v-if="getProductById(6)">
                        <a href="#"><img :src="getProductById(6).image" alt="" class="product-thumb"></a>
                        <h2><router-link to="/singlePROD">{{ getProductById(6).title }}</router-link></h2>
                        <div class="product-wid-price">
                            <ins>{{ getProductById(6).price }}</ins>
                        </div>                            
                    </div>
                </div>

            </div>
        </div>
    </div>

    <router-view></router-view>
</template>

<style>
.cor {
    width: 1001px; 
    height: 325px;
    margin-top: 30px; 
    margin-right: 228px; 
    margin-bottom: 15px; 
    margin-left: 228px; 
}

.card-img-overlay {
    margin-left: 700px;
}

.section-title {
    font-size: 50px;
    text-align: center;
    font-weight: 100;
    margin-top: 50px;
    margin-bottom: 30px;
}

.card {
    width: 250px;
    height: 80px;
}
.card-body h5 {
    text-align: center;
}

.card-body h5 a {
    font-weight: 400;
    font-size: 23px;
    color: #222;
    text-decoration: none;
}

.card-body p {
    text-align: center;
    font-size: 20px;
    color: #72a9f7;
}

.wid-title {
    font-weight: 400;
    font-size: 25px;
    color: #222;
}

.single-wid-product {
    margin-bottom: 31px;
    overflow: hidden;
}

.product-thumb {
    float: left;
    height: 130px;
    margin-right: 15px;
    width: 140px;

}

.single-wid-product h2 {
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
}

.product-wid-price ins {
    color: #5a88ca;
    font-weight: 700;
    margin-right: 10px;
    text-decoration: none;
}

</style>