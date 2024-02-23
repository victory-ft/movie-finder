// import LinkButton from "./LinkButton";
import "../styles/seasons.scss";
interface SeasonTabProps {
	name: string;
	image: string;
	season_number: number;
	id: string;
	overview?: string;
	episode_count: number;
	air_date: string;
	displaySeasonModal: () => void;
}

const SeasonTab = ({
	name,
	image,
	season_number,
	displaySeasonModal,
}: SeasonTabProps) => {
	return (
		<div className="season">
			<img src={image} alt={name} className="poster" />
			<div className="season-info">
				<h3 className="season-number">
					{season_number === 0 ? name : `Season ${season_number}`}
				</h3>
				<button className="show-more" onClick={displaySeasonModal}>
					<span>Show More</span>
				</button>
			</div>
		</div>
	);
};

export default SeasonTab;
