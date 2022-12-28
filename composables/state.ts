import data from '../data.json'

export const useBoard = () => useState<[object]>('boards', () => data.boards)
