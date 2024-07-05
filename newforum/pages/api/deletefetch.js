import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

// 서버기능들은 다른말로 api라고 부름
export default async function deletefetchhandler(요청,응답){
    // 아까보낸 데이터들 확인가능 - query string - 간단 및 get요청으로 데이터 전송가능
    // console.log(요청.query)
    const db = (await connectDB).db("nextforum");
    let result=await db.collection('post').deleteOne({_id:new ObjectId(요청.query)})
    // console.log(result)
    응답.status(200).json('삭제완료')


}