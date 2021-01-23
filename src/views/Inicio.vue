<template>
  <div> 
     <Header/>
      <div class="container-fluid py-2 d-flex flex-row-reverse sticky-top">
      <button @click="cerrarSesion" v-if="existeUsuario" class="btn btn-dark mr-2">Cerrar Sesion</button>
      </div>
      <Contenido/>
      
           
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Header from '../components/Header'
import Contenido from '../components/Contenido'
export default {
  name : "Inicio",
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existeUsuario'])
  },
  components:{
    Header,
    Contenido
  }
}
</script>