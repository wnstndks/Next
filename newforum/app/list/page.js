// 'use client'
// 큰페이지는 서버컴포넌트
// 필요한부분만 클라이언트컴포넌트
import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import WriteLink from "./WirteLink";
import ListItem from "./ListItem";
export default async function List() {
  const client = await connectDB; //await을 붙이면 자바스크립트는 넘어가지않고 잠깐 기다려줌
  const db = client.db("nextforum");
  let result = await db.collection("post").find().toArray();

  // 혼자 코드를 짜고 싶으면, 한글로 기능설명하고 코드로 번역하면 됨
  console.log(result);
  return (
    <ListItem result={result}/>
  );
}
