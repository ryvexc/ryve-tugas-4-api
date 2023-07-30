// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
	try {
		const client = await clientPromise;
		const db = client.db("ryve_tugas_4_android");

		const data = await db.collection("dosen").insertOne({
			nama: req.body.namaDosen,
			kelas: req.body.kelasDosen,
		});

		return res.status(200);
	} catch (e) {
		return res.status(400).json({ error: true });
	}
}
