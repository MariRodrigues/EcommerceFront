<template>
  <main>
    <nav id="menu" v-for="(categoria, index) in categories" :key="index">
        <ul>
	          <li>{{ categoria.nome }}</li>
	        </ul> 

      </nav>
    <section class="container">
      
      <h1 class="titulo-sessao">Produtos</h1>
      <section class="painel">
        <div class="produto" v-for="(product, index) in products" :key="index">          
              <div class="card">
                <img
                  class="card-img-top"
                  :src="product.url"
                  alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title"><strong>{{ product.nome }}</strong></h5>
                  <p class="card-text">{{ product.descricao }}</p>
                  <h5 class="card-text" id="valor"><strong>R$ {{product.valor}}</strong></h5>
                  <a href="#" class="btn btn-dark mt-auto">Adicionar no carrinho</a>
                </div>
              </div>
            </div>     
      </section>
    </section>
  </main>
</template>

<script>
import ecommerce from "@/services/ecommerce.js";

export default {
  name: "Home",
  data() {
    return {
      products: [],
      categories: [],
    };
  },
  mounted() {
    ecommerce.get("v1/Produto").then((response) => {
      this.products = response.data;

      ecommerce.get("v1/categoria").then((response) => {
      this.categories = response.data;
    });
    });
  },
};
</script>

<style scoped>
main {
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.container{
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}

#menu{
  width: 100%;
  background-color: #e9b000;
  height: 60px;
flex-wrap: wrap;
}

#menu ul {
	display: flex;
  justify-content: center;
  margin-top: 20px;

}

#menu ul li {
	list-style-type: none;
  padding-right: 14px;
  text-decoration: none;
  font-size: 17px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
}

#menu ul li a{
  text-decoration: none;
}

.produto {
  width: 100%;
  margin: 10px;
  justify-content: center;

}

#valor{
  color:#666563;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 25px;
}

.painel {
  display: flex;
  flex-wrap: wrap;
}

.produto img {
  width: 100%;
}

.card {
    align-items: center;
    text-align: center;
}

.card img {
    height: 400px;
}

.card-title{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.titulo-sessao {
    color: rgb(32, 32, 36);
    font-size: 30px;
    margin-top: 10px;
}

@media (min-width: 700px) {
  .produto {
    width: 370px;
  }

  .painel {
  flex-direction: row;
  align-items: center;
  justify-content: center;
}


}

</style>
