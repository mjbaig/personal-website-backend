module.exports = class SaveMatchHistoryModel {

        matchHistoryData = sequelize.define('match_history', {
            match_id: {
            type: Sequelize.STRING
            },
            match_seq_num: {
            type: Sequelize.STRING
            },
            start_time: {
                type: Sequelize.STRING
            },
            lobby_type: {
                type: Sequelize.STRING
            },
            radiant_team_id: {
                type: Sequelize.STRING
            },
            dire_team_id: {
                type: Sequelize.STRING
            }
        });
    
        constructor(sequelizeObject, logger){
            this.sequelizeObject = sequelizeObject;
            this.logger = logger;
        }

        async save(matchHistoryData){
            var formattedMatchHistoryData = this.formatDataForUpload(matchHistoryData);
            await matchHistoryData.sync({force: true})
            return await matchHistoryData.create({});
        }

        formatDataForUpload(matchHistoryData){
            return {};
        }
    }