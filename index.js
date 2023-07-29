const fs = require("fs");

const content = new Date().toString();
const path ="./files/test.txt";


// //write r create file
// try{
//     fs.writeFileSync(path, content);

//     fs.readFile(path,"utf8", (err,data) => {
//         if (err){
//             console.log(err);
//         }else{
//             console.log(data)
//         }
//     })
// } catch(err) {
//     console.error(err);
// }

const express = require("express");
const index = express();


const port =  5005;

index.use(express.json());


index.listen(port,() => {
    console.log("serverstared");
});

index.use("/api",require("./routes/contactRoutes"));