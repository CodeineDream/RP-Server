let spawnPoints = require('./spawn_points.json').SpawnPoints;

mp.events.add("playerJoin", (player) => {
	player.spawn(new mp.Vector3(-104.500,6315.787,31.576));
});

mp.events.add('playerDeath', (player) => {
	player.spawn(new mp.Vector3(1841.584,3668.582,33.680));
	player.health = 100;
	});