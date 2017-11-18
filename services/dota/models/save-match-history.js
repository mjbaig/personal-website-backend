module.exports = class SaveMatchHistoryModel {

        MatchHistoryData = sequelize.define('match_history_data', {
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

        async save(MatchHistoryData){
            var formattedMatchHistoryData = this.formatDataForUpload(MatchHistoryData);
            await MatchHistoryData.sync({force: true})
            return await MatchHistoryData.create({});
        }

        formatDataForUpload(MatchHistoryData){
            return {};
        }
    }