<template>
	<div>
		<aside v-show="showSidebar" class="sidebar" aria-label="Sidebar">
			<a class="py-10 px-8 align-middle" href="#">
				<SvgComponent name="logo" class="h-6 text-black dark:text-white" />
			</a>

			<div class="py-3 overflow-auto">
				<h5 class="heading-sm mb-3 uppercase px-8">ALL BOARDS (3)</h5>
				<ul class="sidebar-list">
					<li class="sidebar-item">
						<NuxtLink active to="#" class="sidebar-link">
							<SvgComponent name="icon-board" />
							Platform Launch</NuxtLink
						>
					</li>
					<li class="sidebar-item">
						<NuxtLink to="#" class="sidebar-link">
							<SvgComponent name="icon-board" />
							Marketing Plan</NuxtLink
						>
					</li>
					<li class="sidebar-item">
						<NuxtLink to="#" class="sidebar-link">
							<SvgComponent name="icon-board" />
							Roadmap</NuxtLink
						>
					</li>
					<li class="sidebar-item">
						<NuxtLink href="#" class="sidebar-link text-purple items-center">
							<SvgComponent name="icon-add-task-mobile" class="text-currentColor" />
							Create New Board
						</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="px-3.5 relative mt-auto mb-6">
				<div
					class="bg-gray-light flex justify-center items-center py-3 rounded-md svg-mr-0 dark:bg-black-dark">
					<SvgComponent name="icon-light-theme" />

					<label class="theme-toggle">
						<input type="checkbox" value="" class="sr-only peer" @click="toggleTheme" />
						<div
							class="w-11 h-6 bg-purple rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
					</label>

					<SvgComponent name="icon-dark-theme" />
				</div>

				<a
					class="flex heading-md items-center px-3.5 mt-4"
					href="#"
					@click.prevent="$emit('toggle-sidebar')">
					<SvgComponent name="icon-hide-sidebar" />
					Hide Sidebar
				</a>
			</div>
		</aside>
		<div v-show="!showSidebar">
			<a
				class="absolute bottom-8 bg-purple p-6 rounded-r-full"
				href="#"
				@click.prevent="$emit('toggle-sidebar')">
				<SvgComponent name="icon-show-sidebar" />
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	showSidebar: Boolean,
})

const theme = ref('light')

const toggleTheme = () => {
	console.log('changing theme')

	if (theme.value !== 'dark') {
		theme.value = 'dark'
		return document.documentElement.classList.add('dark')
	}

	theme.value = 'light'
	return document.documentElement.classList.remove('dark')
}
</script>
