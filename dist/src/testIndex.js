import { Router } from "express";
//import fs from "fs"
const router = Router();
let poems = [];
router.get("/hello", (req, res) => {
    res.json({ msg: "Hello World!" });
});
router.get("/", (req, res) => {
    res.json({ msg: "Server is running!" });
});
router.get("/:id", (req, res) => {
    let id = parseInt(req.params.id ?? "0");
    try {
        res.json(poems[id]);
    }
    catch (error) {
        console.error(`Error parsing JSON: ${error}`);
    }
});
export default router;
//# sourceMappingURL=testIndex.js.map