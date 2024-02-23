interface Data {
	embedId: string;
	name: string;
}

const YouTubeEmbed = ({ embedId, name }: Data) => (
	<div className="youtube-embed">
		<iframe
			width="853"
			height="480"
			src={`https://www.youtube.com/embed/${embedId}`}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title={name}
		/>
	</div>
);

export default YouTubeEmbed;
