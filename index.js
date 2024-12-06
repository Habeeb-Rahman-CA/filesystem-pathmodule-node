const path = require('path')

const filePath = "C:/Users/habee/Desktop/Habeeb/Node + Express/file system/files/sample.txt"

// //dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);
// //basename
// console.log(path.basename(filePath));
// console.log(__filename);
// //extention
// console.log(path.extname(filePath));

// //join the path
// const sampleFile = "sample.txt"
// console.log(path.join(path.dirname(filePath), sampleFile));

const fs = require('fs')
const fsPromise = require('fs/promises')
// console.log(fs);

//reading from file - Async
// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) throw new Error("something went wrong")
//     console.log(data);
// })

//reading from file = Sync
// try {
//     const data = fs.readFileSync(path.join(__dirname, 'files', 'sample.txt'), "utf-8")
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// const fileReading = async() => {
//     try {
//         const data = await fsPromise.readFile(filePath, {encoding: 'utf-8'})
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fileReading()

//writing into file
const textFile = path.join(__dirname, "files", "text.txt")
const content = "I love nodejs"
// fs.writeFile(textFile, content, (err) => {
//     if (err) throw new Error("something went wrong")
//     console.log("Write operation completed");
//     fs.readFile(textFile, "utf-8", (err, data) =>{
//         if (err) throw new Error("something went wrong")
//             console.log(data)
//     })
// })

const writingFile = async () => {
    try {
        await fsPromise.writeFile(textFile, "\n Its awesome", {
            flag: 'a+'
        })
        // await fsPromise.appendFile(textFile, "\n this file appender")
        await fs.promises.rename(textFile, path.join(__dirname, "files", 'newText.txt'))
        const data = fsPromise.readFile(path.join(__dirname, "files", 'newText.txt'))
        console.log((await data).toString())
    } catch (error) {
        console.log(error)
    }
}

writingFile()