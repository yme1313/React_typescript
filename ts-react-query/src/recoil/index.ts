import { atom } from 'recoil';

export const todoListState  = atom<string[]>({
  key: 'todoList',
  default: [],
})