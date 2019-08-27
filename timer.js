process.stdout.write("\x07");
let args = process.argv.slice(2);

const runTimer = args => {
  for (let i = 0; i < args.length; i++) {
    if (parseInt(args[i]) === "" || parseInt(args[i]) < 0) {
      break;
    } else {
      setTimeout(() => {
        console.log("testing");
        process.stdout.write("\x07");
      }, 1000 * parseInt(args[i]));
    }
  }
};

runTimer(args);
