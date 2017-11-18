// player_name=<name> # Search matches with a player name, exact match only
// hero_id=<id> # Search for matches with a specific hero being played, hero id's are in dota/scripts/npc/npc_heroes.txt in your Dota install directory
// skill=<skill>  # 0 for any, 1 for normal, 2 for high, 3 for very high skill
// date_min=<date> # date in UTC seconds since Jan 1, 1970 (unix time format)
// date_max=<date> # date in UTC seconds since Jan 1, 1970 (unix time format)
// account_id=<id> # Steam account id (this is not SteamID, its only the account number portion)
// league_id=<id> # matches for a particular league
// start_at_match_id=<id> # Start the search at the indicated match id, descending
// matches_requested=<n> # Defaults is 25 matches, this can limit to less
// https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=27110133&key=<key>
//https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=<key>&account_id=76561198180349542
//https://api.steampowered.com/IDOTA2Match_205790/GetHeroes/v1/
// "http://replay" + match.cluster + ".valve.net/570/" + match.match_id + "_" + match.replay_salt + ".dem.bz2?v=1"

'use strict'

const request = require('request-promise');

async function getMyMatchHistory(apiKey, databaseObject, logger){
    var matchHistoryString = await request("https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key="+apiKey+"&account_id=76561198180349542");
    var matchHistoryData = JSON.parse(matchHistoryString);
    return matchHistoryData; 
}

async function getMyMatchDetails(matchId, apiKey, databaseObject, logger){
    var matchDetailsString = await request("https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id="+matchId+"&key="+apiKey);
    var matchDetailsData = JSON.parse(matchDetailsString);
    return matchDetailsData; 
}

async function saveMyMatchDetails(apiKey, matchId){

}

async function saveMyMatchHistory(apiKey){
    
}
var matchHistorySchema = {
    match_id :'',
    match_seq_num : '',
    start_time: '',
    lobby_type: '',
    radiant_team_id : '',
    dire_team_id : '',
}

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

var playerAbilityUpgradesSchema = {
    match_id: '',
    ability: '',
    time: '',
    level: ''
}

var playerStatsSchema = {
    match_id: '',
    account_id :'',
    player_slot :'',
    hero_id :'',
    item_0 :'',
    item_1 :'',
    item_2 :'',
    item_3 :'',
    item_4 :'',
    item_5 :'',
    backpack_0 :'',
    backpack_1 :'',
    backpack_2 :'',
    kills :'',
    deaths :'',
    assists :'',
    leaver_status :'',
    last_hits :'',
    denies :'',
    gold_per_min :'',
    xp_per_min :'',
    level :'',
    hero_damage :'',
    tower_damage :'',
    hero_healing :'',
    gold :'',
    gold_spent :'',
    scaled_hero_damage :'',
    scaled_tower_damage :'',
    scaled_hero_healing :''
}

module.exports = {
    getMyMatchHistory:getMyMatchHistory,
    getMyMatchDetails:getMyMatchDetails
}