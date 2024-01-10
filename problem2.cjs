const fs = require("fs");

//function which perform all the operation has a filePath of textfile as parameter
const problem2 = (filePath) => {
  // 5.b->delete all the new files that are mentioned in that list simultaneously.
  const deleteAllFiles = (data) => {
    /*converting the data to array by using split function on new line
  allFiles represents an array containing the names of files to be deleted.*/
    allFiles = data.split("\n");

    // Iterate through each file name in 'allFiles' array for deletion.
    allFiles.forEach((fileName) => {
      // Delete each file using fs.unlink().
      fs.unlink(fileName, (err) => {
        // Handle potential errors during file deletion.
        if (err) {
          // Throw an error if deletion encounters an issue to halt further execution.
          throw err;
        }
      });
    });
  };

  //5.a->Read the contents of filenames.txt
  const readFileHavingAllNames = () => {
    fs.readFile("filenames.txt", "utf-8", (err, data) => {
      if (err) {
        throw err;
      }
      //calling function for furthur operations and sending the data read as arguments
      deleteAllFiles(data);
    });
  };
  //4.c->store the name of the new file in filenames.txt
  const appendSortedContentFile = (fileName) => {
    //appemding the fileName to filenames>txt
    fs.appendFile("filenames.txt", fileName, (err) => {
      if (err) {
        throw err;
      }

      //calling function for further operations
      readFileHavingAllNames();
    });
  };

  //4.b->sort the content, write it out to a new file.
  const sortDataAndStore = (data) => {
    //new file created
    const fileName = "sortedSentenceFile.txt";
    //data was splited on every new line and now we have array,sort it and the join the array with space which give us a string
    data = data.split("\n").sort().join(" ");

    //writing the converted data into anew file created
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        throw err;
      }

      //calling funtion for further operations and sending fileNa,me as arguments.
      appendSortedContentFile(fileName);
    });
  };

  //4.a->Read the new file
  const readLowerCaseSentenceFile = (fileName) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        throw err;
      }

      //after reading data without facing errors data is stored in data variable that is passed into function for furthur operations
      sortDataAndStore(data);
    });
  };
  //3.c->Store the name of the new file in filenames.txt*/
  const appendLowercaseSentenceFile = (fileName) => {
    //appending the fileName into the file filenames.txt annd adding next line to it
    fs.appendFile("./filenames.txt", fileName + "\n", (err) => {
      if (err) {
        throw err;
      }

      //calling function read lowercase file and sendiong the fileName as parameter;
      readLowerCaseSentenceFile(fileName);
    });
  };

  //3.b-> convert it to lower case. Then split the contents into sentences.Then write it to a new file.
  const convertToSentenceAndWrite = (data) => {
    //new file created
    const fileName = "lowercaseSentences.txt";

    data = data
      .toLowerCase()
      .split(".")
      .filter((ele) => ele !== "")
      .join("\n");

    //writing the converted data into new file
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        throw err;
      }

      //calling function with argument fileName for furthur operations
      appendLowercaseSentenceFile(fileName);
    });
  };

  //3.a->Read the new file (new file means the uppercase file)
  const readUppercaseFile = (fileName) => {
    //read the file if any erroe occur while reading it throw error other it store data in data variable
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        throw err;
      }
      //passing data to this function for further converstionif the data;
      convertToSentenceAndWrite(data);
    });
  };

  //2.b->Store the name of the new file in filenames.txt
  const appendUppercaseFile = (fileName) => {
    // Appends the 'fileName' to the file named 'filenames.txt' and adds a new line '\n' after each file name.
    fs.appendFile("./filenames.txt", fileName + "\n", (err) => {
      // Handles potential errors during the append operation.
      if (err) {
        // Throws the error to stop further execution in case of an error.
        throw err;
      }

      // Calls the 'readUppercaseFile' function after successfully appending the file name.
      readUppercaseFile(fileName);
    });
  };

  //2.a->Convert the content to uppercase & write to a new file.

  /*(data) => is call backfunction which has data as parameter */
  const writeFileOfUppercase = (data) => {
    //creating new file to store the converted data;
    const filename = "uppercaseData.txt";

    //converting the data to uppercase
    data = data.toUpperCase();

    /*by using .writeFile() of fs module which takes the name of the file where we need to write data, and data which is needed
    to be written in the file and it also contains a call back function with parameter of err,If an error occurs during the writing 
    operation (if (err)), it throws the error using throw err;.
    If the write operation is successful, it calls the function */
    fs.writeFile(filename, data, (err) => {
      if (err) {
        throw err;
      }
      appendUppercaseFile(filename);
    });
  };

  //1.read the file lipsum.txt

  /*by using .readFile() of fs module asynchronously reading the data present in the file(the file path was given)
   utf-8 specifies the encoding of file (reads as test file)
   (err,data) => {} it is a call back function function it handles the result of read file if any error occur while
   reading the file throw error if not it stores the data of file in data variable*/
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    //calling function of writeFileOfUpperCase and sending the data as argument;
    writeFileOfUppercase(data);
  });
};

//exporting the function to testProblem.cjs file;
module.exports = problem2;
