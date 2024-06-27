// dynamic Route 쓰면 비슷한 폴더 여러개 만들 필요 없음
// dynamic route 만들려면 [폴더명]

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";


export default async function Detail(props) {
  console.log(props);
  // props를 해주면 유저가 다이나믹 라우트 자리에 입력한 값을 출력가능
  const db = (await connectDB).db("nextforum");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.다이나믹라우트),
  });
  console.log(result);

  return (
    <div>
      <h4>상세페이지</h4>
      <h5>{result.title}</h5>
      <p>{result.content}</p>


    </div>
  );
}
