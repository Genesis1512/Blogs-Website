import express from 'express'
import { addBlog , getAll, getById, editId, deletId} from '../controller/api.controlller.js'

const router = express.Router();

// add new blog
router.post("/add", addBlog )

// get all blog 
router.get("/read", getAll)

// get by particular id
router.get("/read/:id", getById)

// edit a particular
router.put("/read/:id", editId)

// delete a partiicular
router.delete("/read/:id", deletId)

export default router
