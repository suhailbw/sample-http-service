const env = process.argv[2];
require("fs").writeFileSync("env.txt",env);
