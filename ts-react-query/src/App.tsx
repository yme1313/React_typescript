import React from 'react';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes} from "react-router-dom";

import Home from './containers/Home';
import Movie from "../src/containers/Movie";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
    </Routes>   
    <ReactQueryDevtools initialIsOpen={true} /> 
    </>
  );
}
