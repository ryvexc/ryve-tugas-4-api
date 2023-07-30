// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
	try {
		const client = await clientPromise;
		const db = client.db("ryve_tugas_4_android");

		const data = await db.collection("dosen").updateOne(
			{ _id: new ObjectId(req.query.id) },
			{
				$set: {
					nama: req.query.namaDosen,
					kelas: req.query.kelasDosen,
				},
			},
		);
		return res.status(200).json({ ok: true });
	} catch (e) {
		return res.status(400).json({ error: true });
	}
}
