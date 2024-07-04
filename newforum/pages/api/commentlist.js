import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답) {
    const db = (await connectDB).db('nextforum')
    // objectid안에 유저의 아이디 보내달라해야함
    let result = await db.collection('comment').find({ parent : new ObjectId(요청.query.id) }).toArray()
    응답.status(200).json(result)
}
