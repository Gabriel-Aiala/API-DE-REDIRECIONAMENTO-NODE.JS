import  express  from "express";
import linkController from "../controllers/linksController.js";


const router = express.Router();

router
.get('/links',linkController.listarLinks)
.get('/links/:id',linkController.redirecionarLinksId)
.post('/links',linkController.cadastrarLink)
.put('/links/:id',linkController.modificarLink)
.delete('/links/:id',linkController.excluirLink)

export default router