import React, { useState } from "react";
import styles from "./App.module.css";
import Email from "./components/Email";
import Row from "./components/Row";
import Cell from "./components/Cell";
import Grid from "./components/Grid";
import Typography from "./components/Typography";
import generateEmail from "./components/functions/generateEmail";

import withStyles from "./components/Hooks/withStyles";

const useStyles = withStyles({
	root: {
		padding: "1rem",
	},
	header: {
		backgroundColor: "#f5f5f5",
	},
});

export default function App() {
	const newclasses = {
		root: {
			padding: "10px",
			border: "1px solid black",
			borderRadius: "5px",
		},
		header: {
			borderRadius: "5px",
			border: "1px solid black",
		},
	};

	return (
		<div className="App">
			{/* Demo Email */}
			<EmailTemplate newclasses={newclasses} />
		</div>
	);
}

interface EmailTemplateInterface {
	newclasses: object;
}

const EmailTemplate = (props: EmailTemplateInterface) => {
	const classes = useStyles(props.newclasses);

	return (
		<Email style={classes.root}>
			<Grid>
				<Row>
					<Cell width={2}>
						<Typography variant="h1">Hello</Typography>
					</Cell>
					<Cell width={8}>
						<Typography variant="h2">World</Typography>
					</Cell>
					<Cell width={2} style={classes.header}>
						<Typography variant="h3">!</Typography>
					</Cell>
				</Row>
				<Row>
					<Cell>
						<Typography variant="h3">Hello</Typography>
					</Cell>
					<Cell>
						<Typography variant="p">World</Typography>
					</Cell>
				</Row>
			</Grid>
		</Email>
	);
};
