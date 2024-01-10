import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { TerminalContextProvider } from 'react-terminal';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<TerminalContextProvider>
			<App />
		</TerminalContextProvider>
	</React.StrictMode>
);
