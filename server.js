const express = require("express");

const cors = require("cors");

const mainRouter  = require("./routes")

const app = express();
app.use(cors());

app.use("/api/v1", mainRouter);

app.listen(5000, () => {
    console.log("Starting");
})




















// const express = require("express");
// const cors = require("cors");
// const router = require("./routes");

// const app = express();  // creating server


// // cors stands for cross origin resource sharing, it allows you to connect two application running on different ports to communicate with each other in order to send or receive the data.

// app.use(cors());
// app.use("/api/v1", router);

// app.listen(5000, ()=>{
//     console.log("Application has started successfully");
// })




















// const express = require("express");

// const app = express();

// app.get("/", (req,res) => {
//     res.send("Success Connected to postman")
// })

// app.post("/addUser", (req, res) =>{
//     console.log(req.query);
//     res.send("Success addUser")
// })

// app.put("/editUser/:id", (req, res) => {
//     console.log(req.params);
//     res.send("Success editUser")
// })
// app.listen(6001);



// http://localhost:5000/api/v1/products