import express from 'express';
import auth from "../middlewares/auth.js";
import {createDoc, getDocs, getOneDocs, deleteDoc, updateDoc} from '../controllers/doc.js'


const router = express.Router();
router.post('/', auth, createDoc)
router.get('/', auth, getDocs);
router.get('/:id', auth, getOneDocs);

router.delete('/:id', auth, deleteDoc);

router.patch('/:id', auth, updateDoc);

export default router;
