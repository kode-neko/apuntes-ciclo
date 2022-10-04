import { Router } from 'express';
import {
  getMain,
  getSubject,
} from '../controller';

const router = Router();

router.get('/', getMain);
router.get('/subject/:type', getSubject);

export default router;
