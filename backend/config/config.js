const dotenv = require('dotenv');
const fs = require('fs');

// .env 파일이 존재하는지 확인
const envFileExists = fs.existsSync('.env');
console.log('.env file exists:', envFileExists);

dotenv.config();

console.log('DB_PASSWORD:', process.env.DB_PASSWORD); // 디버깅용 출력

module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'react-node-bird',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'react-node-bird',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'react-node-bird',
    host: '127.0.0.1',
    dialect: 'mysql',
  }
};
