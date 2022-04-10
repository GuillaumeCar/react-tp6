import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import VideoForm from './VideoForm';
import { Switch, Route } from 'react-router-dom';

export default function Navigator() {
	return (
		<Switch>
			<Route exact path="/">
				<VideoList />
			</Route>
			<Route exact path="/videos/new">
				<VideoForm />
			</Route>
			<Route exact path="/videos/:id">
				<VideoDetail />
			</Route>
		</Switch>	
	);
}
