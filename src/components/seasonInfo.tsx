import { forwardRef } from "react";

// interface SeasonInfoProps {
// 	displaySeasonModal: () => void;
// }

interface seasonProps {
	season: {
		image: string;
		seasonNumber: number;
		overview: string;
		episodeCount: number;
		airDate: string;
		name: string;
	};
}

const SeasonInfo = forwardRef((props: seasonProps, ref) => (
	<div className="modal-container" {...props}>
		<div className="modal-content" ref={ref}>
			<img src={props.season.image} alt={props.season.name} />
			<div className="modal-text">
				<h3>{!props.season.name.includes("Season") && props.season.name}</h3>
				<h3>
					Season:{" "}
					<span className="modal-span">{props.season.seasonNumber}</span>
				</h3>
				<h3>
					Episodes:{" "}
					<span className="modal-span">{props.season.episodeCount}</span>
				</h3>
				<h3>
					Aired:{" "}
					<span className="modal-span">
						{new Date(props.season.airDate).toLocaleDateString("en-GB", {
							day: "numeric",
							month: "long",
							year: "numeric",
						})}
					</span>
				</h3>
				{props.season.overview && (
					<h3 className="overview">
						Overview:{" "}
						<span className="modal-span">{props.season.overview}</span>
					</h3>
				)}
			</div>
		</div>
	</div>
));

export default SeasonInfo;
