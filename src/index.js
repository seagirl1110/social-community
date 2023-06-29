import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {user, setRerenderTree} from './data';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderTree = (data) => {
  root.render(
    <React.StrictMode>
      <App user={data} />
    </React.StrictMode>
  );
};

rerenderTree(user);
setRerenderTree(rerenderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
