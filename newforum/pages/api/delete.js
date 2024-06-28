import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function deletehandler(요청,응답){
    if (요청.method=='DELETE'){
        // JSON->object 변환은 JSON.parse()
        const db = (await connectDB).db("nextforum");
        let result=await db.collection('post').deleteOne({_id:new ObjectId(요청.body)})
        console.log(result)
        응답.status(200).json('삭제완료')
    }
}