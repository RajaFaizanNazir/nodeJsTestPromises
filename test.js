// const temp = "+9234332343A";
// const temp2 = Math.random().toString(16).substring(2);
// console.log(temp2);
const obj = {
  token:
    "U2FsdGVkX1967676Mo1+1pRQ8XagPWfM/RgucZL+F4vQ8qiawZOiuCzSmw0ePhzdHD2ydjkaERtv9DmnQ8qtUyjlEUejWbxEfaeyuRA4sTTDgSgNS2ROlnZtqeTMZp3TyTG52XXTLALY+NTFzoz41Bj+Ppr/Qgr2cFg6YEktpMyIWbtbSidanGQefjpRLz/8b2AfxJdHF6A+D7FLuKTtL4Od01988dcECk4PbvY4cbsLpOOwbqRuQss1KnueEUx2gmXOAYd+6VthvvGLalgn6Z1Ui9KpWUicmk9XZBt74Cjq+qs/2sTJ8tQuDUrf/NcpQdNlU7Rna/L2Aa9yYDYAH2o5KkoAtG8mpTpqLHLG2xFWgto3OSJp6BAZinYDmw4gPkNs1id+KImSMrimHO1l1BEXSxWpECxoSw1ga+mZ5v1jK6akUoiPF6E37PYW59ugWXa2bCI9ipeOOquss8cj9XpJDSt3g8eguSANuW3dq+QpjrO6oPk4RUAD5zWCTdWs2ny2GYp3fYgbRlZcBXu7SvJWiBR2vZzaGjWIb7lwg3rC7BwoN/yFsBRyxdcvNjc8h4XgC1K/Or4ivwOJR07//mKJoKCcegMUbHa8Tnh/1uLdOSMX1C6j0td5dUrqP0LqkNAvpeZ0+Ga/tzbC5yznXsZ6bUFgLCWeM3uwVvvHuRmaeoALDOeSeAnAnJ/lbKFLjq/J/vF2dCvDIEEJQX5z3D5LRpFsl1c6WFe5jqXP/JQ=",
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
