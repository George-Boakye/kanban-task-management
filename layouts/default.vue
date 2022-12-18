<template>
	<div>
		<Navbar :show-sidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
		<Sidebar :show-sidebar="showSidebar" @toggle-sidebar="toggleSidebar" />

		<div :class="{ 'ml-[19rem]': showSidebar }">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
const showSidebar = ref(true)

const toggleSidebar = () => {
	showSidebar.value = !showSidebar.value
	console.log(showSidebar)
}
</script>
