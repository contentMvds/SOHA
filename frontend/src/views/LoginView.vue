<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="4" md="4" xl="2">
            <v-card class="elevation-12">
              <v-row>
                <v-col cols="12" md="12">
                  <v-form ref="form" v-model="valid">
                    <v-card-text class="mt-4">
                      <h1 class="text-center display-3 teal--text">SOHA SGI</h1>
                      <h4 class="text-center mt-4">
                        Painel para acesso ao sistema da SOHA
                      </h4>
                      <v-text-field
                        prepend-icon="email"
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        type="text"
                        required
                      />

                      <v-text-field
                        prepend-icon="lock"
                        v-model="password"
                        counter="15"
                        :rules="passwordRules"
                        label="Senha"
                        type="password"
                        required
                      />

                      <div v-if="error" class="text-center error-message">
                        {{ error }}
                      </div>
                    

                    </v-card-text>
                    <div class="text-center">
                      <v-btn depressed :disabled="!valid" @click="login" :loading="isLoading"
                        >Acessar</v-btn
                      >
                    </div>
                  </v-form>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    isLoading: false,
    valid: true,
    password: "",
    passwordRules: [
      (v) => !!v || "Senha é obrigatória",
      (v) => (v && v.length >= 4) || "A senha deve ter pelo menos 4 caracteres",
      (v) =>
        (v && v.length <= 15) || "A senha deve ter no máximo 15 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is obrigatório",
      (v) => /.+@.+\..+/.test(v) || "O E-mail não é valido",
    ],
    error: "",
  }),

  methods: {
    async login() {
      try {
        this.isLoading = true;
        const response = await axios.post("http://localhost:3000/login", {
          email: this.email,
          password: this.password,
        }, {
          withCredentials: true
        });

        const token = response.data.token;
        localStorage.setItem("user_token", token);

        this.$router.push("/home");
      } catch (error) {
        if (error.message === "Network Error") {
          this.error = "Serviço indisponivel";
        }
        this.error =
          error.response.data.message || "Erro ao tentar fazer login.";
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
