import { useEffect, useState } from "react";

interface CountryOptionDropdownProps {
	dropdownRef: React.RefObject<HTMLDivElement>;
	buttonRef: React.RefObject<HTMLDivElement>;
	visible: boolean;
	children: JSX.Element[];
}

export function CountryOptionDropdown({
	dropdownRef,
	visible,
	buttonRef,
	children
}: CountryOptionDropdownProps) {
	const [rect, setRect] = useState<DOMRect>();
	const [render, setRender] = useState(true);

	useEffect(() => {
		function resizeDropdown() {
			if (buttonRef.current) {
				setRect(buttonRef.current.getBoundingClientRect());
				setRender(!render);
			}
		}

		resizeDropdown();

		window.addEventListener("resize", (e) => {
			resizeDropdown();
		});
	}, [visible]);

	useEffect(() => {
		if (!rect) return;
		if (!dropdownRef.current) return;

		dropdownRef.current.style.left = Math.trunc(rect.left).toString() + "px";
		dropdownRef.current.style.top = "50px";
	}, [rect]);

	return visible && render ? (
		<div
			ref={dropdownRef}
			className="sm:w-40 text-white absolute border border-t-0 border-white border-opacity-50 bg-navbar"
		>
			<>{...children}</>
		</div>
	) : null;
}
