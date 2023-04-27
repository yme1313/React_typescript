import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes } from 'react-router-dom';

import Home from './containers/Home';
import Movie from '../src/containers/Movie';
import MuiTest from '../src/containers/MuiTest';
import TodoList from './containers/TodoListContainer';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/muitest" element={<MuiTest />} />
        <Route path="todo" element={<TodoList />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}
