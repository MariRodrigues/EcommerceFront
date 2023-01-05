<template>
  <main>
    <div class="card text-center">
      <div class="card-header">
        <h5></h5>
        <h5>Categorias</h5>
        <button type="button" class="btn btn-success" @click="$root.$emit('open-modal')">
          <a>Nova categoria</a>
        </button>
      </div>
      <div class="card-body">
        <table class="table table-hover table-sm">
          <thead class="table-dark">
            <tr>
              <th><h5>Categorias</h5></th>
              <th><h5>Status</h5></th>
              <th><h5>Data criação</h5></th>
              <th><h5>Data Modificação</h5></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody
            v-for="(product, index) in products"
            :key="index"
            :href="product.descricao"
          >
            <tr>
              <td>{{ product.nome }}</td>
              <td>{{ product.status }}</td>
              <td>{{ product.dataCriacao }}</td>
              <td>{{ product.dataModificacao }}</td>
              <td>
                <button type="button" class="btn btn-table btn-secondary">
                  Visualizar
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-table btn-dark">
                  Deletar
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-table btn-primary" @click="$root.$emit('open-modal-editar')">
                  Editar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer text-muted">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <CreateCategoria></CreateCategoria>
    <EditCategoria></EditCategoria>
  </main>
</template>

<script>
import ecommerce from "@/services/ecommerce.js";
import CreateCategoria from "@/pages/CreateCategoria.vue";
import EditCategoria from "@/pages/EditCategoria.vue";

export default {
  name: "Categorias",
  components: {
    CreateCategoria,
    EditCategoria,
  },

  data() {
    return {
      products: [],
    };
  },
  mounted() {
    ecommerce.get("v2/categoria").then((response) => {
      this.products = response.data;
    });
  },
};
</script>

<style scoped>
main {
  background-color: var(--color-background-home);
  width: auto;
  margin: 50px;
  height: 100%;
}

.card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.text-top {
  color: var(--color-text-dark);
  font-size: 22px;
}

#subscribe {
  width: 340px;
}

.btn a {
  text-decoration: none;
  color: white;
}

.btn-table {
  width: 100%;
}

.text-bottom {
  color: var(--color-text-dark);
  font-size: 18px;
  margin-top: 20px;
}

@media (min-width: 700px) {
  #subscribe {
    width: 370px;
  }
}
</style>
