//https://www.dota2.com/jsfeed/heropediadata?feeds=herodata&l=english
//https://www.dota2.com/jsfeed/heropediadata?feeds=itemdata&l=english
//https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=27110133&key=<key>
'use strict'

const path = require('path');
const Koa = require('koa2');
const Router = require('koa-router');
const request = require('request-promise');
const configuration = require('./config');
const DotaRouter = require('./routes/dota/index');
const loggerConfig = require('./config/logger-config');
const databaseConfig = require('./config/database-config');

const { Pool } = require('pg');

const steamAPIKey=process.env.STEAM_API_KEY;

var app = new Koa();
var router = new Router();

async function startConfiguration(){

    //A Configured Winston Logger object
    const logger = loggerConfig.getLogger();

    //A Configured sequelize database object
    const database = databaseConfig.getDatabase();

    logger.info("Database Pool Created");

    //Inject dependencies into dota routes
    var dotaRoutes = await new DotaRouter(steamAPIKey, database, logger).getRouter();

    //configure routes
    router.use('/dota',dotaRoutes.routes());

    //Add Middleware to App
    app
        .use(router.routes())
        .use(router.allowedMethods)
}

function startServer(){
    router.get('/', async (ctx, next) => {
        ctx.body = 'Okay'
    });

    router.get('/health', async (ctx, next) => {
        ctx.body = 'Okay'
    });
    
    app
        .listen(4200, () => {console.log("listening on port 4200")});
}

async function main(){
    await startConfiguration();
    startServer();
}

main();