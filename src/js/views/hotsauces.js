import React from "react";
import { Consumer } from "../store/appContext";
import { Link } from "react-router-dom";

function HOTSAUCE() {
	return (
		<div className="card-deck">
			<Consumer>
				{({ store, actions }) => {
					return store.hotsauce.map((item, index) => {
						return (
							<div key={index} className="card text-center">
								name:
								<br />
								{item.hotsauceName}
								action:
								<br />
								{item.whatWillItDo}
								burn:
								<br />
								{item.scoville}
								<Link to={"/blah/" + index}>
									<button className="btn btn-danger">Click to see more</button>
								</Link>
							</div>
						);
					});
				}}
			</Consumer>
		</div>
	);
}
export default HOTSAUCE;
