const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

let runTimer = data => {
  setTimeout(() => {
    console.log("Timer");
    process.stdout.write("\x07");
  }, 1000 * data);
};

// process.stdout.write("\x07");
stdin.on("data", key => {
  if (key === "b") {
    console.log("b was pressed");
    process.stdout.write("\x07");
  } else if (key === "\u0003") {
    console.log("Thanks for using me, Ciao!");
    process.exit();
  } else {
    console.log(key);
    runTimer(parseInt(key));
  }
});
