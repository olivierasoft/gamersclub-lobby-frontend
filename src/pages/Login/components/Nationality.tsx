import { useEffect, useRef, useState } from "react";
import { CountryOption, CountryOptionProps } from "./CountryOption";
import portugueseIcon from "../../../assets/brazil.png";
import englishIcon from "../../../assets/english.png";
import espanolIcon from "../../../assets/espanol.png";
import { CountryOptionDropdown } from "./CountryOptionDropdown";
import { AiFillCaretUp } from "react-icons/all";

const countryOptions: Omit<CountryOptionProps, "onOptionClickCb">[] = [
	{
		language: "Português",
		icon: portugueseIcon
	},
	{
		language: "English",
		icon: englishIcon
	},
	{
		language: "Español",
		icon: espanolIcon
	}
];

export function Nationality() {
	const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [deg, setDeg] = useState("0");

	const buttonRef = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!dropdownVisible) return setDeg("180");
		return setDeg("0");
	}, [dropdownVisible]);

	function switchDropdownVisible(e: React.MouseEvent<HTMLElement>) {
		setDropdownVisible(!dropdownVisible);
	}

	function onDropdownItemClick(language: string) {
		setSelectedCountry(
			countryOptions.find((option) => option.language === language)!
		);
		setDropdownVisible(!dropdownVisible);
	}

	return (
		<>
			<div
				ref={buttonRef}
				onClick={switchDropdownVisible}
				className="flex sm:w-40 hover:bg-optionHover border mr-10 border-white border-opacity-50 rounded-sm text-white items-center justify-between cursor-pointer"
			>
				<CountryOption
					language={selectedCountry.language}
					icon={selectedCountry.icon}
				/>
				<AiFillCaretUp
					className={`hidden sm:block mr-3 opacity-40 rotate-${deg}`}
				/>
			</div>
			<CountryOptionDropdown
				visible={dropdownVisible}
				buttonRef={buttonRef}
				dropdownRef={dropdownRef}
			>
				{countryOptions
					.filter((option) => option.language !== selectedCountry.language)
					.map((option, i) => (
						<CountryOption
							onOptionClickCb={onDropdownItemClick}
							key={i}
							hoverEffect={true}
							language={option.language}
							icon={option.icon}
						/>
					))}
			</CountryOptionDropdown>
		</>
	);
}
