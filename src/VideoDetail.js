import { createRef, Component, useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentRenderer from './CommentRenderer';
import {Link, useParams} from 'react-router-dom';

export default function VideoDetail() {
	const [video, setVideo] = useState(null);
	const [comments, setComments] = useState([]);

	const { id } = useParams();

	const player = createRef();

	function fetchDetail() {
		fetch(`http://localhost:8080/api/videos/${id}`)
			.then(response => response.json())
			.then(video => setVideo(video));
	}

	function fetchComments() {
		fetch(`http://localhost:8080/api/videos/${id}/comments`)
			.then(response => response.json())
			.then(comments => setComments(comments));
	}

	function getDetails() {
		fetchDetail();
		fetchComments();
	}

	function handleLikeClick() {
		fetch(`http://localhost:8080/api/videos/${id}/likes`, {
			method: 'POST',
		}).then(() => fetchDetail());
	}

	function handleDislikeClick() {
		fetch(`http://localhost:8080/api/videos/${id}/dislikes`, {
			method: 'POST',
		}).then(() => fetchDetail());
	}

	function handleCommentSubmit(newComment) {
		return fetch(
			`http://localhost:8080/api/videos/${id}/comments`,
			{
				method: 'POST',
				body: JSON.stringify(newComment),
			}
		).then(() => fetchComments());
	}

	useEffect(() => getDetails(), [])
	if (!video) {
		return <div className="videoDetail is-loading"></div>;
	}

	return (
		<div className="videoDetail">
			<button className="backButton">
				<Link to="/">&lt; Retour</Link>
			</button>
			<video
				style={{ width: '100%', backgroundColor: 'black' }}
				height="400"
				controls
				src={'/uploads/' + video.file}
				ref={player}
			></video>
			<button onClick={() => player.current.play()}>play</button>
			<button onClick={() => player.current.pause()}>pause</button>
			<header>
				<h1>{video.title}</h1>
				<div className="likesContainer">
					<button className="like" onClick={() => handleLikeClick()}>
						{video.likes}
					</button>
					<button
						className="dislike"
						onClick={() => handleDislikeClick()}
					>
						{video.dislikes}
					</button>
				</div>
			</header>
			{video.description && <p>{video.description}</p>}
			<aside className="commentList">
				{comments.length > 0 && <h2>{comments.length} commentaires</h2>}
				<CommentForm onSubmit={handleCommentSubmit} />
				{comments.map(comment => (
					<CommentRenderer comment={comment} key={comment.id} />
				))}
			</aside>
		</div>
	);
}

// export default class VideoDetail extends Component {
// 	state = {
// 		video: null,
// 		comments: [],
// 	};
// 	player = createRef();

// 	componentDidMount() {
// 		this.fetchDetail();
// 		this.fetchComments();
// 		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
// 	}

// 	fetchDetail() {
// 		fetch(`http://localhost:8080/api/videos/6`)
// 			.then(response => response.json())
// 			.then(video => this.setState({ video }));
// 	}

// 	fetchComments() {
// 		fetch(`http://localhost:8080/api/videos/6/comments`)
// 			.then(response => response.json())
// 			.then(comments => this.setState({ comments }));
// 	}

// 	render() {
// 		const { video, comments } = this.state;
// 		if (!video) {
// 			return <div className="videoDetail is-loading"></div>;
// 		}
// 		const { title, description, file, likes, dislikes } = video;
// 		return (
// 			<div className="videoDetail">
// 				<button className="backButton" onClick={() => this.props.push('list')}>
// 					&lt; Retour
// 				</button>
// 				<video
// 					style={{ width: '100%', backgroundColor: 'black' }}
// 					height="400"
// 					controls
// 					src={'/uploads/' + file}
// 					ref={this.player}
// 				></video>
// 				<button onClick={() => this.player.current.play()}>play</button>
// 				<button onClick={() => this.player.current.pause()}>pause</button>
// 				<header>
// 					<h1>{title}</h1>
// 					<div className="likesContainer">
// 						<button className="like" onClick={() => this.handleLikeClick()}>
// 							{likes}
// 						</button>
// 						<button
// 							className="dislike"
// 							onClick={() => this.handleDislikeClick()}
// 						>
// 							{dislikes}
// 						</button>
// 					</div>
// 				</header>
// 				{description && <p>{description}</p>}
// 				<aside className="commentList">
// 					{comments.length > 0 && <h2>{comments.length} commentaires</h2>}
// 					<CommentForm onSubmit={this.handleCommentSubmit} />
// 					{comments.map(comment => (
// 						<CommentRenderer comment={comment} key={comment.id} />
// 					))}
// 				</aside>
// 			</div>
// 		);
// 	}

// 	handleLikeClick() {
// 		fetch(`http://localhost:8080/api/videos/${this.props.params.id}/likes`, {
// 			method: 'POST',
// 		}).then(() => this.fetchDetail());
// 	}

// 	handleDislikeClick() {
// 		fetch(`http://localhost:8080/api/videos/${this.props.params.id}/dislikes`, {
// 			method: 'POST',
// 		}).then(() => this.fetchDetail());
// 	}

// 	handleCommentSubmit(newComment) {
// 		return fetch(
// 			`http://localhost:8080/api/videos/${this.props.params.id}/comments`,
// 			{
// 				method: 'POST',
// 				body: JSON.stringify(newComment),
// 			}
// 		).then(() => this.fetchComments());
// 	}
// }
