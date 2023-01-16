import data from '../data.json'

export const useBoard = () => useState<[object]>('boards', () => data.boards)
export const useSidebar = () => useState<boolean>('sidebar', () => true)
export const useTaskModal = () => useState<boolean>('task', () => false)
