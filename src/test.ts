import Express from "express";
import bodyParser from "body-parser";
import router from "./routes";
import fs from 'fs';

const app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);
app.get('/', (req, res)=>{
        res.send('Test');
})


app.listen(3000, ()=>{
        console.log("Server started")
})