import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styles from './Index.module.less';

ReactDOM.render(
    <React.StrictMode>
        <div >
            <App />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
