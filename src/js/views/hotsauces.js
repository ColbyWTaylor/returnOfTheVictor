import React from "react";
import { Consumer } from "../store/appContext";
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
							</div>
						);
					});
				}}
			</Consumer>
		</div>
	);
}
export default HOTSAUCE;
