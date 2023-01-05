<template>
  <div class="">
    <div
      class="modal show fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      style="display: block"
      v-if="visible"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Editar categoria
            </h5>
          </div>
          <div class="modal-body">
            <form @submit.prevent="salvar">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Nome</label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    id="inputNome"
                    placeholder="Nome da categoria"
                    v-model="categoria.nome"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal" @click="visible=false">
              Fechar
            </button>
            <button type="submit" class="btn btn-primary" @click="salvar">Salvar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show" v-if="visible"></div>
  </div>
</template>

<script>
import ecommerce from "@/services/ecommerce.js";

export default {
  name: "EditCategoria",
  data() {
    return {
      categoria: {
        Id: 0,
        nome: "",
      },
      visible: false
    };
  },

  methods: {
    editar() {
      ecommerce.put("v2/Categoria", this.categoria).then((response) => {
        console.log(response);

        this.visible = false;
        this.$router.push("/Categorias");
      });
    },
  },

  created() {
    this.$root.$on('open-modal-edit', () => { this.visible = true})
  }
};
</script>

<style scoped>
@media (min-width: 700px) {
  #subscribe {
    width: 370px;
  }
}
</style>
