<script setup>
import { reactive } from 'vue';
import axios from 'axios';


const checkout = reactive({
    name: '',
    country: '',
    town: '',
    address: '',
    email: '',
    phone: ''
}) 

const submit = () => {
    console.log('submit');
    axios.post('/api/checkout', checkout)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
}
</script>

<template>
    <div class="checkout-big-title-area">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <div class="checkout-bit-title text-center mt-4">
                      <h2>Checkout</h2>
                  </div>
              </div>
          </div>
      </div>
    </div>    
    
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <form @submit.prevent="submit">
                <h1>BILLING DETAILS</h1>
                <input id="name" type="text" class="form-control my-4" v-model="checkout.name" placeholder="Имя и Фамилия">
                <input id="country" type="text" class="form-control my-4" v-model="checkout.country" placeholder="Страна">
                <input id="town" type="text" class="form-control my-4" v-model="checkout.town" placeholder="Город">
                <input id="address" type="text" class="form-control my-4" v-model="checkout.address" placeholder="Адрес">
                <input id="email" type="text" class="form-control my-4" v-model="checkout.email" placeholder="Email">
                <input id="phone" type="text" class="form-control my-4" v-model="checkout.phone" placeholder="Номер телефона">
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </div>
    </div>
</div>  

</template>

<style>
.checkout-bit-title{
    background-color: #5a88ca;
}
.checkout-bit-title h2 {
  font-size: 50px;
  font-weight: 400;
  padding: 50px 0;color: #fff;
}
</style>