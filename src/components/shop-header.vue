<template>
    <div>
        <router-link class="header-btn" :to="page.path" :key="page.name" v-for="page in pages">
            <img class="header-btn-logo" :src="getImgUrl(page.imageName)"/>
        </router-link>
        <router-link class="cart" to="/cart">
            <img class="cart-logo" :src="getImgUrl('cart')"/>
            <p class="cart-text">cart</p>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
            pages:[{
                name:"Главная",
                path:"/",
                imageName:"back",
                
            },
            {
                name:"Рецепты",
                path:"/recipe",
                imageName:"recipe",
                
            },
            {
                name:"Калькулятор",
                path:"/calc",
                imageName:"calc",
                
            },
            {
                name:"Жидкости",
                path:"/liquids",
                imageName:"liquid",
                
            },
            {
                name:"Аккаунт",
                path:"/account",
                imageName:"account",
                
            }]
        }
    },
    methods:{
        getImgUrl(pet) {
            var images = require.context('../assets/', false, /\.png$/)
            return images('./' + pet + ".png")
        }
    }
   
}
</script>
<style scoped>

    .router-link-exact-active{
        mix-blend-mode: overlay !important;
    }
    .header-btn:first-child{
        border-radius: 100%;
        background-blend-mode: lighten;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }
    .header-btn{
        position:relative;
        width: 70px;
        height: 70px;
        margin-left: 10px;
        left: 9%;
        top: 42%;
        display: inline-block;
        background: #532E92;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
    }
    .header-btn-logo{
        background: none;
        padding-left: 10px;
        padding-top: 10px;
    }
    
    .cart{
        position: absolute;
        width: 15%;
        height: 70px;
        left: 80%;
        top: 7%;
        padding-left: 10px;

        background: #532E92;
        border-radius: 25px;
    }
    .cart-text{
        position: absolute;
        width: 15%;
        height: 50px;
        left: 20%;
        bottom: 15%;
        font-family: 'Alata';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 50px;
        /* identical to box height */

        text-align: center;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;

        color: #FFFFFF;
        background: none;
    }
    .cart-logo{
        position: relative;
        top: 15%;
        left: 65%;
        background: none;
    }
</style>