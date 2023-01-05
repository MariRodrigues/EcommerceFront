<template>
  <main>
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
                  <h5 class="card-text">R$ {{product.peso}}</h5>
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
    };
  },
  mounted() {
    ecommerce.get("v2/Produto").then((response) => {
      this.products = response.data;
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

.produto {
  width: 100%;
  margin: 10px;
  justify-content: center;

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
    height: 200px;
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
