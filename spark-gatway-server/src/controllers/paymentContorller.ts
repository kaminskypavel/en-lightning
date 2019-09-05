import jsend from 'jsend';
import axios from 'axios';
import {Request, Response} from 'express';

const charge = require('lightning-charge-client')
('http://charge.tiger.hackbtc19.offchain.rocks', 'jpZ9Ex9kedpD1Q')

interface IInvoice {
	id: string;
	msatoshi: string;
	description: string;
	rhash: string;
	payreq: string;
	expires_at: number;
	created_at: number;
	metadata: any;
	status: string;
}

export const rootController = async (req: Request, res: Response) => {
	// Create invoice
	const inv: IInvoice = await charge.invoice({msatoshi: 50, metadata: {customer_id: 123, product_id: 456}})
	res.redirect(`http://charge.tiger.hackbtc19.offchain.rocks/checkout/${inv.id}`)
};

export const qsRootController = (req: Request, res: Response) => {
	res.send(jsend.success(`Hello ${req.query.name}`));
};
