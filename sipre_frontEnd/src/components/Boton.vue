<script setup>

const props = defineProps({
    titulo: String
})
</script>


<template>
   <button id="toggle-region" class="sidebar-link">{{titulo}}</button>
</template>

