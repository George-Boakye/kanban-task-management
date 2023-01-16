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
			<div class="column heading-xl bg-gradient-to-r from-[#E9EFFA] to-[rgba(233, 239, 250, 0.5)] dark:from-[#2B2C37]/30 dark:to-[#2B2C37]/10 rounded-lg">
				<div class="flex justify-center items-center h-full">
					<button class="flex items-center" @click.prevent="showEditModal = true">
						<SvgComponent name="icon-add-task-mobile" /> New Column
						</button>
				</div>
			</div>
		</div>
		<EditBoardModal v-show="showEditModal" @close-modal="showEditModal = false" />
		<AddTaskModal v-show="showTaskModal" @close-modal="closeTaskModal" />

	</div>
</template>


<script setup>
const boards = useBoard()
const showSidebar = useSidebar()
const showTaskModal = useTaskModal()
const route = useRoute()
const showEditModal = ref(false)


const boardColumns = computed(() => {
	return boards.value.find((_b) => title(_b.name) === title(route.params.id))?.columns
})

const completedSubtasks = (subtasks) => {
	return subtasks.filter((m) => m.isCompleted).length
}

const closeTaskModal = () => {
	const showTask = useTaskModal()
	showTask.value = false;
}
</script>

<style scoped>
</style>