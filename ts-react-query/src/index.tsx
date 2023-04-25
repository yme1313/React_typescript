import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {BrowserRouter} from 'react-router-dom'
import App from "./App"; 

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient(); // 생성

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
  </BrowserRouter>
);

