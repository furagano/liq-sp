<template>
    <div class="App">
        <div>
            <p class="poster">you are <br> what <br> you smoke</p>
            <div class="grand"></div>
            <div class="smoke"></div>
        </div>
        <div>
            <button @click="goToLiquids" class="btn"> <img class="btn-logo" src="./../assets/liquid.png"/> <p class="btn-text">liquids</p> </button>
            <button @click="goToRecipe" class="btn"> <img class="btn-logo" src="./../assets/recipe.png"/> <p class="btn-text">recipe</p> </button>
            <button @click="goToCalc" class="btn"> <img class="btn-logo" src="./../assets/calc.png"/> <p class="btn-text">calculate</p> </button>
            <button @click="goToAccount" class="btn"> <img class="btn-logo" src="./../assets/account.png"/> <p class="btn-text">account</p> </button>
        </div>
        

    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
        
    },
    methods: {
      goToLiquids(){
        this.$router.push('/liquids')
      },
      goToAccount(){
        this.$router.push('/account')
      },
      goToRecipe(){
        this.$router.push('/recipe')
      },
      goToCalc(){
        this.$router.push('/Calc')
      }  
    }
}
</script>
<style>
    *{
        margin: 0;
        padding: 0;
        height: 70%;
        background: #E1A3EB;
    }
    @font-face {
    font-family: Alata;
    src: url('~@/assets/fonts/Alata-Regular.ttf');
    }
    .poster{
        position: absolute;
        width: 825px;
        height: 450px;
        left: 25px;
        top: 85px;

        font-family: 'Alata';
        font-style: normal;
        font-weight: 400px;
        font-size: 96px;
        line-height: 150px;
        /* or 156% */

        text-align: center;
        letter-spacing: 0.11em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'cpsp' on;

        color: #000000;
    }
    .grand{
        position: absolute;
        width: 699px;
        height: 441px;
        left: 52.4%;
        top: 85px;
        background: url(./../assets/grandmodther.png);
    }
    .smoke{
        position: absolute;
        width: 800px;
        height: 53%;
        left: 49%;
        top: 32%;

        background: url(./../assets/smoke.png);
        background-size: 100% 100%;
        mix-blend-mode: normal;
        transform: rotate(167.24deg);
    }
    .btn{
        position: relative;
        width: 549px;
        height: 600px;
        left: 10%;
        margin-right: 12%;
        margin-bottom: 12%;
        top: 1022px;

        background: #532E92;
        border-radius: 50px;

        align-items: center;
    }
    .btn-logo{
        position: relative;
        width: 267.07px;
        height: 270px;
        background: none;
    }
    .btn-text{
        position: absolute;
        width: 546px;
        height: 120px;
        padding-top: 10%;
        

        font-family: 'Alata';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 0px;
        /* or 0% */

        display: block;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;
        background: none;
        color: #FFFFFF;

    }
    
    

    
</style>