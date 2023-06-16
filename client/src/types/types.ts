import { ChangeEventHandler } from "react";

export type InputFormProps = {
	label: string;
	onChange: ChangeEventHandler;
	errorMessage: string;
	value: string;
};

export type FormDetailsProps = {
	title: string;
	desc: string;
};
