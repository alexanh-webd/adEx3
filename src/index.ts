import type {Request, Response} from "express";
import {Router} from "express";
import express from "express"
//import fs from "fs"

const router: Router = Router()
type TUser = {
    name:string,
    email:string
};

let usersList: TUser[] = [];

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
    for (const num of numbersArr) {
        result += num; 
    }
    res.json({sum: result})
})

router.post("/users", (req: Request, res: Response) => {
    let name: string = req.body.name;
    let email: string = req.body.email;
    let newUser: TUser = {
        name: name,
        email: email
    }
    usersList.push(newUser);
    res.json({message: "User successfully added"})
})

router.get("/users", (req: Request, res: Response) => {
    res.status(201).json({users: usersList})
})



export default router
