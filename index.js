const { exec } = require("child_process");
let path = require("path")
let fs = require('fs');
let dir = './client/files';    //name of the directory/folder
const distPath = path.resolve(__dirname, "./dist")
// if (!fs.existsSync(dir)){    //check if folder already exists
//     fs.mkdirSync(dir);    //creating folder
// }

const client = "testcompany"

const clientPath = `./${client}/`
const readmePath = `./${client}/README.md`

const createdOn = new Date();
const readmeContent = `
# CDN for ${client}

### Sist oppdatert 
${createdOn}
### Laget 
Sebastian
`


const createReadme = async () => {
    if (!fs.existsSync(clientPath)) {    //check if folder already exists
        fs.mkdirSync(clientPath);    //creating folder
    }

    fs.writeFile(readmePath, readmeContent, function (err) {    //creating file test.txt inside test_folder with HI written on it
        if (err) {
            return console.log(err);
        }
        console.log("The file is saved!");
    });

    return readmeContent
}
const copyBundleFiles = async () => {
    // getBundleFileName()
    const javascriptFileContent = fs.readFileSync(path.resolve(__dirname, "./dist/main.js"), {
        encoding: "utf8"
    })

    fs.copyFile(path.resolve(__dirname, "./dist/main.js"), `./testcompany/main.js`, (err) => {
        if (err) console.log("error", err);
        // console.log("js file saved")
        return console.log("BundleFiles copied!")
    })
    fs.copyFile(path.resolve(__dirname, "./dist/main.js"), `./testcompany/main.css`, (err) => {
        if (err) console.log("error", err);
        // console.log("css file saved")
        return console.log("BundleFiles copied!")
    })
    // const cssFile = fs.readFileSync(path.resolve(__dirname), "./dist/style.css"
    //     encoding: "utf8"
    // })
}

function createRepo() {
    // exec(`git add ${client} & git commit -m ":sparkles: Component createt & git "  `, (error, stdout, stderr) => {
    //     if (error) {
    //         console.log(`error: ${error.message}`);
    //         return;
    //     }
    //     if (stderr) {
    //         console.log(`stderr: ${stderr}`);
    //         return;
    //     }
    //     console.log(`stdout: ${stdout}`);
    // });
}

// get listname of all files in dist directory * not needed for mvp
// // const getBundleFileName = () => {
// //     console.log("\nCurrent filenames:");
// //     fs.readdirSync(distPath).forEach(file => {
// //         console.log(file);
// //     });
// // }
// createReadme()
const createFilesAndPushToGithub = async () => {
    const readmeContent = await createReadme()
    console.log("this is the readmecontent", readmeContent)
    const bundleMessage = await copyBundleFiles()
    createRepo()
}
// getBundleFiles()
createFilesAndPushToGithub()