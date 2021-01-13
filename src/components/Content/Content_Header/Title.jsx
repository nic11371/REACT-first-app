import css from './Title.module.css';

const Title = (prop) => {
	return (
		<div className={css.Title}>
			<h2>
				{prop.title}
			</h2>
		</div>
	)
}

export default Title;