import express from 'express';
import controller from './controller';

const router = express.Router();

router.get('/', controller.greet);
router.post('/', controller.save);
router.post('/score', controller.update);
module.exports = router;
