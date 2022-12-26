<template>
	<AddBoardModal v-show="openModal" @close-modal="(value) => openModal = value"/>
	<div>
		<Navbar :show-sidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
		<Sidebar :show-sidebar="showSidebar" @toggle-sidebar="toggleSidebar"  @open-board-modal="toggleModal"/>

		<div :class="{ 'ml-[19rem]': showSidebar }">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
const showSidebar = ref(true)
const openModal = ref(false);

const toggleModal = () => {
	 openModal.value = true
}

const toggleSidebar = () => {
	showSidebar.value = !showSidebar.value
	console.log(showSidebar)
}
</script>
