import React from 'react';
import './App.css';
import CommandPanel from './components/CommandPanel';
import NotificationBar from './components/NotificationBar';
import ParameterDisplay from './components/ParameterDisplay';

function App() {
	return (
		<div className="App">
			<header>
				<h1>Power Module</h1>
			</header>
			<div className="Dashboard">
				<div className="Main">
					<ParameterDisplay />
					<CommandPanel />
				</div>

				<NotificationBar />
			</div>
		</div>
	);
}

export default App;
