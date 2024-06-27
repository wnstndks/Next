// dynamic Route 쓰면 비슷한 폴더 여러개 만들 필요 없음
// dynamic route 만들려면 [폴더명]

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  console.log(props);
  // props를 해주면 유저가 다이나믹 라우트 자리에 입력한 값을 출력가능
  const db = (await connectDB).db("nextforum");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.다이나믹라우트),
  });
  console.log(result);
    //   document 수정은 updateOne()
    // await db.collection('post').updateOne({수정할게시물정보}, {$set:{title:'바보',content:'바보2'}})

  return (
      <div className="p-20">
        <h4>수정페이지</h4>
        <form action="/api/edit" method="POST">
          <input name="title" defaultValue={result.title}></input>
          <input name="content" defaultValue={result.content}></input>
          <input name="_id" style={{display:'none'}} defaultValue={result._id}></input>
          <button type="submit">수정완료</button>
        </form>
      </div>
  );
}
