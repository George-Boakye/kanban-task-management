<template>
	<AddBoardModal v-show="openModal" @close-modal="(value) => (openModal = value)" />
	<div>
		<Navbar @toggle-sidebar="toggleSidebar"  />
		<div>
			<Sidebar @toggle-sidebar="toggleSidebar" @open-board-modal="toggleModal" />
			<slot />
		</div>
	</div>
</template>

<script setup>
const route  = useRoute();
const openModal = ref(false)


const toggleModal = () => {
	openModal.value = true
}

const toggleSidebar = () => {
	const showSidebar = useSidebar()
	showSidebar.value = !showSidebar.value
}
</script>
