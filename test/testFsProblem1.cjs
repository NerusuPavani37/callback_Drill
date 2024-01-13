//importing the function from problem1.cjs file
const problem1 = require("../fs-problem1.cjs");

async function test() {
  try {
    await problem1("./pav", Math.round(10 * Math.random() + 1));
    console.log("success");
  } catch (err) {}
}

test();
