import css from "./Sidebar.module.css";

const Sidebar = () => {
	return (
		<div className={css.Sidebar}>
			<nav className={`${css.Sidebar_item} ${css.activ}`}>
				<a href="#s">Главная</a>
			</nav>
			<nav className={css.Sidebar_item}>
				<a href="#s">Статьи</a>
			</nav>
			<nav className={css.Sidebar_item}>
				<a href="#s">Новости</a>
			</nav>
			<nav className={css.Sidebar_item}>
				<a href="#s">Контакты</a>
			</nav>
		</div>
	)
}

export default Sidebar;