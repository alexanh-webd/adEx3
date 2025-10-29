import type {Request, Response} from "express";
import {Router} from "express";
import express from "express"
//import fs from "fs"

const router: Router = Router()
let poems: string[] = []

router.use(express.json());

router.get("/hello", (req: Request, res: Response) => {
    res.json({msg: "Hello World!"})
})

router.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Server is running!" });
});

router.get("/echo/:id", (req: Request, res: Response) => {
    let value: string = req.params.id as string;
    try{
        res.json({id: value});
    } catch (error: any) {
        console.error(`Error parsing JSON: ${error}`)
    }
   
})

router.post("/sum", (req: Request, res: Response) => {
    const numbersArr: number[] = req.body.numbers
    console.log(numbersArr);
    let result: number = 0;
    //for (let i = 0; i < numbersArr.length; i++) {
      //  result += numbersArr[i]
    //}
    for (const num of numbersArr) {
        result += num; 
    }
    res.json({sum: result})
})

export default router
