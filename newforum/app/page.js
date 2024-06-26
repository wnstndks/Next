import { connectDB } from "@/util/database";
// 자바스크립트 파일끼리는 .js 생략해도 무방
import { MongoClient } from "mongodb";


export default async function Home() {
  // mongodb 연결_DB 입출력 코드는 server component 안에서만 사용하기
  const client = await connectDB;
  const db = client.db("nextforum")
  let result= await db.collection('post').find().toArray()
  console.log(result)


  return (
    <div>안녕하세용</div>
  );
}
