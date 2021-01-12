import css from "./Content.module.css";
import liftHole from "./../img/lift-hole.png";


function Content() {
	return (
		<div className={css.Content}>
			<h2>Главная Страница!</h2>
			<img src={liftHole} alt="lift" />
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores saepe, soluta ad rem non modi fugit et rerum, ullam dolores sed repellat possimus itaque dolorem exercitationem! Quasi, quas quae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eaque eum quia placeat cum eius molestias? Natus optio odit, earum voluptas harum exercitationem iure nesciunt qui itaque maiores ab quia.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse assumenda veniam consequuntur maiores repellat quis error corrupti, natus ab, provident autem. Numquam blanditiis nam voluptates labore? Placeat, obcaecati id!</p>
		</div>
	)
}

export default Content;