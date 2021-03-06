import { useState } from 'react';

export default function CommentForm({onSubmit}) {
	const [contentData, setContent] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	function handleInputChange(event) {
		event.preventDefault();
		setContent(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();

		const newComment = { content: contentData };
		setIsLoading(true);
		onSubmit(newComment)
			.then(() => {
				setIsLoading(false);
				setContent('');
			});
	}

	return (
		<form className="commentForm" onSubmit={event => handleSubmit(event)}>
			<textarea
				value={contentData}
				onChange={handleInputChange}
				name="content"
				rows="2"
				disabled={isLoading}
				placeholder="Ajouter un commentaire public"
			/>
			<button type="submit" disabled={isLoading}>
				{!isLoading ? 'Envoyer' : 'Envoi en cours...'}
			</button>
		</form>
	);
}
