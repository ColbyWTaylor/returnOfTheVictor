import React from "react";
import { Consumer } from "../store/appContext";

export const yo_yo = () => (
	<div>
		<h1> YO YO YOOOO</h1>
		<ul>
			<Consumer>
				{({ store, actions }) => {
					return store.panda.map((victor, index) => {
						return (
							<li key={index}>
								<span
									onClick={() => {
										actions.changeTimeOfDay(index, "Night");
									}}>
									When: {victor.timeOfDay}
								</span>
								<br />
								<span>What: {victor.whatToDo}</span>
							</li>
						);
					});
				}}
			</Consumer>
		</ul>
	</div>
);
