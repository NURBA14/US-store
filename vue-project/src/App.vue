<script >
export default {
        data() {
            return {
            isDropdownOpen: false,
            selectedLanguage: 'English',
            languages: ['Russian', 'English', 'France']
            };
        },
        methods: {
            toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
            },
            changeLanguage(language) {
            this.selectedLanguage = language;
            this.isDropdownOpen = false; 
            }
        }
};
</script>

<template>
  <div class="header-area">
        <div class="container">
            <div class="row">
                <div class="col-md-10">
                    <div class="user-menu">
                        <ul>
                            <li><a href="#" @click.prevent><i ></i> My Account</a></li>
                            <li><a href="#" @click.prevent><i ></i> Wishlist</a></li>
                            <li><a href="#" @click.prevent><i ></i> My Cart</a></li>
                            <li><a href="#" @click.prevent><i ></i> Checkout</a></li>
                            <li><a href="#" @click.prevent><i ></i> Login</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-2">
                    <div class="header-right">
                        <div class="dropdown" @click="toggleDropdown">
                        <button class="btn dropdown-toggle" type="button" id="languageDropdown" :aria-expanded="isDropdownOpen">
                            Language:{{ selectedLanguage }}
                        </button>
                        <ul class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="languageDropdown">
                            <li v-for="language in languages" :key="language" @click="changeLanguage(language)">
                            <a class="dropdown-item" href="#" @click.prevent>{{ language }}</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>    

  <div class="site-branding-area">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="logo">
                        <h1><a href="/home"><img src="src\assets\img\logo.png"></a></h1>
                    </div>
                </div>
                
                <div class="col-sm-6">
                    <div class="shopping-item border-primary">
                        <a href="#" @click.prevent>You have-
                            <span class="cart-amunt">$100</span> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
  </div>

  <div class="mainmenu-area">
        <div class="container">
            <div class="row">
                <nav class="navbar justify-content-center" data-bs-theme="dark">
                    <ul class="nav nav-pills">
                        <li class="nav-item me-5">
                            <router-link to="/home" class="nav-link" aria-current="page">HOME</router-link>
                        </li>
                        <li class="nav-item me-5">
                            <router-link to="/shop" class="nav-link">SHOP</router-link>
                        </li>
                        <li class="nav-item me-5">
                          <router-link to="/cart" class="nav-link">CART</router-link>
                        </li>
                        <li class="nav-item me-5">
                            <router-link to="/checkout" class="nav-link">CHECKOUT</router-link>
                        </li>
                        <li class="nav-item me-5">
                            <a href="#" class="nav-link">OTHERS</a>
                        </li>
                    </ul>
                </nav>      
            </div>
        </div>
  </div>

  <router-view></router-view>
</template>

<style>
.header-area {
    background: none repeat scroll 0 0 #f4f4f4;
}
.header-area a {
    color: #888;
}
.user-menu ul {
    list-style: outside none none;
    margin: 0;
    padding: 0;
}
.user-menu li {
    display: inline-block;
}
.user-menu li a {
    display: block;
    font-size: 13px;
    margin-right: 5px;
    padding: 10px;
}
.user-menu li a i.fa {
    margin-right: 5px;
}

.shopping-item {
    border: 1px solid #ddd;
    float: right;
    font-size: 18px;
    margin-top: 20px;
    padding: 10px;
    position: relative;
    right: 50px;
}
.cart-amunt {
    color: #5a88ca;
    font-weight: 700;
}

.navbar a {
    color: #000000;
}
</style>