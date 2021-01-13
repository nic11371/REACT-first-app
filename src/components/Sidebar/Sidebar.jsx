import { Link } from "react-router-dom";
import css from "./Sidebar.module.css";


function Sidebar() {
	return (

		<div className={css.Sidebar}>
			<nav className={css.Sidebar_item}>
				<Link to="/"  >Главная</Link>
			</nav>
			<nav className={css.Sidebar_item}>
				<Link to="/Articles"  >Статьи</Link>
			</nav>
			<nav className={css.Sidebar_item}>
				<Link to="/News">Новости</Link>
			</nav>
			<nav className={css.Sidebar_item}>
				<Link to="Contacts">Контакты</Link>
			</nav>
		</div>

	)
}

export default Sidebar;