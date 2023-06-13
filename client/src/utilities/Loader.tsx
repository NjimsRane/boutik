import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
	return (
		<div
			className="fixed h-screen w-full top-0 left-0 flex justify-center items-center"
			style={{
				background: "#3056d3",
			}}
		>
			<ClipLoader
				color="white"
				size={100}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Loader;
