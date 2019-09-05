import express, {Request, Response} from 'express';
import * as paymentController from '../controllers/paymentContorller';
import {query} from 'express-validator';
import {requestValidationHandler} from './requestValidationHandler';

const router = express.Router();

router.get('/pay',
	query('invoice')
		.exists()
		.withMessage('missing a name field'),
	requestValidationHandler,
	paymentController.redirectPayment);

router.get('/invoice',
	query('amount')
		.exists()
		.withMessage('missing a name field'),
	requestValidationHandler,
	paymentController.getInvoice);

router.get('/isPayed',
	query('invoice')
		.exists()
		.withMessage('missing a name field'),
	requestValidationHandler,
	paymentController.isPayed);

export default router;
