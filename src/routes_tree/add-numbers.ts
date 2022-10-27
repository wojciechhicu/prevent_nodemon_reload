import Express from 'express';
import fs from 'fs';
import { Numbers } from '_helpers/numbers.interface'

const addNumbers = Express.Router();
addNumbers.post("/", (req, res)=>{
        fs.readFile('data/numbers.json', 'utf8', (err, data: any)=>{
                if(err){
                        res.send(err);
                } else {
                        let rawData: Numbers[] = JSON.parse(data);
                        rawData.push(req.body)
                        fs.writeFile('data/numbers.json', JSON.stringify(rawData, null, 2), (error)=>{
                                res.send(error)
                        })
                }
        })
})

export = addNumbers