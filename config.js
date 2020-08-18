const config = {
  ownerID: "kurucu", //kendi IDınızı yazınız
  admins: "admin",
  token: "token", //botunuzun tokenini yazınız
  dashboard: {
    oauthSecret: "secret", //botunuzun secretini yazınız
    callbackURL: `site callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
    sessionSecret: "tb", //kalsın dokunmayın...
    domain: "site" //site URLnizi yazınız!
  }
};

module.exports = config;
