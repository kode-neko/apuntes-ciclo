import { Router } from 'express';
import {
  getMain,
  getSubject,
  getDoc,
  getChangeLang,
} from '../controller';

const router = Router();

router.get('/', getMain);
router.get('/subject/:type', getSubject);
router.get('/docs/:type/:name', getDoc);
router.get('/lang/:lang', getChangeLang);

export default router;
