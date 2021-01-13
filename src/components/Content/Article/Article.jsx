import css from "./Article.module.css";


function Article(prop) {


	return (
		<div className={css.Article}>
			<h2 className={css.title}>
				{prop.title}
			</h2>
			<img src={prop.image} alt="" />
			<div className={css.text}>
				{prop.text}
			</div>
		</div >
	)
}

export default Article;