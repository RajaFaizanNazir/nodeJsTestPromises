/**************************************** */
process.env.PORT = 5001;
/**************************************** */
const express = require("express");
const CryptoJS = require("crypto-js");
const bodyParser = require("body-parser");
/**************************************** */
// const transactionsRoutes = require("./routes/transactions-routes");
// const HttpError = require("./util/http-error");
/**************************************** */
const app = express();
/**************************************** */
app.use(bodyParser.json());
/**************************************** */
app.get("/api", async (req, res, next) => {
  let message = {
    userId: 780,
  };
  // message = {
  //   paymentOptions: [
  //     { name: "3 months", value: 15 },
  //     { name: "6 months", value: 20 },
  //     { name: "12 months", value: 30 },
  //   ],
  //   name: "Faizan",
  //   role: "Admin",
  //   email: "raja.faizan@fenrispakistan.com",
  //   token:
  //     "U2FsdGVkX182UPrAU7L2QuyiY124uWvdJJm/qODlNSSvo4fbFZ+BncIxiTvGBe0xwMoyMC0YFXtG6zmEECwUsQ==",
  // };
  // message = {
  //   userId: 780,
  //   days: "12 months",
  //   captureId: "3MF8653132059322N",
  // };
  const secret = "weDoNtiMplementPatCheshEre";
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(message),
    secret
  ).toString();
  const decrypted = JSON.parse(
    CryptoJS.AES.decrypt(
      "U2FsdGVkX1+FfFmiEq3dBWrEG/gMVPsWB0CqCW1fX599vzHGQerknMUaPEayNZNpkJz6cXbYfTWCxOLq6rQPMKn265dDKHMynH/R9bZANj3D0vE0Am1JGLSBPi2VFbwKSUzb8gwqM8TRn1JYMNVy3ZOOOVVY56OVtE+FsS/hTJ1yo/Sbxo42QzZ3TH6nPfiFGtWp1a0tUAQa1XbgjWansDKFSuUofsuYRAT7Fw22L0wLArm3pfbcTFZBBBk42AeM3ZdwJEDVgPCU9T4MKurm10ZlQsGUeduXc4v75NBojOXl1/ZHBsiKtyfF1CeD9ivl+rv1/w6uP0ozs0nIFDq/bFaQitER/wxZBzblM3GolPmj7ojezGfKJ865hRmqkdjWoS2ZSGPmeKqC4A4iZdF4c6JDybQuX7XoENDsoW080VsdtSwFCUriHjLJivGJOE9cagrqa9UHQpEgt7rFKhC+BCcWvGifeQtit5QhWn662tvobxv/MFLVLgb+nhKquXJXTIVlufADcS0N7JdhRV1JsbBOevP0+PFusJfY42UE4si2QQ58jPRKBlu6aCUwdPepddhFiAUKpGzvOQGqT0okNA7bOJ9fYj/3Cs87dmvdrhgOB6dqWbXj6RA57OLZ9ICIQeZvHkjzi+NBdDF7eWA7FclBi30S4dbkqh7760GseS15cdzOZaoGGAYHyfvaS5onArBGAGXJI4FLYtbg0gYYY3QukDDukgPaDf8sgG1nwyc=",
      secret
    ).toString(CryptoJS.enc.Utf8)
  );
  return res.send(decrypted);
  res.status(400).json({ encrypted: encrypted, decrypted: decrypted });
});
/**************************************** */
app.use((req, res, next) => {
  res.status(400).json({ message: "can not find this route" });
});
/**************************************** */
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});
/**************************************** */
app.listen(process.env.PORT, () => {
  console.log("Server is up port " + process.env.PORT);
});
/**************************************** */
