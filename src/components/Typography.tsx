import React from "react";

interface TypographyInterface {
	children: React.ReactNode;
	variant: string;
}

function Typography(props: TypographyInterface) {
	const element = React.createElement(props.variant, {}, props.children);

	return element;
}

export default Typography;
