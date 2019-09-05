import express, {Request, Response} from 'express';
import * as demoController from '../controllers/paymentContorller';
import {query} from 'express-validator';
import {requestValidationHandler} from './requestValidationHandler';

const router = express.Router();

router.get('/', async (req, res) => {
	demoController.rootController(req, res);
});

router.get(
	'/qs',
	[
		query('name')
			.exists()
			.withMessage('missing a name field')
			.isLength({min: 3})
			.withMessage('must be at least 3 chars long')
	],
	requestValidationHandler,
	async (req: Request, res: Response) => {
		demoController.qsRootController(req, res);
	}
);

export default router;
