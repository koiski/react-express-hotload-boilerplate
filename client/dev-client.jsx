// import "core-js/stable";
//import "regenerator-runtime/runtime";

import React from 'react';
import { render } from 'react-dom';

// Activate hot loader
import { App } from './HotApp';


render(<App />, document.getElementById('app-container'));

