<template>
  <div class="container">
    <div class="card">
      <div class="card-title">
        <div class="card-content">
          <form>
            <div>
              <label for="email">Correo Electronico</label>
              <input 
              type="email"
              id="email"
              v-model= "email"
              placeholder="Ingrese su correo">      
            </div>
            <div>
              <label for="password">Contraseña</label>
              <input 
              type="password"
              id="password"
              v-model= "pass"
              placeholder="Ingrese contraseña">
            </div>
            <div>
              <label for="new-password">Contraseña</label>
              <input 
              type="password"
              v-model= "pass2"
              id="new-password"
              placeholder="Ingrese de nuevo su contraseña">
            </div>
            <button type="submit">Registrar</button>
            
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    name: "Register",
    data() {
      return{
        email : '',
        pass : '',
        pass2: ''
      }
      
    }
}
</script>