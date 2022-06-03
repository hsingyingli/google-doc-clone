import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StyledProvider} from './contexts/StyledProvider';

ReactDOM.render(
  <React.StrictMode>
    <StyledProvider>
      <App />
    </StyledProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
