<template>
    <header>
        <nav class="container">
            <a href="/"><img alt="WDEV" id="logo" src="@/assets/logo-07.png">

            </a>
            <img v-on:click="openMenu"  alt="Abrir menu" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg">

            <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>

            <div id="menu-items" :class ="{active:menuActive}">
                <a href="/"><img alt="WDEV" id="menu-logo" src="@/assets/logoSpa.png"></a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/categorias">Administrador</a></li>
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Contatos</a></li>

                </ul>

            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            menuActive: false
        }
    },
    methods: {
        openMenu: function() {
            this.menuActive = true;
        },
        closeMenu: function() {
            this.menuActive = false;
        }
    }
}
</script>

<style scoped>
    header {
        background-color: var(--color-background-nav);
        height: 90px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #logo{
        width: 220px;
        margin-left: 150px;
    }

    #menu-button{
        width: 30px;
    }
    
    nav{
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }

    #menu-overlay{
        position: fixed;
        top:0;
        left:0;
        width: 40%;
        height: 100vh;
        background-color: #000000;
        opacity: 0.8;
    }

    #menu-logo{
        width: 110px;
        margin-top: 40px;
    }

    #menu-items{
        position: fixed;
        top:0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    #menu-items.active{
        display: flex;
    }

    ul{
        list-style: none;
        height: 60px;
        align-items: center;
        
    }

    ul li {
        margin: 20px 0px;        
    }
    
    ul li a {
        color: var(--color-text-light);
        text-decoration: none;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    @media (min-width: 700px){
        #menu-button,
        #menu-logo,
        #menu-overlay {
            display: none;
        }

        #menu-items {
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        ul {
            display: flex;
            flex-direction: row;
        }

        ul li {
            margin: 0;
            margin-left: 30px;
            font-size: 18px;

        }
    }



</style>