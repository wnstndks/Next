import { connectDB } from "@/util/database";

export default async function resigterhandler(요청,응답){
    if(요청.method=='POST'){
        const db = (await connectDB).db("person");
        try{
            const existUser=await db.collection('you').findOne({id:요청.body.id});
            if(!existUser){
                let newresult = await db.collection("you").insertOne(요청.body);
                return 응답.status(400).json('회원가입성공') 
            }else{
                return 응답.status(500).json('회원있다임마 다시 입력해라마')
            }
        }catch(e){
            return 응답.status(500).json(e)
        }
    }
}