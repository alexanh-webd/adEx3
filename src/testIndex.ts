import type {Request, Response} from "express";
import {Router} from "express";
//import fs from "fs"

const router: Router = Router()
let poems: string[] = []


router.get("/hello", (req: Request, res: Response) => {
    res.json({msg: "Hello World!"})
})
router.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Server is running!" });
});

router.get("/:id", (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id ?? "0")
    try{
        res.json(poems[id])
    } catch (error: any) {
        console.error(`Error parsing JSON: ${error}`)
    }
   
})


export default router
