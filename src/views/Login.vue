<template>
 <div class="container-center background-login">
    <div class="card shadow ">
      <div class="card-title  bg-primary text-white py-2  ">
          Accede a tu cuenta
        </div>
        <div class="card-body ">
          <form  @submit.prevent="autenticarUsuario({email: email,  password : pass})">
            <div>
              <label  for="email" class="form-label left">Correo Electronico</label>
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
           
            <button type="submit" class="btn btn-primary btn-block my-3">Ingresar</button>
             <router-link to="/register">
               <button type="submit" class="btn btn-dark btn-block my-3">Crear cuenta</button>
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
    name: "Login",
    data() {
      return{
        email : '',
        pass : '',
       
      }
    },
    methods: {
      ...mapActions(['autenticarUsuario'])
    },
    computed: {
      ...mapState(['error']),
       
    }
}
</script>