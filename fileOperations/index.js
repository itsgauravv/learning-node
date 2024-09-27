const fsPromises = require("fs").promises;
const path = require("path");

fs.readFile(
  path.join(__dirname, "files", "lorem.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

fs.writeFile(
  path.join(__dirname, "files", "best.txt"),
  "This is the best txt",
  (err) => {
    if (err) throw err;
    console.log("Writing Complete");

    fs.appendFile(
      path.join(__dirname, "files", "best.txt"),
      "\n\n\nYes it is.",
      (err) => {
        if (err) throw err;
        console.log("Append Complete");

        fs.rename(
          path.join(__dirname, "files", "best.txt"),
          path.join(__dirname, "files", "theBest.txt"),
          (err) => {
            if (err) throw err;
            console.log("rename complete");
          }
        );
      }
    );
  }
);
