import React from "react";

interface RowInterface {
	children: React.ReactNode;
}

const Row = (props: RowInterface) => {
	return <tr>{props.children}</tr>;
};

export default Row;
