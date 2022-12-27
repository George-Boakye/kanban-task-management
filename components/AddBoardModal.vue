<template>
    <modal>
        <template v-slot:header>
            <h1 class="text-lg mb-[24px] text-black">Add New Board</h1>
        </template>

        <template v-slot:body>

            <label class="block mb-[8px] text-xs" for="name">Name</label>
            <input class="w-[416px] h-[40px] border-[rgba(130, 143, 163, 0.25)]" name="name" type="text"
                placeholder="e.g. Web Design" v-model="boardName" />
            <label class="block mb-[8px] mt-[24px] text-xs" for="columns">Columns</label>
            <div class="w-[416px] mb-[12px] flex items-center justify-between" v-for="(column, index) in columns"
                :key="index">
                <input class="w-[385px]" type="text" :class="column" v-model="columns[index].name" />
                <SvgComponent class="svg-mr-0" name="icon-cross" @click="removeColumn(index)"/>
            </div>
            <ButtonComponent label="Add New Column" btn-class="block w-[416px] mb-[24px] btn-secondary"
                @click="addColumn" /><br />
            <ButtonComponent label="Create New Board" btn-class="w-[416px] btn-primary" @click="createNewBoard" />

        </template>
    </modal>
</template>

<script>
const boardTemplate = {
    name: '',
    columns: []
};
const columnTemplate = {
    name: '',
    tasks: []
}
export default {
    props:{
        openModal:Boolean
    },
    data() {
        return {
            boardName: '',
            columns: [columnTemplate],
            boards: [],
            isModalVisible: false,
        }
    },

    methods: {
        addColumn() {
            this.columns.push(columnTemplate)
        },
        removeColumn(index) {
            this.columns.splice(index, 1)
        },
        createNewBoard() {
            if (this.boards.length === 0) {
                this.boards[0] = {
                    name: this.boardName,
                    columns: this.columns
                }
            } else {

                this.boards[this.boards.length] = {
                    name: this.boardName,
                    columns: this.columns
                }
            }
            this.boardName = ''
            this.columns = ['']
            this.$emit('close-modal', false)
        },
    },

}
</script>

<style>

</style>
