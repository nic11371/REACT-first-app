import css from "./Main.module.css";
import IntroImage from "../Content_Header/Intro_img";
import Title from "../Content_Header/Title";
import introImg from "../../../img/lift-hole.png";


const Main = () => {
	return (
		<div className="Main">
			<Title title='Главная страница!' />
			<IntroImage image={introImg} />
			<p className={css.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloribus earum quae eum assumenda et quasi dolores sapiente voluptates, possimus incidunt quis quia voluptas atque ratione praesentium eaque, modi vero.
			</p>
		</div>
	)
}

export default Main;