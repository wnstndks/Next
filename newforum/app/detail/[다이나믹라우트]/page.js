// dynamic Route 쓰면 비슷한 폴더 여러개 만들 필요 없음
// dynamic route 만들려면 [폴더명]

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail(props) {
  console.log(props);
  // props를 해주면 유저가 다이나믹 라우트 자리에 입력한 값을 출력가능
  const db = (await connectDB).db("nextforum");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.다이나믹라우트),
  });
  
  return (
    <div style={{ padding:'30px'}}>
      <h4>상세페이지</h4>
      <div>
        <p style={{marginBottom:'-10px'}}>제목 : {result.title}</p>
        <p>내용 : {result.content}</p>
      </div>
      {/* ajax가 필요하기에 client component가 필요함 */}
      {/* comment라는 컴포넌트안에서 댓글 보여주고 싶음 -client componet안에서 직접 댓글 가져오기*/}
      <Comment _id={result._id.toString()} />
    </div>
  );
}
