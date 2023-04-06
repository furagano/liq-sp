<template>
    <div>
        <!-- header -->
        <div>
            <button @click="goToMainPage" class="back"> <img class="back-logo" src="./../assets/back.png"/></button>
            <button @click="goToLiquids" class="header-btn"> <img class="header-btn-logo" src="./../assets/liquid.png"/></button>
            <button disabled class="header-btn active"> <img class="header-btn-logo active" src="./../assets/recipe.png"/></button>
            <button @click="goToCalc" class="header-btn"> <img class="header-btn-logo" src="./../assets/calc.png"/></button>
            <button @click="goToAccount" class="header-btn"> <img class="header-btn-logo" src="./../assets/account.png"/></button>
            <button @click="goToCart" class="cart"><p class="cart-text">cart</p> <img class="cart-logo" src="../assets/cart.png"></button>
        </div>
        <!-- header -->

        
    </div>
</template>
<script>
export default {
    methods:{
        goToMainPage(){
        this.$router.push('/')
        },
        goToAccount(){
            this.$router.push('/account')
        },
        goToCalc(){
            this.$router.push('/calc')
        },
        goToLiquids(){
            this.$router.push('/liquids')
        },
        goToCart(){
            this.$router.push('/cart')
        }
    }  
    
}
</script>
<style>
    .back{
        position: absolute;
        width: 70px;
        height: 70px;
        border-radius: 100%;
        left: 5%;
        top: 5%;

        background: #532E92;
    }
    .back-logo{
        background: none;
        background-blend-mode: lighten;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }
    .header-btn{
        position: relative;
        width: 70px;
        height: 70px;
        margin-left: 10px;
        left: 9%;
        top: 42%;

        background: #532E92;
        border-radius: 20px;
    }
    .header-btn-logo{
        background: none;
    }
    .active{
        mix-blend-mode: overlay !important;
    }.cart{
        position: absolute;
        width: 15%;
        height: 70px;
        left: 80%;
        top: 5%;

        background: #532E92;
        border-radius: 25px;
    }
    .cart-text{
        position: absolute;
        width: 15%;
        height: 50px;
        left: 20%;

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
        left: 30%;
        background: none;
    }
</style>