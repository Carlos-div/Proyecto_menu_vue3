<template>
        <button id="toggle-region" class="sidebar-link">{{titulo}}</button>
        <ul id="region-menu" class="submenus">
                
                <slot>
                    
                </slot>
              </ul>
</template>

<script setup>
const props = defineProps({
    titulo: String
})
</script>

