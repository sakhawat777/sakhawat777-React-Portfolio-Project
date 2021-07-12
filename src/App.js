import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './router/AppRoute';
import ServicePage from './pages/ServicePage';

function App() {
	return (
		<BrowserRouter>
			<AppRoute />
		</BrowserRouter>
	);
}

export default App;
