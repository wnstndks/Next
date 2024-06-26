import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const client = await connectDB; //await을 붙이면 자바스크립트는 넘어가지않고 잠깐 기다려줌
  const db = client.db("nextforum");
  let result = await db.collection("post").find().toArray();

  // 혼자 코드를 짜고 싶으면, 한글로 기능설명하고 코드로 번역하면 됨
  console.log(result)
  return (
    <div className="list-bg">
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <h4><Link href={'/detail/' + a._id}><h4>{a.title}</h4></Link></h4>
          {/* <DetailLink/> */}
          <p>{a.content}</p>
          <p>1월 1일</p>
        </div>
      ))}
    </div>

  );
}
