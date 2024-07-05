import { connectDB } from "@/util/database";
// 자바스크립트 파일끼리는 .js 생략해도 무방
import { MongoClient } from "mongodb";

export default async function Home() {
  // mongodb 연결_DB 입출력 코드는 server component 안에서만 사용하기
  const client = await connectDB;
  const db = client.db("nextforum");
  let result = await db.collection("post").find().toArray();

  return (
    <div>
      <div style={{ padding:"30px" }}>
        <div style={{marginBottom:'30px'}}>
          <a href="/list">게시판만들기</a>
        </div>
        <div style={{marginBottom:'30px'}}>
          <a href="/register">회원가입</a>
        </div>
        <form action="api/time" method="POST">
          <button style={{cursor:'pointer'}}>시간알려줘어어</button>
        </form>
      </div>
    </div>
  );
}

// 프로젝트 배포하려면 npm run build
// 브라우저 친화적인 자바스크립트로 바꿔주고 html 페이지로 바꿔주어야함
// 그리고 npm run start - 실제 서버 띄우는 문법
// o 기호는 static rendering해주겠다는 뜻 - npm run build 할때 만든 html 페이지 그대로 유저에게 보냄 - 별 기능이 없어 유저가 들어갈 때마다 html 페이지를 만들어줄 필요가 없음 - 전송 빠름
// 람다기호는 다이나믹 랜더링해주겠다는 뜻 -  dynamic rendering 해줌- 페이지 접속마다 html 새로 만들어서 보내줌

