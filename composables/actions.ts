import { useTaskModal } from "./state"

export function toggleSidebar() {
	const sidebar = useSidebar()
	sidebar.value = !sidebar.value
}

export function toggleTaskModal(){
	const taskModal = useTaskModal()
	taskModal.value = !taskModal.value
}