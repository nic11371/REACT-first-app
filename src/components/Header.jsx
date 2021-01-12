import logo from './../img/logo.svg';
import "./Header.css";


const Header = () => {
	return (
		<div className='Header'>
			<img src={logo} alt="logo" className='Header-logo' />
			<h1 className='Header-item'>
				ООО "Тулалифт"
			</h1>
			<span>Тел. +7(472)34-31-37</span>
		</div>
	)
}

export { Header };