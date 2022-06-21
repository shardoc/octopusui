import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './module/home/App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

reportWebVitals();
/*
<React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
 */


