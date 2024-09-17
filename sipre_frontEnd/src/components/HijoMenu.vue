<script setup>

const props = defineProps({
    titulo: String
})

</script>

<template>
     <a href="#" data-section="inicio" class="sidebar-link">{{titulo}}</a>
</template>


