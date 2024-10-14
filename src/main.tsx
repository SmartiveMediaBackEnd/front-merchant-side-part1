import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx';

import "./index.css";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store/index.js';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

// </React.StrictMode >,

// if (typeof window !== 'undefined') {
// 	authToken = getCookie('authToken');
// }
// const isLocalHost = window.location.hostname.includes('localhost');
// const isMainDomain = window.location.hostname === "my.dookan.net";
// const isSubdomain = window.location.hostname.endsWith("dookan.net") && !isMainDomain;

// const basename = (isLocalHost || isSubdomain) && authToken ? '/admin' : '';
