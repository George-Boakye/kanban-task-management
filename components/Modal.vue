<template>
    <div id="modal-backdrop" class="modal-backdrop" @click="handleBackdropClick">
      <div class="modal bg-white max-w-max rounded-md p-8 dark:bg-black-dark" >
        <slot name="header">
        </slot>
  
        <slot name="body">
        </slot>
  
        <slot name="footer">
        </slot>
      </div>
    </div>
  </template>

<script setup>
const emit = defineEmits(['close-modal'])

const handleBackdropClick = (event) => {
    if (event.target.id == "modal-backdrop") {
      emit('close-modal', false)
    }
}
</script>

<style scoped>
 .modal-backdrop {
    z-index: 99;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:rgba(0, 0, 0, 0.5);
    mix-blend-mode: normal;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal{
    position: absolute;
    z-index: 100;
  }
</style>