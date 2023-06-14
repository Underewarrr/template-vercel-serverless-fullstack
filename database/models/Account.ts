import { Sequelize, Model, INTEGER, STRING } from 'sequelize';
import * as config from "../config/database";
import { DATE } from 'sequelize';

const sequelize = new Sequelize(config)

class Account extends Model {
  id!: number;
  password!: string;
  name!: string;
  secret!: string;
  type!: number;
  premdays!: number;
  lastday!: number;
  email!: string;
  creation!: number;
  balance!: number;

}

Account.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  password: {
    type: STRING(40),
    allowNull: false,
  },
  name: {
    type: STRING(40),
    allowNull: false,
    unique:true,
  },
  secret: {
    type: STRING(16),
    allowNull: false,
  },
  type: {
    type: INTEGER,
    allowNull: false,
  },
  premdays: {
    type: INTEGER,
    allowNull: false,
  },
  lastday: {
    type: INTEGER,
    allowNull: false,
  },
  email: {
    type: STRING(255),
    allowNull: false,
  },
  creation: {
    type: INTEGER,
    allowNull: false,
  },
  balance: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: sequelize,
  modelName: 'accounts',
  timestamps: false,
});

export default Account;