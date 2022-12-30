<template>
	<Modal @close-modal="emit('close-modal')">
		<template v-slot:header>
			<h1 class="text-lg mb-[24px] text-black">Edit Board</h1>
		</template>

		<template v-slot:body>
			<form @submit.prevent="editBoard">
				<label class="block mb-[8px] text-xs" for="name">Name</label>
				<input
					v-model="board.name"
					class="w-[416px] h-[40px] border-[rgba(130, 143, 163, 0.25)]"
					type="text"
					placeholder="e.g. Web Design"
					disabled
					required />

				<label class="block mb-[8px] mt-[24px] text-xs" for="columns">Columns</label>
				<div
					class="w-[416px] mb-[12px] flex items-center justify-between"
					v-for="(column, index) in board.columns"
					:key="index">
					<input class="w-[385px] column" type="text" v-model="column.name" required />
					<SvgComponent class="svg-mr-0" name="icon-cross" @click="removeColumn(index)" />
				</div>
				<ButtonComponent
					label="Add New Column"
					type="button"
					btn-class="!block w-[416px] mb-[24px] btn-secondary"
					@click="addColumn" />
				<ButtonComponent
					label="Edit Board"
					type="submit"
					btn-class="!block w-[416px] btn-primary" />
			</form>
		</template>
	</Modal>
</template>

<script setup>
const emit = defineEmits(['close-modal'])

const boards = useBoard()
const route = useRoute()

const activeBoard = boards.value.find((_b) => _b.name === title(route.params.id))

const board = ref({ name: null, columns: [], ...activeBoard })

const editBoard = () => {
	activeBoard.value = board.value
    emit('close-modal', false)
}

const addColumn = () =>
	board.value.columns.push({
		name: null,
		tasks: [],
	})

const removeColumn = (index) => board.value.columns.splice(index, 1)
</script>

<style>
</style>
