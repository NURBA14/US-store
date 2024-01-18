<script>
export default {
  data() {
    return {
      products: [
        {id:1, 
          title: 'Apple Iphone 6', 
          price: 400, 
          image: 'src/assets/img/Iphone6.jpg', 
          description: 'The Apple iPhone 6 is a sleek and compact smartphone that offers a seamless user experience. It features a 4.7-inch Retina display for stunning visuals and a powerful A8 chip for smooth performance. With its 8-megapixel camera and advanced features like Touch ID, the iPhone 6 is a reliable and stylish device.'},
        {id:2, 
          title: 'Apple Macbook', 
          price: 800, 
          image: 'src/assets/img/AppleMacbook.png', 
          description: 'The Apple MacBook is a powerful and sleek laptop that combines performance with elegance. It features a stunning Retina display, providing vibrant colors and sharp details. With its fast processors and ample storage, the MacBook offers a seamless computing experience for both work and entertainment.'
        },
        {id:3, 
          title: 'Apple Airpods Pro', 
          price: 300, 
          image: 'src/assets/img/AppleAirpods.png',
          description: 'The Apple AirPods Pro are wireless earbuds that offer an immersive audio experience. They feature active noise cancellation, which blocks out background noise for a focused listening experience. With their comfortable design and customizable fit, the AirPods Pro are perfect for all-day use.'
        },
        {id:4, 
          title: 'Apple Ipad', 
          price: 600, 
          image: 'src/assets/img/AppleIpad.png',
          description: 'The Apple iPad is a versatile tablet that offers a seamless blend of productivity and entertainment. With its vibrant Retina display and powerful A-series chip, the iPad delivers stunning visuals and smooth performance. Whether you"re browsing the web, watching videos, or working on creative projects, the iPad provides a portable and immersive experience.'
        },
        {id:5, 
          title: 'Samsung S10E', 
          price: 400, 
          image: 'src/assets/img/SamsungS10e.png',
          description: 'The Samsung S10E is a compact yet powerful smartphone that offers a premium mobile experience. It features a stunning Dynamic AMOLED display and a versatile dual-camera system for capturing impressive photos and videos. With its fast processor and ample storage, the S10E ensures smooth performance and plenty of space for your apps and files.'
        },
        {id:6, 
          title: 'Samsung Galaxy A70', 
          price: 800, 
          image: 'src/assets/img/SamsungA70.png',
          description: 'The Samsung Galaxy A70 is a feature-packed smartphone that offers an immersive multimedia experience. It boasts a large Super AMOLED display for vibrant visuals and a triple-camera setup that captures stunning photos in various conditions. With its long-lasting battery life and ample storage, the Galaxy A70 is perfect for gaming, streaming, and productivity on the go.'
        },
        {id:7, 
          title: 'Samsung S9', 
          price: 800, 
          image: 'src/assets/img/SamsungS9.png',
          description: 'The Samsung S9 is a premium smartphone that combines cutting-edge features with sleek design. It features a brilliant Super AMOLED display and a powerful camera that captures stunning photos and videos. With its fast processor and ample storage, the S9 delivers a seamless and enjoyable user experience.'
        },
        {id:8, 
          title: 'Oppo F9', 
          price: 200, 
          image: 'src/assets/img/OppoF9.png',
          description: 'The Oppo F9 is a stylish and feature-rich smartphone that offers a unique design and impressive performance. It features a stunning waterdrop display and a high-resolution dual-camera setup for capturing stunning photos. With its fast charging capabilities and ample storage, the Oppo F9 is a reliable companion for all your mobile needs.'
        },
        {id:9, 
          title: 'Xiaomi 9T', 
          price: 300, 
          image: 'src/assets/img/Xiaomi9T.png',
          description: 'The Xiaomi 9T is a powerful and feature-packed smartphone that offers exceptional value for money. It boasts a stunning Full HD+ AMOLED display and a pop-up selfie camera, providing an immersive viewing experience. With its long-lasting battery life and impressive performance, the Xiaomi 9T is perfect for gaming, multimedia consumption, and everyday use.'
        },
      ],
      searchTerm: '',
      selectedProduct: null,
    };
  },
  computed: {
    filteredProducts() {
      const term = this.searchTerm.toLowerCase();
      return this.products.filter(
        (product) => product.title.toLowerCase().includes(term)
      );
    },
  },
  methods: {
    selectProduct(product) {
      this.selectedProduct = product;
    },
  },
};
</script>

<template>
  <div class="product-big-title-area">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <div class="product-bit-title text-center mt-4">
                      <h2>Product Description</h2>
                  </div>
              </div>
          </div>
      </div>
  </div>

    <div class="searchProd">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div>
                        <input id="input" v-model="searchTerm" placeholder="Поиск товаров" />
                        <ul id="prodlist">
                        <li class="mt-3" type="button"  v-for="product in filteredProducts" :key="product.id" @click="selectProduct(product)">
                            {{ product.title }} - {{ product.price }}$ 
                        </li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-2">
                    <div v-if="selectedProduct">
                        <img id="imgS" :src="selectedProduct.image" alt="Product Image">
                    </div>
                </div>

                <div class="col-md-6">
                  <div v-if="selectedProduct">
                    <h2 id="h2Title">{{ selectedProduct.title }} <router-link to="/cart" type="button" class="buy btn btn-primary">BUY</router-link></h2>
                    <h4 id="h4Price">{{ selectedProduct.price }}$</h4>
                    <hr>
                    <p id="pDescription">{{ selectedProduct.description }}</p>
                  </div>
                </div>
            </div>
        </div>
    </div>        
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

#input {
    width: 300px;
    border: 3px solid #5a88ca;
}

#prodlist {
    list-style: none;
    font-weight: 600;
}

.quantity {
  float: left;
  margin-right: 15px;
}

.quantity input[type="number"] {
    border: 3px solid #5a88ca;
    padding: 5px;
    width: 50px;
}

#imgS {
  margin-top: 30px;
}

#h2Title {
  margin-top: 30px;
}

.buy {
  margin-left: 300px;
}
</style>