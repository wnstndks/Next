import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function edithandler(요청,응답){
    if(요청.method=='POST'){
        const db = (await connectDB).db("nextforum");
        // let result = await db.collection("post").updateOne(
        //     {어떤 document수정할지},
        //     {$set:{수정할내용}}
        // )
        let 바꿀거 = {title:요청.body.title,content:요청.body.content}
        let result = await db.collection("post").updateOne(
            {_id:new ObjectId(요청.body._id)},
            {$set:바꿀거}
        )
        // updateOne시 덮어쓰기 말고 $inc를 써서 +1도 가능
      응답.status(200).redirect('/list')
    }
}