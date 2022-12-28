import data from '../data.json'

export const useBoard = () => useState<[object]>('color', () => data.boards)
