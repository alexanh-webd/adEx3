import { Router } from "express";
import express from "express";
//import fs from "fs"
const router = Router();
let usersList = [];
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
    for (const num of numbersArr) {
        result += num;
    }
    res.json({ sum: result });
});
router.post("/users", (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let newUser = {
        name: name,
        email: email
    };
    usersList.push(newUser);
    res.json({ message: "User successfully added" });
});
router.get("/users", (req, res) => {
    res.status(201).json({ users: usersList });
});
export default router;
//# sourceMappingURL=index.js.map