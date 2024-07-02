import { connectDB } from "@/util/database";
// 비번 암호화해서 저장위함
import bcrypt from 'bcrypt';

export default async function resigterhandler(요청,응답){
    if(요청.method=='POST'){
        try{
            // (await connectDB) 이거꼭 괄호로 감싸서 코드작성하기 - await으로 인해 순서가 달라질수 있음
            const db = (await connectDB).db("nextforum");
            // user_cred 는 회원정보 보관할 collection
            const existUser=await db.collection('user_cred').findOne({id:요청.body.id});
            if(!existUser){
                // 10자리로 비번 암호화
                let hash=await bcrypt.hash(요청.body.pw,10)
                요청.body.pw=hash
                let newresult = await db.collection("user_cred").insertOne(요청.body);
                return 응답.status(200).json('회원가입성공') 
            }else{
                return 응답.status(500).json('회원있다임마 다시 입력해라마')
            }
        }catch(e){
            return 응답.status(500).json(e)
        }
    }
}