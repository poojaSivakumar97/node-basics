const express = require("express");
const app = express();

const PORT = 8080 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello from Scaler Topics");
});

app.get("/about", (req, res) => {
  res.send("WE CREATE IMPACT ");
});
app.get("/contact", (req, res) => {
  res.send("contact us at https://www.scaler.com/academy ");
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
