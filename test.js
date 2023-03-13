// const temp = "+9234332343A";
// const temp2 = Math.random().toString(16).substring(2);
// console.log(temp2);
const obj = {
  token: "U2FsdGVkX1/cmwtC3/9WqHaH8aQqSfm0TUoLOzsFdBo=",
};
const CryptoJS = require("crypto-js");
let secret = "weDoNtiMplementPatCheshEre";
secret = "someVeryLongSecretKey";
let message = {
  userId: 780,
};
const encrypted = CryptoJS.AES.encrypt(
  JSON.stringify(message),
  secret
).toString();
const decrypted = JSON.parse(
  CryptoJS.AES.decrypt(obj.token, secret).toString(CryptoJS.enc.Utf8)
);
console.log(decrypted);
