// 다이나믹 라우트를 api에서도 쓸수 있음
// 누가 /api/abc/아무문자로 get/post 요청을 하면 이 파일 실행
// url 파라미터 문법이라고 함

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

// 이러면 서버로 데이터전송 가능함
export default async function handler(요청,응답){
    // console.log('안녕')
    // URL 파라미터 만들고
    // URL parameter 자리에 데이터 입력 시 데이터를 서버에서 출력도 가능
    console.log(요청.query)
    const db = (await connectDB).db("nextforum");
    let result=await db.collection('post').deleteOne({_id:new ObjectId(요청.query.어쩌구)})
    // console.log(result)
    응답.status(200).json('삭제완료')
}