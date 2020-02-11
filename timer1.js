const args = process.argv.slice(2);
for (let i = 0; i <= args.length; i ++) {
  let time = args[i] * 1000;
  if (time === Number || time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);
  }
}