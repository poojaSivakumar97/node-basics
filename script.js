const https = require("https");
const fs = require("fs");

const fileUrl = "https://wizcli.app.wiz.io/wizcli";
const outputPath = "wizcli";

const file = fs.createWriteStream(outputPath);

https
  .get(fileUrl, function (response) {
    response.pipe(file);
    file.on("finish", function () {
      file.close();
      console.log("File downloaded successfully.");
    });
  })
  .on("error", function (err) {
    fs.unlink(outputPath, () => {}); // Delete the file if download fails
    console.error("Error downloading the file:", err);
  });
