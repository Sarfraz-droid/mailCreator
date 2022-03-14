import React from "react";

interface GridInterface {
	children: React.ReactNode;
}

const Grid = (props: GridInterface) => {
	const DefaultStyles: object = {
		width: "100%",
	};

	return <table style={DefaultStyles}>{props.children}</table>;
};

export default Grid;
