import { Router } from "express";
import express from "express";
//import fs from "fs"
const router = Router();
let poems = [];
router.use(express.json());
router.get("/hello", (req, res) => {
    res.json({ msg: "Hello World!" });
});
router.get("/", (req, res) => {
    res.json({ msg: "Server is running!" });
});
router.get("/echo/:id", (req, res) => {
    let value = req.params.id;
    try {
        res.json({ id: value });
    }
    catch (error) {
        console.error(`Error parsing JSON: ${error}`);
    }
});
router.post("/sum", (req, res) => {
    const numbersArr = req.body.numbers;
    console.log(numbersArr);
    let result = 0;
    //for (let i = 0; i < numbersArr.length; i++) {
    //  result += numbersArr[i]
    //}
    for (const num of numbersArr) {
        result += num;
    }
    res.json({ sum: result });
});
export default router;
//# sourceMappingURL=testIndex.js.map