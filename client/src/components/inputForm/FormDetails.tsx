type FormDetailsProps = {
	title: string;
	desc: string;
};

const FormDetails = ({ title, desc }: FormDetailsProps) => {
	return (
		<div className="text-center capitalize -mt-4">
			<h1 className="text-5xl font-semibold text-primary">{title}</h1>
			<p className="text-tertiary mt-4">{desc}</p>
		</div>
	);
};

export default FormDetails;
