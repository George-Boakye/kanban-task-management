<template>
	<header class="relative flex items-center justify-start bg-white border-b border-b-light text-black dark:bg-gray-dark dark:border-dark dark:text-white">
		<nav class="flex flex-nowrap w-full items-center justify-between">
			<a
				class="ml-10 mr-9 pr-8 p-0 border border-y-0 border-l-0 border-r-light py-10 dark:border-r-dark"
				href="#">
				<SvgComponent name="logo" class="h-6 mr-3 text-black dark:text-white" />
			</a>
			<div class="flex items-center flex-grow">
				<span class="heading-xl" :class="{ 'ml-[81px]': showSidebar }">{{ title(route.params.id) }}</span>
				<button class="btn btn-primary ml-auto">
					<SvgComponent name="icon-add-task-mobile" />
					<span class="hidden md:block">Add New Task</span>
				</button>
				<SvgComponent class="svg-mr-0 mx-8" name="icon-vertical-ellipsis" />
			</div>
		</nav>
	</header>
</template>

<script setup>
const showSidebar = useSidebar();
const route = useRoute()
</script>

<style scoped></style>
