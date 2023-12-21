<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="12">
            <v-row>
              <v-col cols="12" md="12">
                <h1 class="text-center display-3 teal--text">
                  Bem vindo a pagina principal do SOHA SGI
                </h1>

                <h4 class="text-center mt-12">
                  Bem-vindo ao Sistema de Gerenciamento de Rotas! Em um mundo em
                  constante movimento, a eficiência no gerenciamento de rotas
                  não é apenas uma necessidade, mas uma exigência. Estamos
                  empolgados por você ter escolhido nossa plataforma para
                  otimizar e simplificar suas operações logísticas. Neste
                  ambiente robusto e intuitivo, você encontrará todas as
                  ferramentas necessárias para planejar, monitorar e adaptar
                  suas rotas com precisão. Não importa se você está gerenciando
                  uma pequena frota local ou coordenando operações globais,
                  nosso sistema foi projetado para atender às suas necessidades
                  específicas.
                </h4>
                <v-row class="mt-18">
                  <v-col cols="12" md="4">
                    <card-componenet />
                  </v-col>
                  <v-col cols="12" md="4">
                    <card-componenet />
                  </v-col>
                  <v-col cols="12" md="4">
                    <card-componenet />
                  </v-col>
                </v-row>
                <div class="text-center mt-12">
                  <v-btn color="success" large @click="logout"
                    >Click aqui para sair da plataforma</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  components: {
    "card-componenet": CardComponent,
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>
