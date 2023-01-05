<template>
    <modal @close-modal="emit('close-modal')">
        <template v-slot:header>
            <h1 class="text-lg mb-[24px] text-black dark:text-white">Add New Task</h1>
        </template>
        <template v-slot:body>
            <form @submit.prevent="createTask">
                <label class="block mb-[8px] text-xs dark:text-white" for="title">Title</label>
                <input class="w-[416px] h-[40px] border-[rgba(130, 143, 163, 0.25)] dark:bg-black-dark" type="text"
                    placeholder="e.g. Take coffee break" required v-model="taskTemplate.title" />
                <label class="block mb-[8px] mt-[24px] text-xs dark:text-white" for="description">Description</label>
                <textarea class="mb-[24px] w-[416px] h-[135px] border-[rgba(130, 143, 163, 0.25)] dark:bg-black-dark"
                    type="text"
                    placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
                    required v-model="taskTemplate.description">
				</textarea>
                <label class="block mb-[8px] text-xs dark:text-white" for="title">Subtasks</label>
                <div class="mb-[12px]" v-for="(task, index) in taskTemplate.subtasks" :key="index">
                    <input class="w-[416px] h-[40px] border-[rgba(130, 143, 163, 0.25)] dark:bg-black-dark" type="text"
                        placeholder="e.g. Make coffee" required v-model="task.title" />
                </div>
                <ButtonComponent class="dark:bg-white dark:text-purple" label="Add New Subtask" type="button"
                    btn-class="!block w-[416px] mb-[24px] btn-secondary" @click="addSubtask" />
                <label class="block mb-[8px] text-xs dark:text-white" for="title">Status</label>
                <select class="mb-[24px] w-[416px] h-[40px] border-[rgba(130, 143, 163, 0.25)] dark:bg-black-dark"
                    v-model="taskTemplate.status">
                    <option v-for="column in activeB.columns" :value="column.name" :key="column.name">
                        {{ column.name }}
                    </option>
                    <br />
                </select>
                <ButtonComponent label="Create Task" type="submit" btn-class="!block w-[416px] btn-primary" />
            </form>
        </template>
    </modal>
</template>

<script setup>
const emit = defineEmits(['close-modal'])

const boards = useBoard()
const route = useRoute()

const subtaskTemplate = {
    title: null,
    isCompleted: false,
}

const taskTemplate = ref({
    title: null,
    description: null,
    status: null,
    subtasks: [{ ...subtaskTemplate }],
})

const addSubtask = () => {
    taskTemplate.value.subtasks.push({ ...subtaskTemplate })
}

let activeB = computed(() => {
    return []
})


if (route.params.id) {
    activeB = computed(() => {
        return boards.value.find((_b) => title(_b.name) === title(route.params.id))
    });
}


const column = computed(() => {
    return activeB.value.columns.find(_n => _n.name === taskTemplate.value.status);
}
)

const createTask = () => {
    column.value.tasks.push({ ...taskTemplate });
    emit('close-modal', false)
};
</script>

<style>

</style>
