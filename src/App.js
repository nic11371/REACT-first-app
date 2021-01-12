import './App.css';
import { Header } from './components/Header';
import Content from './components/Content';
// import Footer from './components/Footer';
import Sidebar from './components/Sidebar';


const App = () => {
	return (
		<div className="App">
			<Header />
			<Sidebar />
			<Content />
		</div>
	);
}

export default App;
