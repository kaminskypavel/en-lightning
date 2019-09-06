interface Invoice {
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

export interface Paid {
	id: string;
	msatoshi: string;
	quoted_currency?: any;
	quoted_amount?: any;
	rhash: string;
	payreq: string;
	pay_index: number;
	description: string;
	metadata?: any;
	created_at: number;
	expires_at: number;
	paid_at: number;
	msatoshi_received: string;
	status: string;
}
