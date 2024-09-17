<script setup>

const props = defineProps({
    titulo: String
})

</script>

<template>
     <a href="#" data-section="inicio" class="sidebar-link text-lg text-teal-50 ">{{titulo}}
        <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-400 group-hover:w-full"></span>
      

     </a>
</template>

<style scoped>
.sidebar-link {
  position:  relative;
  display: flex;
  text-decoration: none;
}

.sidebar-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.4s;
}

.sidebar-link:hover::after {
  width: 100%;
}

.sidebar-link span {
  margin-left: 1rem;
  opacity: 0;
  transition: opacity 0.4s;
}

.sidebar-link:hover span {
  opacity: 1;
}
</style>

