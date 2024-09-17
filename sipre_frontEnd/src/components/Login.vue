<template>
    <div class="centered-form-container bg-[url('/Imagenes/fondo.png')] bg-cover bg-center">
          <div class="login-form bg-white bg-opacity-80 p-6 border border-gray-500 rounded-lg shadow-2xl">
                        <h2 class="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
                        <form id="login-form">
                            <div class="mb-2 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-gray-500 mr-2">
                                    <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
                                </svg>
                                <label for="username" class="block text-gray-700">Usuario</label>
                            </div>
                            <input type="text" id="username" class="w-full p-2 border border-gray-300 rounded mt-1" required>
                            <div class="mb-2 mt-2 flex items-center">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                                <label for="password" class="block text-gray-700">Contraseña</label>
                            </div>

                            
                            <div class="relative mb-2 mt-2">
                            <input :type="showPassword ? 'text' : 'password'" v-model="password" class="w-full p-2 border border-gray-300 rounded mt-1" required>
                            <button type="button" @click="togglePassword" class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 focus:outline-none">
                            <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.477 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.019 7-9.542 7S3.732 16.057 2.458 12z" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A8.964 8.964 0 0 1 12 19c-4.523 0-8.268-2.943-9.542-7a9.055 9.055 0 0 1 1.62-3.045M9.88 9.88a3 3 0 0 1 4.24 4.24m-.315 4.445a9.058 9.058 0 0 1-5.89 0m-3.696-3.696a9.054 9.054 0 0 1-1.42-1.675M4 4l16 16" />
                            </svg>
                            </button>
                            </div>
                            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600">Ingresar</button>
                        </form>
                    </div>
                  </div>
</template>

<script setup>

import { ref } from 'vue';
const showPassword = ref(false);
const password = ref('')
function togglePassword() {
    showPassword.value = !showPassword.value;
}
</script>
