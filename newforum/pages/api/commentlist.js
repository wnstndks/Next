import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function commentlisthandler(요청, 응답) {
    // console.log('응답하라')
    // console.log(요청.query.id)
    const db = (await connectDB).db("nextforum");
    // objectid안에 유저의 아이디 보내달라해야함
    // let result=await db.collection('comment').find().toArray()
    let result = await db.collection("comment").find({ parent: new ObjectId(요청.query.id)}).toArray();
    // console.log(result)
    응답.status(200).json(result);
}
