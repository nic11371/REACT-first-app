import "./Sidebar.css";

const Sidebar = () => {
	return (
		<div className='Sidebar'>
			<nav className='Sidebar-item'>
				<a href="#s">Главная</a>
			</nav>
			<nav className='Sidebar-item'>
				<a href="#s">Статьи</a>
			</nav>
			<nav className='Sidebar-item'>
				<a href="#s">Новости</a>
			</nav>
			<nav className='Sidebar-item'>
				<a href="#s">Контакты</a>
			</nav>
		</div>
	)
}

export default Sidebar;