import { connectDB } from "@/util/database"
import { useState } from "react"

export default async function writehandler(요청,응답){

    if(요청.method=='POST'){
        const db = (await connectDB).db("nextforum")
        let {title,content}=요청.body;
        let result= await db.collection('post').insertOne(요청.body)
        
        // 리다이렉트
        return 응답.status(200).redirect('/list')
    }
}