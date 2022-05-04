const Redis = require("ioredis");
const redis = new Redis();

async function rateLimiter(req, res, next){
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const requests = await redis.incr(ip);

    if(requests == 1){
        await redis.expire(ip, 60)
    }

    if(requests > 5){
        const timeLeft = await redis.ttl(ip);
        return res.status(503).json({
            msg: "Slow down, you cannot create these many boards",
            error: "You created too many boards",
            timeLeft: timeLeft
        })
    }
    else{
        next()
    }
}