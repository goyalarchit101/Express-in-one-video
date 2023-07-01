const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./UserRoutes");
const app = express();
const PORT = 4000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use("/api/v1",router);

// how to send file
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html" ));
})


// how to send html text
// app.get("/about", (req, res)=>{
//     res.send("<h1>About Page</h1>")
// })

// how to fetch request body
// app.post("/api/v1/login", (req, res) => {
//     const usetDetails = req.body
//     res.send(`<h1>Hello Mr. ${usetDetails.name}</h1>
//             <h2>your mail is ${usetDetails.email}</h2>
//             <h2>your password is ${usetDetails.password}</h2>
//     `)
//     console.log(req.body);
// })


// how to send json (API)
// app.get("/", (req, res)=>{
//     res.json({
//         name:"archit",
//         add: "BBTP",
//         Email: "goyalarchit101gmail.com"
//     })
// })

// post api
// app.post("/api/v1/login", )



app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
});