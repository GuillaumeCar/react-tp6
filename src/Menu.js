import { Link, NavLink } from 'react-router-dom';

export default function Menu() {
	return (
		<header>
			<nav>
				<h1 className="logo">
					Reac<em>Tube</em>
				</h1>
				<ul className="mainMenu">
					<li>
						<NavLink exact to="/"> Videos </NavLink>
					</li>
					<li>
						<NavLink exact to="/videos/new">Ajouter</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
