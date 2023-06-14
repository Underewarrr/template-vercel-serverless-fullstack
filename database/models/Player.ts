import { Sequelize, Model, INTEGER, STRING, DataTypes } from 'sequelize';
import * as config from "../config/database";

const sequelize = new Sequelize(config)


const Player = sequelize.define('players', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  group_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  account_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  vocation: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  health: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 150
  },
  healthmax: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 150
  },
  experience: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0
  },
  lookbody: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  lookfeet: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  lookhead: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  looklegs: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  looktype: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 136
  },
  lookaddons: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  maglevel: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  mana: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  manamax: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  manaspent: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  soul: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  town_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  posx: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  posy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  posz: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  conditions: {
    type: DataTypes.BLOB,
    allowNull: false,
    defaultValue: []
  },
  cap: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  sex: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  lastlogin: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  lastip: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },

  skull: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  skulltime: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  lastlogout: {
    type: DataTypes.BIGINT.UNSIGNED,
    defaultValue: 0,
    allowNull: false
  },
  blessings: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
    allowNull: false
  },
  onlinetime: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  deletion: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
    allowNull: false
  },
  balance: {
    type: DataTypes.BIGINT.UNSIGNED,
    defaultValue: 0,
    allowNull: false
  },
  offlinetraining_time: {
    type: DataTypes.SMALLINT.UNSIGNED,
    defaultValue: 43200,
    allowNull: false
  },
  offlinetraining_skill: {
    type: DataTypes.INTEGER,
    defaultValue: -1,
    allowNull: false
  },
  stamina: {
    type: DataTypes.SMALLINT.UNSIGNED,
    defaultValue: 2520,
    allowNull: false
  },
  skill_fist: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 10,
    allowNull: false
  },
  skill_fist_tries: {
    type: DataTypes.BIGINT.UNSIGNED,
    defaultValue: 0,
    allowNull: false
  },
  skill_club: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 10,
    allowNull: false
  },
  skill_club_tries: {
    type: DataTypes.BIGINT.UNSIGNED,
    defaultValue: 0,
    allowNull: false
  },
  skill_sword: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 10,
    allowNull: false
  },
  skill_sword_tries: {
    type: DataTypes.BIGINT.UNSIGNED,
    defaultValue: 0,
    allowNull: false
  },
  skill_axe: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 10,
    allowNull: false
  },
  skill_axe_tries: {
    type: DataTypes.BIGINT.UNSIGNED,
    defaultValue: 0,
    allowNull: false
  },
  skill_dist: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 10,
    allowNull: false
  },
  skill_dist_tries: {
    type: DataTypes.BIGINT.UNSIGNED,
    defaultValue: 0,
    allowNull: false
  },
  skill_shielding: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 10,
    allowNull: false
  },
  skill_shielding_tries: {
    type: DataTypes.BIGINT.UNSIGNED,
    defaultValue: 0,
    allowNull: false
  },
  skill_fishing: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 10,
    allowNull: false
  },
  skill_fishing_tries: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  }

}, {
  tableName: 'players', 
  timestamps: false,
});

export default Player;