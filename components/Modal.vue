<template>
    <div class="modal-backdrop" @click="handleBackdropClick">
      <div class="modal bg-white max-w-max rounded-md p-8" >
        <slot name="header">
        </slot>
  
        <slot name="body">
        </slot>
  
        <slot name="footer">
        </slot>
      </div>
    </div>
  </template>

<script >
export default {
    methods:{
        handleBackdropClick(e){
			if (e.target.className == "modal-backdrop") {
				this.$emit('close-modal', false)
			}
		}
    }
}
</script>

<style scoped>
 .modal-backdrop {
    z-index: 1;
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
    z-index: 4;
  }
</style>