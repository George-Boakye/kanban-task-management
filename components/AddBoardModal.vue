<template>
    <modal>
        <template v-slot:header>
            <h1 class="text-lg mb-[24px] text-black">Add New Board</h1>
        </template>

        <template v-slot:body>
            <form @submit.prevent="createNewBoard">
                <label class="block mb-[8px] text-xs" for="name">Name</label>
                <input 
                    v-model="board.name" 
                    class="w-[416px] h-[40px] border-[rgba(130, 143, 163, 0.25)]" 
                    type="text"
                    placeholder="e.g. Web Design" 
                    required />

                <label class="block mb-[8px] mt-[24px] text-xs" for="columns">Columns</label>
                <div class="w-[416px] mb-[12px] flex items-center justify-between" v-for="(column, index) in board.columns"
                    :key="index">
                    <input class="w-[385px] column" type="text" v-model="column.name" required/>
                    <SvgComponent class="svg-mr-0" name="icon-cross" @click="removeColumn(index)"/>
                </div>
                <ButtonComponent label="Add New Column" type="button" btn-class="!block w-[416px] mb-[24px] btn-secondary"
                    @click="addColumn" />
                <ButtonComponent label="Create New Board" type="submit" btn-class="!block w-[416px] btn-primary" />
            </form>
        </template>
    </modal>
</template>

<script>
export default {
    data() {
        const columnTemplate = {
            name: null,
            tasks: [],
        }

        return {
            boardName: null,
            columnTemplate,
            columns: [{...columnTemplate}],
            isModalVisible: false,
            board: {
                name: null,
                columns: [{...columnTemplate}]
            },
        }
    },

    methods: {
        addColumn() {
            this.board.columns.push({...this.columnTemplate})
        },
        removeColumn(index) {
            this.board.columns.splice(index, 1)
        },
        createNewBoard() {
            const allBoards = useBoard()

            if (this.board.name) {
                const nextRoute = slug(this.board.name)

                allBoards.value = [ ...allBoards.value, this.board ]

                this.board = {
                    name: null,
                    columns: [{...this.columnTemplate}]
                }

                this.$router.push('/boards/' + nextRoute)

                this.$emit('close-modal', false)
            }
        },
    },

}
</script>

<style>

</style>
