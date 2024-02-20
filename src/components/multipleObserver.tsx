import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
	children?: ReactNode;
}

const MultipleObserver = ({ children }: Props) => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<>
			<div className={`tab-container ${inView ? "in-view" : ""}`} ref={ref}>
				{children}
			</div>
		</>
	);
};

export default MultipleObserver;
