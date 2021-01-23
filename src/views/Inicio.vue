<template>
  <div>
        <h1>inicio</h1>
           <button @click="cerrarSesion" v-if="existeUsuario" class="btn btn-dark mr-2">Cerrar Sesion</button>
    
  </div>
</template >

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existeUsuario'])
  }
}
</script>