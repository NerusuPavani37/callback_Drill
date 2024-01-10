//importing the function from problem1.cjs file
const problem1 = require("../fs-problem1.cjs");

//calling the imported function with file path and random number as arguments
problem1("./pavani", Math.round(10 * Math.random() + 1));
