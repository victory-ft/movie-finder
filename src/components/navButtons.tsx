import { useSwiper } from "swiper/react";
import arrowLeft from "/icons/arrow-left-circle.svg";
import arrowRight from "/icons/arrow-right-circle.svg";

const NavButtons = () => {
	const swiper = useSwiper();
	let isBeginning = swiper.isBeginning;
	let isEnd = swiper.isEnd;

	return (
		<div
			// className="nav-buttons"
			className={`${isBeginning && isEnd && "btn-hide"} nav-buttons`}
		>
			<button onClick={() => swiper.slidePrev()}>
				<img src={arrowLeft} alt="left" />
			</button>
			<button onClick={() => swiper.slideNext()}>
				<img src={arrowRight} alt="left" />
			</button>
		</div>
	);
};

export default NavButtons;
