/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

//These are Node.js modules required for file system operations and path handling,
const fs = require("fs");

const path = require("path");

/*This function takes two parameters: absolutePathOfRandomDirectory, 
which represents the absolute path of the directory to be created, 
and randomNumberOfFiles, which denotes the number of random JSON files to be created. */
const problem1 = (absolutePathOfRandomDirectory, randomNumberOfFiles) => {
  //This function creates random JSON files inside the specified directory by using a for loop to create multiple files with unique names and content.
  const createFile = (dirPath) => {
    for (let index = 0; index < randomNumberOfFiles; index++) {
      const fileName = `file_${index}.json`;
      const data = { name: "Pavani", nationaliy: "Indian" };

      fs.writeFile(
        path.join(dirPath, fileName),
        JSON.stringify(data),
        (err) => {
          if (err) {
            throw err;
          } else {
            deleteFile(path.join(dirPath, fileName));
          }
        }
      );
    }
  };

  //this function deletes the specified file.
  const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        throw err;
      }
    });
  };

  //This function creates a directory.
  const createDir = (dirPath) => {
    fs.mkdir(dirPath, (err) => {
      if (err) {
        throw err;
      } else {
        createFile(dirPath);
      }
    });
  };

  /*This function checks if the specified directory exists. 
  If it does, it proceeds to create files within it; 
  otherwise, it creates the directory first and then creates files within it. */
  const isDirExist = (dirPath) => {
    fs.access(dirPath, (err) => {
      if (err) {
        createDir(dirPath);
      } else {
        createFile(dirPath);
      }
    });
  };

  isDirExist(absolutePathOfRandomDirectory);
};

//exporting the function to testProblem1.cjs
module.exports = problem1;
