var Config = {};

if (process.env.NODE_ENV === 'production') {
  Config.firebaseUrl = 'https://watcheditiontest.firebaseio.com';
} else {
  Config.firebaseUrl = 'https://watcheditiontest.firebaseio.com';
}

module.exports = Config;
