import css from "./Intro_img.module.css";


function IntroImg(prop) {
	return (
		<div className={css.wraper}>
			<img src={prop.image} alt="lift" />
		</div>
	)
}

export default IntroImg;