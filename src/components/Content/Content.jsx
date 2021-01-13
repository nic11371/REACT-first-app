import css from "./Content.module.css";
import { Route, Switch } from "react-router-dom";
import Main from "./Main/Main";
import Articles from "./Articles/Articles";
import Contacts from "./Contacts/Contacts";
import News from "./News/News";


function Content() {
	return (

		<div className={css.Content}>
			<Switch>
				<Route component={Main} path='/' exact />
				<Route component={Articles} path='/Articles' />
				<Route component={News} path='/News' />
				<Route component={Contacts} path='/Contacts' />

			</Switch>
		</div>

	)
}

export default Content;