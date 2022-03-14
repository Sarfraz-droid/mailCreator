import React, { CSSProperties } from "react";

interface CellInterface {
	children: React.ReactNode;
	width?: number;
	style?: CSSProperties;
}

const Cell = (props: CellInterface) => {
	return (
		<td
			style={{
				width: props.width ? `${(props.width * 100) / 12}%` : "auto",
				...props.style,
			}}
		>
			{props.children}
		</td>
	);
};

export default Cell;
