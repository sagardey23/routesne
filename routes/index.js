const express = require("express");
const router = express.Router();
const productRouter = require("./products");

router.use("/products", productRouter)

module.exports = router


// http://localhost:5000/api/v1/products

















// const express = require("express");
// const employeeRouter = require("./employees");
// // const deptRouter = require("./department")


// const router = express.Router();

// router.use("/employee", employeeRouter);
// // router.use("/deptDetails", deptRouter);

// module.exports = router;


