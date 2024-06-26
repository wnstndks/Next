// 'use client'
// 큰페이지는 서버컴포넌트
// 필요한부분만 클라이언트컴포넌트
import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import WriteLink from "./WirteLink";
import ListItem from "./ListItem";


// 다이나믹 랜더링으로 바꾸려면 예약된 변수를 만들고

export const revalidate = 20; //누가 페이지 방문시 20초동안 서버에서 html을 다시 그리지않고 미리 캐싱된 결과를 보여줌 - 

// export default async function Home(){
//   // 결과 몰래 저장해두고 그거를 쓰게 됨
//   // 서버를 저장해두고 자동으로 불러오게 됨 - fetch를 가져다 쓸때 그냥 {cache:'force-cache'}부분은 안써도 됨 -아무튼 이러면 매번 서버로 요청해서 새거를 가져오게 됨
//   // 만약 next: revalidate: 60을 쓰면 이러면 60초마다 캐싱된 데이터 갱신해줌 - 일초단위의 실시간 데이터가 필요없는 경우 많이 사용 - 캐시된 데이터는 하드용량 차지함
//   // 
//   await fetch('/URL',{cache : 'force-cache'})
// }
// 캐싱기능 사용하려면 npm run build 후 npm run start



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
