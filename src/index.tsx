import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'assets/styles/index.scss'
import {BrowserRouter} from "react-router-dom";
import {QueryClientProvider} from "react-query";
import {queryClient} from "./services/api";
import { ReactQueryDevtools } from 'react-query/devtools'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <App />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
