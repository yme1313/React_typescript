import React from 'react';
import { selector, useRecoilValue } from 'recoil';
import TodoItem from '../components/TodoItem';
import TodoItemCreator from '../components/TodoItemCreator';
import TodoListFilters from '../components/TodoListFilters';
import { todoListFilterState } from '../components/TodoListFilters';
import TodoListStats from '../components/TodoListStats';
import { atom } from 'recoil';
import styled from 'styled-components';

// Interface
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
      case '1':
        return list.filter((item) => item.isComplete);
      case '2':
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
    <Wrapper>
      <Title>Todo List</Title>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border : 1px solid rgb(66, 165, 245);
  border-radius : 4px;
  width : 400px;
  margin : 0 auto;
  margin-top : 200px;
  text-align : center;
  padding : 20px;
`;

const Title = styled.h1`
  color : rgb(66, 165, 245);
  font-weight : bold;
`