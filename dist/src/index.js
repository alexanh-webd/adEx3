import { Router } from "express";
import fs from "fs";
const router = Router();
let poems = [];
router.get("/", (req, res) => {
    res.json(poems);
});
export default router;
//# sourceMappingURL=index.js.map