const itemDataRefresh = require('../../services/dota/data-refresh/item-data-refresh');
const heroDataRefresh = require('../../services/dota/data-refresh/hero-data-refresh');
const matchHistoryRefresh = require('../../services/dota/data-refresh/match-history-refresh');
const Router = require('koa-router');
const router = new Router();

module.exports = class DotaRouter {

    constructor(apiKey, databaseObject, logger){
        this.databaseObject = databaseObject;
        this.logger = logger;
        this.apiKey = apiKey;
        this.router = new Router();
        
    }

    async setRouter(){

        this.router.get('/getItemData', async (ctx, next) => {
            ctx.body = await itemDataRefresh.getData();
        });
        
        this.router.get('/getHeroData', async (ctx, next) => {
            ctx.body = await heroDataRefresh.getData();
        });

        this.router.get('/myMatchHistory', async (ctx, next) => {
            ctx.body = await matchHistoryRefresh.getMyMatchHistory(this.apiKey, this.databaseObject, this.logger);
        });

        this.router.get('/myMatchDetails', async (ctx, next) => {
            ctx.body = await matchHistoryRefresh.getMyMatchDetails('3560938900', this.apiKey, this.databaseObject, this.logger);
        });
    }

    async getRouter(){
        await this.setRouter();
        return this.router;
    }

}