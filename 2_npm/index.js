const figlet = require("figlet");
const { add } = require("@iampooja/scaler_calc");
figlet("100 days of coding !!", (err, data) => {
  if (err) {
    console.error(`something went wrong`);
    return;
  }
  console.log(data);
});

console.log(add(3, 4));
