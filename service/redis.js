const redis = require('redis');
const bluebird = require('bluebird');
const config = require('../config/index');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

if(!config.redis){
    throw new Error('没有redis配置信息');
}

const client = redis.createClient(config.redis);

module.exports = client;

