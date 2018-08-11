let spawnPoints = require('./spawn_points.json').SpawnPoints;

mp.events.add("playerJoin", (player) => {
	player.position(x, y, z) == (-104.500, 6315.787, 31.576);
});

mp.events.add('playerDeath', (player) => {
	player.spawn(spawnPoints[Math.floor(Math.random()*spawnPoints.length)]);
	player.health = 100;
	});