const mysql = require('mysql2');
const config = require('../../config/database-mysql'); // assuming database.js contains the database configuration

const connection = mysql.createConnection(config);

function getPlayerByName(name) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT id, name, group_id, account_id, level, vocation, health, healthmax, experience, lookbody, lookfeet, lookhead, looklegs, looktype, lookaddons, maglevel, mana, manamax, manaspent, soul, town_id, posx, posy, posz, conditions, cap, sex, lastlogin, lastip, save, skull, skulltime, lastlogout, blessings, onlinetime, deletion, balance, offlinetraining_time, offlinetraining_skill, stamina, skill_fist, skill_fist_tries, skill_club, skill_club_tries, skill_sword, skill_sword_tries, skill_axe, skill_axe_tries, skill_dist, skill_dist_tries, skill_shielding, skill_shielding_tries, skill_fishing FROM players WHERE name = ? LIMIT 1`;

    connection.query(sql, [name], (err, results) => {
      if (err) {
        reject(err);
      } else if (results.length === 0) {
        resolve(null);
      } else {
        resolve(results[0]);
      }
    });
  });
}

 
module.exports = { getPlayerByName };
