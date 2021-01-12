import logo from './../img/logo.svg';
import "./Header.css";


const Header = () => {
	return (
		<div className='Header'>
			<img src={logo} alt="logo" className='App-logo' />
			<h1 className='Header-item'>
				ООО "Тулалифт"
			</h1>
		</div>
	)
}

export { Header };