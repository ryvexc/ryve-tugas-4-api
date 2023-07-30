// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
	try {
		const client = await clientPromise;
		const db = client.db("ryve_tugas_4");

		const data = await db.collection("dosens").find({}).toArray();

		return res.json(data);
	} catch (e) {
		console.error(e);
	}
}
