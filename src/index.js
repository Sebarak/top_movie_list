require('file-loader?name=[name].[ext]!./index.html');
import "./style/main.scss";
import {App} from "./App/App";
import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);


root.render(<App />);