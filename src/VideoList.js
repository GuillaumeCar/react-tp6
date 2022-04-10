import { useEffect, useState } from 'react';
import VideoThumbnail from './VideoThumbnail';

export default function VideoList() {
	const [videos, setVideos] = useState([]);

	function getVideos() {
		fetch('http://localhost:8080/api/videos')
		.then(response => response.json())
		.then(data => setVideos(data));
	}

	useEffect(() => getVideos(), [])

	const classNames = `videoList ${videos?.length ? '' : 'is-loading'}`;

	return (
		<div className="container">
			<header>
				<h1>Recommandations</h1>
			</header>
			<div className={classNames}>
				{videos.map(video => (
					<VideoThumbnail
						video={video}
						key={video.id}
					/>
				))}
			</div>
		</div>
	);
}
