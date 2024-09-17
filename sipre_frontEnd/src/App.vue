<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Menu from './components/Menu.vue';
import HijoMenu from './components/HijoMenu.vue';
import SubHijo from './components/SubHijo.vue';
import Boton from './components/Boton.vue';
import Footer from './components/Footer.vue';
import ContenedorHijo from './components/ContenedorHijo.vue';
import ContenedorPadrePerfil from './components/ContenedorPadrePerfil.vue';
import ContenedorPadreAjustes from './components/ContenedorPadreAjustes.vue';
import ContenedorPadreSalir from './components/ContenedorPadreSalir.vue';
import Header from './components/Header.vue';
import Login from  './components/Login.vue';
import Inicio from  './components/Inicio.vue';
import Ajustes from   './components/Ajustes.vue';
import Salir from './components/Salir.vue';

const sidebarExpanded = ref(false);
const currentSection = ref('perfil');

const toggleSidebar = () => {
  sidebarExpanded.value = !sidebarExpanded.value;
};

const showSection = (sectionId) => {
  currentSection.value = sectionId;
};


</script>


<template>
  <div id="app" class="flex h-screen bg-gray-60"> 
    <!-- Sidebar -->
    <div :class="['gradient-gold rouFull', sidebarExpanded ? 'w-64' : 'w-16']">
      <div class="flex items-center">
        <button @click="toggleSidebar" class="p-2 transition-transform duration-700" :class="{'translate-x-48': sidebarExpanded}">
          <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
        <Menu v-if="sidebarExpanded" />
      </div>
      <nav id="sidebar-nav" class="mt-4" v-if="sidebarExpanded">
        <HijoMenu titulo="Perfil" @click="showSection('perfil')" />
        <HijoMenu titulo="Inicio" @click="showSection('inicio')" />
        
        <ContenedorPadrePerfil>
          <ContenedorHijo titulo="CONEXION">
            <SubHijo titulo="Auxiliar" />
            <SubHijo titulo="Loma" />
            <SubHijo titulo="Lerma" />
          </ContenedorHijo>
        </ContenedorPadrePerfil>
        
        <ContenedorPadrePerfil>
          <ContenedorHijo titulo="AMBIENTE">
            <SubHijo titulo="Produccion" />
            <SubHijo titulo="Desarrollo" />
          </ContenedorHijo>
        </ContenedorPadrePerfil>
        
        <HijoMenu titulo="Ajustes" @click="showSection('ajustes')" />
        
        <ContenedorPadreAjustes>
          <ContenedorHijo titulo="CONFIGURAR">
            <SubHijo titulo="Perfil de usuario" />
            <SubHijo titulo="Notificaciones" />
            <SubHijo titulo="Privacidad y seguridad" />
            <SubHijo titulo="Apariencia" />
            <SubHijo titulo="Legal" />
          </ContenedorHijo>
        </ContenedorPadreAjustes>
        
        <HijoMenu titulo="Salir" @click="showSection('salir')" />
        
        <ContenedorPadreSalir>
          <Boton titulo="¿Deseas salir?" />
        </ContenedorPadreSalir>
      </nav>

    </div>

    <!-- Main Content -->
    <div class="flex-1">
      <Header />
      <main id="main-content" class="p-4">
        <nav>
          <!--<RouterLink to="/">CAMBIO</RouterLink>
          <RouterLink to="/about">About</RouterLink>-->
        </nav>
        <div v-show="currentSection === 'inicio'">
         <Inicio />
        </div>
        <div v-show="currentSection === 'perfil'">
            
          <!-- Aquí va el LOGIN -->
           <Login/>
        </div>
        <div v-show="currentSection === 'ajustes'">
          <Ajustes /> 
        </div>
        <div v-show="currentSection === 'salir'">
         <Salir />
        </div>
      </main>
    </div>
  </div>

  <RouterView />
  <Footer />
</template>


