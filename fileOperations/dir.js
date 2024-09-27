const fs = require("fs");

if (!fs.existsSync("./path")) {
  fs.mkdir("./path", (err) => {
    if (err) throw err;
    console.log("Directory created");
  });
}

if (fs.existsSync("./path")) {
  fs.rmdir("./path", (err) => {
    if (err) throw err;
    console.log("Directory removed");
  });
}
