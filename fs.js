const fs = require('fs');

// To create a new file
// fs.writeFile("./logs/log.txt", "Welcome", (error) => {
//     if (error) {
//         console.log('error writing data to the file:', error.message);
//         return;
//     }

//     console.log('data written to the file');
// });

// To append contents to the file
// fs.appendFile("./logs/log.txt", "\nHello World", (error) => {
//     if (error) {
//         console.log('error writing data to the file:', error.message);
//         return;
//     }

//     console.log('data appended to the file');
// });

// fs.readFile("./logs/log.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log('error reading the file:', err.message);
//         return;
//     }

//     console.log(data.split('\n'));
// });

fs.unlink("./logs/log.txt", (err) => {
    if (err) {
        console.log('error deleting the file:', err.message);
        return;
    }

    console.log('file deleted successfully');
});