import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function commenthandler(요청, 응답) {
  let session= await getServerSession(요청,응답,authOptions)
  if (요청.method == "POST") {
    // 현재 로그인된 유저정보 가져오기
    요청.body=JSON.parse(요청.body)
    let 저장할것 = {
        content : 요청.body.comment,
        // objectid라는 함수안에 담아서 넣어야함
        parent: new ObjectId(요청.body._id),
        author: session.user.email
    }

    const db = (await connectDB).db("nextforum");
    let newresult = await db.collection("comment").insertOne(저장할것);
    
    응답.status(200).json('저장완료')
  }
}
