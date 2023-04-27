import React from 'react';
import { selector, useRecoilValue } from 'recoil';
import TodoItem from '../components/TodoItem';
import TodoItemCreator from '../components/TodoItemCreator';
import TodoListFilters from '../components/TodoListFilters';
import { todoListFilterState } from '../components/TodoListFilters';
import TodoListStats from '../components/TodoListStats';
import { atom } from 'recoil';

// Todo 안에 값들 타입 지정
export interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}
// Recoil 생성
export const todoListState = atom<Todo[]>({
  key: 'todoList',
  default: [],
});

// toListState와 todoListFilterState 파생하여 filteredTodoListState 생성
const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export default function TodoList() {
  // 동시에 읽고 쓰기 위함.
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
