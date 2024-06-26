import { connectDB } from "@/util/database";

// 유저 -> 서버 -> DB 이런 식으로 개발하기
// 서버기능은 /api 폴더에
export default async function writehandler(요청, 응답) {
  if (요청.method == "POST") {
    if (요청.body.title == "") {
      return 응답.status(500).json("제목 빨리 써라");
    }
    // DB 에러 예외처리는 try-catch 문법 사용
    try {
      const db = (await connectDB).db("nextforum");
      let result = await db.collection("post").insertOne(요청.body);

      // 리다이렉트
      return 응답.status(200).redirect("/list");
    } catch (error) {
        return 응답.status(500).json(error)
    }
  }
}
