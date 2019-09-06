import {Express, Response} from 'express';
import logger from '../commons/logger';
import paymentRoute from './paymentRoute';

export default (app: Express) => {
	app.use('/payment', paymentRoute);

	app.get('/', (req, res: Response) => {
		res.jsend.success('ok');
	});
	app.use('*', (req, res: Response) => {
		logger.error('accessing invalid route');
		res.jsend.error('invalid route');
	});
};
