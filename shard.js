const { ShardingManager } = require("discord.js");
 
const shards = new ShardingManager("./index.js", {
    token: "NzAyNzk0OTY3NDAzNDYyNjU2.XqFO0Q.OdnfUEFGNIFli5RtYU3AnWejGYA", // If your token was inside .env, use process.env
    totalShards: "auto"
});
 
shards.on("shardCreate", shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
});
 
shards.spawn(shards.totalShards, 10000); //For safety reason, try to use 10 seconds to respawn the shard.