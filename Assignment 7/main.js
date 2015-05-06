var HomeWorld = {

	Universe: [{
		Name: 'HomeWorld2',
		Type: '3D RTS',
		Genre: 'Space',
		Platform: 'Microsoft Windows',
		GameModes: {
			SinglePlayer: 'Campaign',
			Multiplayer: 'Online'
			},
	}],

	Hiigaran: {
		Character: 'Protagonist',
		Objective: 'return the trinity hyperdrives',
		Origin: '',
		ShipTypes: {
			Fighter: ["Scout", "Interceptor", "Bomber"],
			Corvette: ["Gunship","PulsarGunShip","MinelayerCorvette"],
			Frigate: ["TorpedoFrigate","FlakFrigate","DefenceFieldFrigate","MarineFrigate"],
			CapitalClass: ["Carrier","Destroyer","BattleCruiser"]
		},
	},

	Veygr: {
		Chatacter: 'Antagonist',
		Objective: 'Invade the Hiigaran race and steal their hyperdrive',
		ShipTypes: {
			Fighter: ["SurveyScout", "AssaultCraft", "Bomber","LanceFighter"],
			Corvette: ["MissileCorvette","LanceCorvette","CommandCorvette"],
			Frigate: ["HeavyMissileFrigate","AssaulFrigate","InfiltratorFrigate"],
			CapitalClass: ["Carrier","Destroyer","BattleCruiser"]
		}
	}
}


for (var homeworld in HomeWorld){
	var homeworld2 = HomeWorld[homeworld];
	console.log(homeworld2);

	var Universe = homeworld2.Universe;
	var generate = document.createElement('p');
	generate.innerHTML = Universe;
	document.body.appendChild(generate);
	
}

	var title = document.createElement('h1');
	title.innerHTML = HomeWorld.Name;

	document.body.appendChild(title);

	var container = document.createElement('div');
	var factions = document.createElement('h2');
	for(var faction in HomeWorld.Factions){
	factions.innerHTML = HomeWorld.Factions[faction];
	}
	container.appendChild(factions);
	document.body.appendChild(container);
