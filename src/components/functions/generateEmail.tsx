import React from "react";
import ReactDOMServer from "react-dom/server";

interface EmailInterface {
	node: React.ReactElement;
}

export default function generateEmail(props: EmailInterface) {
	const { node } = props;

	const html = ReactDOMServer.renderToString(node);

	return html;
}
