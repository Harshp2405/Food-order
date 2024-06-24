
import multer from 'multer';
import express from 'express'
import { Add, Listfood  ,UserList,deletefood, deluser} from '../controllers/FoodController.js';

export const foodrouter = express.Router();

export const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req , file , cb)=>{
        return cb(null,`${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage:storage})


// http://localhost:2024/api/food/*{next routes from method routes}
foodrouter.post('/add',upload.single("image"),Add)
foodrouter.get('/list',Listfood)
foodrouter.post('/remove',deletefood)
foodrouter.get('/user',UserList)
foodrouter.post('/del',deluser)

