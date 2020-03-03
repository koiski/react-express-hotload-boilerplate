import "core-js/stable";
import "regenerator-runtime/runtime";
import HotApp from './HotApp';
import React from 'react';
import { render } from 'react-dom';

console.log("yay");

// ReactDOM.render(, document.getElementById('app-container'));

const root = document.createElement('div');
document.body.appendChild(root);

render(
    <HotApp />,
    root
)
