import { useRef, useState } from "react";
import { IconType } from "react-icons";

interface RcInputProps {
	icon?: IconType;
	required?: boolean;
	placeholder: string;
	title: string;
	value: string;
}

const fieldsetBasisClasses = "flex items-center rounded-md border";
const onFocusFieldsetClasses = fieldsetBasisClasses + " border-blue-500 pb-2";
const onBlurFieldsetClasses = fieldsetBasisClasses + " border-white/40 pb-2";

export function RcInput(props: RcInputProps) {
	const [isFocus, setIsFocus] = useState(false);
	const fieldsetRef = useRef<HTMLFieldSetElement>(null);

	function toggleFocus() {
		setIsFocus(!isFocus);
	}

	return (
		<fieldset
			ref={fieldsetRef}
			className={isFocus ? onFocusFieldsetClasses : onBlurFieldsetClasses}
		>
			<legend
				className={`ml-2 text-xs font-bold ${
					isFocus ? "text-blue-500" : "text-white"
				}`}
			>
				{props.title}
				{props.required ? (
					<span className="text-xs text-red-500 focus:text-blue-500"> *</span>
				) : null}
			</legend>
			{props.icon ? <props.icon className="mx-3 text-lg text-white" /> : null}

			<input
				onFocus={toggleFocus}
				onBlur={toggleFocus}
				placeholder={props.placeholder}
				className="w-full bg-transparent py-1 text-sm text-white shadow-none outline-none"
				type="text"
			/>
		</fieldset>
	);
}
