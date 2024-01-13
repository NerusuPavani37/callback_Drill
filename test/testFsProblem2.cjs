//importing function from problem.cjs file
const problem2 = require("../fs-problem2.cjs");

async function test() {
  try {
    await problem2("lipsum.txt");
    console.log("success");
  } catch (err) {
    console.log(err);
  }
}
test();
