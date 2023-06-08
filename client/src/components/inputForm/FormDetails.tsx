type FormDetailsProps = {
	title: string;
	desc: string;
};

const FormDetails = ({ title, desc }: FormDetailsProps) => {
	return (
		<div className="text-center capitalize -mt-4">
			<h1 className="text-5xl font-semibold text-[#3056d3]">{title}</h1>
			<p className="text-[#637381] mt-4">{desc}</p>
		</div>
	);
};

export default FormDetails;
