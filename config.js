let config = require('../config.json')
const config = {
  ownerID: config.kurucu, //kendi IDınızı yazınız
  admins: config.admin,
  token: config.token, //botunuzun tokenini yazınız
  dashboard: {
    oauthSecret: config.secret, //botunuzun secretini yazınız
    callbackURL: config.callback, //site URLnizi yazınız /callback kısmını silmeyiniz!
    sessionSecret: "tb", //kalsın dokunmayın...
    domain: config.site //site URLnizi yazınız!
  }
};

module.exports = config;
