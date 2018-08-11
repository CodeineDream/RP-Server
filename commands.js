mp.events.addCommand('kill', (player) => {
	player.health = 0;
	});
	
	mp.events.addCommand("weapon", (player, fullText, weapon, ammo) => {
		var weaponHash = mp.joaat(weapon);
		player.giveWeapon(weaponHash, parseInt(ammo) || 10000);
	});
	
	mp.events.addCommand("hello", (player, fullText, args1, args2) => {
		player.outputChatBox('Hello ${player.name} !');
	});
	
	mp.events.addCommand("v", (player) => {
		const vehicle = mp.vehicles.new("baller", player.position);
		vehicle.numberPlate = "Jax";
	});
	
	mp.events.addCommand("jax", (player, fullText) => {
		const jaxX = player.position.x;
		const jaxY = player.position.y;
		const jaxZ = player.position.z;
		player.outputChatBox("X: " +jaxX);
		player.outputChatBox("Y: " +jaxY);
		player.outputChatBox("Z: " +jaxZ);
	});
	
	