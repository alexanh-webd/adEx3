import express, {} from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./src/testIndex.js";
import morgan from "morgan";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", router);
app.listen(port, () => {
    console.log("Server running on port " + port);
});
//# sourceMappingURL=server.js.map