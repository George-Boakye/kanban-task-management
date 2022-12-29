<template>
	<div class="board">
		<div class="board-canvas" :class="{ 'pl-[19rem]': showSidebar }">
			<div class="column" v-for="(column, index) in boardColumns" :key="index">
				<div class="column-title">
					<span class="column-circle mr-3 bg-green-400"></span>
					{{ column.name }} ({{ column.tasks.length }})
				</div>
				<div class="column-body inline-block overflow-y-auto">
					<div
						class="column-task dark:bg-gray-dark"
						v-for="(task, index) in column.tasks"
						:key="index">
						<h4 class="task-title dark:text-white">
							{{ task.title }}
						</h4>
						<div class="subtask">
							{{ completedSubtasks(task.subtasks) }} of
							{{ task.subtasks.length }} subtasks
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const boards = useBoard()
const showSidebar = useSidebar()
const route = useRoute()

const boardColumns = computed(() => {
	return boards.value.find((_b) => _b.name === title(route.params.id))?.columns
})

const completedSubtasks = (subtasks) => {
	return subtasks.filter((m) => m.isCompleted).length
}
</script>

<style scoped>
</style>