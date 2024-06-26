import { connectDB } from "@/util/database";

export default async function listhandler(요청,응답) {
  const db = (await connectDB).db("nextforum");
  let result = await db.collection("post").find().toArray();

  if (요청.method=='GET'){
    return 응답.status(400).json(result);
  }
}
