const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			hotsauce: [
				{
					hotsauceName: "AmishMurder",
					whatWillItDo: "burn your face off",
					scoville: "80 thousand"
				},
				{
					hotsauceName: "ButtKiller",
					whatWillItDo: "Fart Fire",
					scoville: "500 thousand"
				},
				{
					hotsauceName: "Pandora's Box",
					whatWillItDo: "Cure Cancer",
					scoville: "12 million"
				},
				{
					hotsauceName: "Pandemonium",
					whatWillItDo: "die",
					scoville: "18 million"
				},
				{
					hotsauceName: "Nuclear Fallout",
					whatWillItDo: "ring the alarms",
					scoville: "1 million"
				},
				{
					hotsauceName: "Paul Bunyan",
					whatWillItDo: "Make you chop people?",
					scoville: "4 million"
				}
			],
			panda: [
				{
					timeOfDay: "morning",
					whatToDo: "yo-yo"
				},
				{
					timeOfDay: "afternoon",
					whatToDo: "turtle"
				}
			],
			demoz: [
				{
					title: "FIRST",
					bg: "white",
					initial: "white",
					secondary: "black"
				},
				{
					title: "SECOND",
					bg: "white",
					initial: "white",
					secondary: "black"
				},
				{
					title: "third",
					bg: "white",
					initial: "white",
					secondary: "black"
				},
				{
					title: "Fourth",
					bg: "black",
					initial: "black"
				}
			]
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demoz.map((elm, i) => {
					if (i === index) elm.bg = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			changeTimeOfDay: (index, what) => {
				const store = getStore();

				const newTime = store.panda.map((item, i) => {
					if (i === index) item.timeOfDay = what;
					return item;
				});
				setStore({ panda: newTime });
			}
		}
	};
};

export default getState;
