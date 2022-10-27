import Express from 'express';
const router = Express.Router();

//import routes
import getNumbers from './routes_tree/get-numbers';
import addNumbers from './routes_tree/add-numbers';

//using routes
router.use("/get-numbers", getNumbers);
router.use("/add-numbers", addNumbers);


export = router;