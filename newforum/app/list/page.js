import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import WriteLink from "./WirteLink";
export default async function List() {
  const client = await connectDB; //await을 붙이면 자바스크립트는 넘어가지않고 잠깐 기다려줌
  const db = client.db("nextforum");
  let result = await db.collection("post").find().toArray();

  // 혼자 코드를 짜고 싶으면, 한글로 기능설명하고 코드로 번역하면 됨
  console.log(result);
  return (
    <div className="list-bg">
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <h4>
            <Link href={"/detail/" + a._id}>
              <h4>{a.title}</h4>
            </Link>
          </h4>
          {/* <DetailLink/> */}
          <p>{a.content}</p>
          <p>1월 1일</p>
          {/* 글 수정기능만들기
          1. 글마다 수정버튼, 누르면 수정페이지 이동
          2. 수정페이지 만들기 글 가져와서 채워놓기
          3. 발행누르면 DB에 있던 글 수정 */}
          <Link href={"/edit/"+a._id}>
          글 수정✏️</Link>
        </div>
      ))}
      {/* 글작성기능 만들기 1. 글작성페이지 필요 
      2. 버튼 누르면 작성한 글 DB에 저장 - user들이 폼에 맞게 작성하도록 중간에 서버 하나 두기-3tier arcitect 
      => 2 버튼 누르면 서버에 글 저장해달라고 부탁
      3. 서버는 부탁받으면 검사해보고 DB에 저장*/}
      <WriteLink />
    </div>
  );
}
