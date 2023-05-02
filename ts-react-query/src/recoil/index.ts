import { atom } from 'recoil';

//interface
export interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

//atom
export const todoListState  = atom<Todo[]>({
  key: 'todoList',
  default: [],
})