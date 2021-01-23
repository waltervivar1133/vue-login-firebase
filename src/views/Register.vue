<template>
  <div class="container-center background-register">
    <div class="card shadow ">
      <div class="card-title  bg-dark text-white py-2  ">
        Registro de Usuario
        </div>
        <div class="card-body ">
          <form @submit.prevent="createUsuario({email : email , password : pass})">
            <div>
              <label  for="email" class="form-label float-start">Correo Electronico</label>
              <input 
              class="form-control"
              type="email"
              id="email"
              v-model= "email"
              placeholder="Ingrese su correo">      
            </div>
            <div>
              <label for="password" class="form-label">Contraseña</label>
              <input 
              type="password"
              class="form-control"
              id="password"
              v-model= "pass"
              placeholder="Ingrese contraseña">
            </div>
            <div>
              <label for="new-password" class="form-label">Contraseña</label>
              <input 
              type="password"
              class="form-control"
              v-model= "pass2"
              id="new-password"
              placeholder="Ingrese de nuevo su contraseña">
            </div>
            <button type="submit" class="btn btn-dark btn-block my-3">Registrar</button>
             <router-link to="/">
               <button type="submit" class="btn btn-primary btn-block my-3">Tengo cuenta</button>
             </router-link> 
          
            
          </form>
           <div class="alert alert-danger" v-if="error">{{error}}</div>
        </div>
       
    </div>
  </div>
</template>


<script>
import {mapActions , mapState} from 'vuex'

export default {
    name: "Register",
    data() {
      return{
        email : '',
        pass : '',
        pass2: ''
      }
    },
    methods: {
      ...mapActions(['createUsuario'])
    },
    computed: {
      ...mapState(['error'])
    }
}
</script>