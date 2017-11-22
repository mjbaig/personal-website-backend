var matchResultsSchema = {
    players :[],
    radiant_win: '',
    duration: '',
    pre_game_duration: '',
    start_time: '',
    match_id: '',
    match_seq_num : '',
    tower_status_radiant: '',
    tower_status_dire: '',
    barracks_status_radiant: '',
    barracks_status_dire: '',
    cluster: '',
    first_blood_time: '',
    lobby_type: '',
    human_players: '',
    leagueid: '',
    positive_votes: '',
    negative_votes: '',
    game_mode: '',
    flags: '',
    engine: '',
    radiant_score: '',
    dire_score: ''
}

module.exports = class SaveMatchHistoryModel {

            MatchResultsData = sequelize.define('match_results_data',{
                players: {
                    type: Sequelize.ARRAY(Sequelize.BIGINT)
                },
                radiant_win: {
                    type: Sequelize.BOOLEAN
                },
                duration: {
                    type: Sequelize.BIGINT
                },
                pre_game_duration: {
                    type: Sequelize.BIGINT
                },
                start_time: {
                    type: Sequelize.BIGINT
                },
                match_id: {
                    type: Sequelize.BIGINT
                },
                match_seq_num : {
                    type: Sequelize.BIGINT
                },
                tower_status_radiant: {
                    type: Sequelize.INTEGER
                },
                tower_status_dire: {
                    type: Sequelize.INTEGER
                },
                barracks_status_radiant: {
                    type: Sequelize.INTEGER
                },
                barracks_status_dire: {
                    type: Sequelize.INTEGER
                },
                cluster: {
                    type: Sequelize.INTEGER
                },
                first_blood_time: {
                    type: Sequelize.INTEGER
                },
                lobby_type: {
                    type: Sequelize.INTEGER
                },
                human_players: {
                    type: Sequelize.INTEGER
                },
                leagueid: {
                    type: Sequelize.BIGINT
                },
                positive_votes: {
                    type: Sequelize.INTEGER
                },
                negative_votes: {
                    type: Sequelize.INTEGER
                },
                game_mode: {
                    type: Sequelize.INTEGER
                },
                flags: {
                    type: Sequelize.INTEGER
                },
                engine: {
                    type: Sequelize.INTEGER
                },
                radiant_score: {
                    type: Sequelize.INTEGER
                },
                dire_score: {
                    type: Sequelize.INTEGER
                }
            });

            constructor(sequelizeObject, logger){
                this.sequelizeObject = sequelizeObject;
                this.logger = logger;
            }
    
            async save(matchResultsData){
                var formattedMatchResultsData = this.formatDataForUpload(matchResultsData);
                await matchResultsData.sync({force: true})
                return await matchResultsData.create({});
            }
    
            formatDataForUpload(matchResultsData){
                return {};
            }

}