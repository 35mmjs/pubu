import React from 'react';
import ReactDOM from 'react-dom';
import GAnalytics from 'ganalytics';
import App from '@components/App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('app'));

if (process.env.NODE_ENV === 'production') {
	window.ga = new GAnalytics('UA-XXXXXXXX-X');

	// Additional production-specific code...
}
