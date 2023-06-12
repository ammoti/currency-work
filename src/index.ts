import { Parser } from "./parser";

export default {
	async fetch(
		request: Request,
		ctx: ExecutionContext
	): Promise<any> {
		const response = await Parser.parser(request).then(data => {
			if (data && data !== undefined) {
				return new Response(JSON.stringify(data)).json();
			}
			throw new Error("Currency not found");
		}).catch(err => {
			return new Response(JSON.stringify({ error: err.message }), { status: 404 });
		});
		return response;
	},
};
