import React from "react";
import { Consumer } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function blah(props) {
	return (
		<Consumer>
			{({ store }) => {
				return (
					<h1 className="text-center text-primary">
						{store.hotsauce[props.match.params.theid].hotsauceName}
					</h1>
				);
			}}
		</Consumer>
	);
}
blah.propTypes = {
	match: PropTypes.object
};
export default blah;
