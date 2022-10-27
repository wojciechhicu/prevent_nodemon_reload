import Express from 'express';
import fs from 'fs'

const getNumbers = Express.Router();
getNumbers.get("/", (req, res)=>{
        fs.readFile('data/numbers.json', 'utf8', (err, data)=>{
                if(err){
                        throw err;
                } else {
                        res.send(JSON.parse(data))
                }
        })
})

export = getNumbers