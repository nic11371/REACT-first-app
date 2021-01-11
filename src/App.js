import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import Content from './components/content';
import Footer from './components/footer'


const App = () => {
	return (
		<div className="App App-header">
			<Header />
			<img src={logo} className="App-logo" alt="logo" />

			<Content />
			<Footer />
		</div>
	);
}

export default App;
