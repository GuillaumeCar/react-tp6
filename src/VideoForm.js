import { createRef, Component, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function VideoForm() {
	const [isLoading, setisLoading] = useState(false);

	const titleInput = createRef();
	const descriptionInput = createRef();
	const thumbnailInput = createRef();

	const history = useHistory();

	function handleSubmit(event) {
		event.preventDefault();
		

		setisLoading(true);
		const body = JSON.stringify({
			title: titleInput.current.value,
			description: descriptionInput.current.value,
			thumbnail: thumbnailInput.current.value,
		});
		fetch(`http://localhost:8080/api/videos`, { method: 'POST', body })
			.then(response => response.json())
			.then(({ id }) => history.push('/videos/' + id));	
	}

	return (
		<form className="videoForm" onSubmit={event => handleSubmit(event)}>
			<label htmlFor="title">Titre</label>
			<input required type="text" id="title" ref={titleInput} />
			<label htmlFor="description">Description</label>
			<textarea
				required
				id="description"
				cols="30"
				rows="10"
				ref={descriptionInput}
			></textarea>
			<label htmlFor="thumbnail">
				Vignette
				<small>
					&nbsp;id de l'image sur &nbsp;
					<a href="https://unsplash.com" target="_blank">
						https://unsplash.com
					</a>
				</small>
			</label>
			<input required type="text" id="thumbnail" ref={thumbnailInput} />
			<button type="submit" disabled={isLoading}>
				{!isLoading ? 'Envoyer' : 'Loading...'}
			</button>
		</form>
	);
}

// export default class VideoForm extends Component {
// 	state = {
// 		isLoading: false,
// 	};
// 	titleInput = createRef();
// 	descriptionInput = createRef();
// 	thumbnailInput = createRef();

// 	handleSubmit(event) {
// 		event.preventDefault();
// 		this.setState({ isLoading: true });
// 		const body = JSON.stringify({
// 			title: this.titleInput.current.value,
// 			description: this.descriptionInput.current.value,
// 			thumbnail: this.thumbnailInput.current.value,
// 		});
// 		fetch(`http://localhost:8080/api/videos`, { method: 'POST', body })
// 			.then(response => response.json())
// 			.then(({ id }) => this.props.push('detail', { id }));

		
// 	}

// 	render() {
// 		return (
// 			<form className="videoForm" onSubmit={event => this.handleSubmit(event)}>
// 				<label htmlFor="title">Titre</label>
// 				<input required type="text" id="title" ref={this.titleInput} />
// 				<label htmlFor="description">Description</label>
// 				<textarea
// 					required
// 					id="description"
// 					cols="30"
// 					rows="10"
// 					ref={this.descriptionInput}
// 				></textarea>
// 				<label htmlFor="thumbnail">
// 					Vignette
// 					<small>
// 						&nbsp;id de l'image sur &nbsp;
// 						<a href="https://unsplash.com" target="_blank">
// 							https://unsplash.com
// 						</a>
// 					</small>
// 				</label>
// 				<input required type="text" id="thumbnail" ref={this.thumbnailInput} />
// 				<button type="submit" disabled={this.state.isLoading}>
// 					{!this.state.isLoading ? 'Envoyer' : 'Loading...'}
// 				</button>
// 			</form>
// 		);
// 	}
// }
