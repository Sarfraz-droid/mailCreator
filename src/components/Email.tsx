import React from "react";

interface EmailInterface {
	children: React.ReactNode;
	style?: object;
}

const Email = (props: EmailInterface) => {
	return (
		<div
			id="wrapper"
			style={{
				...props.style,
			}}
		>
			{props.children}
		</div>
	);
};

export default Email;
