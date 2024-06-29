"use client";

import Link from "next/link";
import { useEffect } from "react";
import WriteLink from "./WirteLink";

export default function ListItem(props) {

    // useEffect(()=>{
    //     // client component에서 DB데이터 가져오려면 서버에 부탁해서 DB 게시물 가져오는 코드를 짜야함 - get 요청같은 거
    //     // result= DB게시물
    // },[])

  return (
    <div className="list-bg">
      {props.result.map((a, i) => (
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
          <Link href={"/edit/" + a._id}>글 수정✏️</Link>
          {/* ajax 기능 사용해서 서버로 요청하기 */}
          <span onClick={(e)=>{
            // fetch('경로') -> 경로로 get요청 날림
            // 요청완료시 코드 실행은 .then()
            // post 요청은 fetch('경로',{'method':'POST', body:서버로 array object 자료보낼때는 - JSON.stringfy({})}) - data도 함께 전송해야하기에 body에 데이터 
            // fetch('/api/delete',{'method':'DELETE',body:a._id})
            // .then((r)=>{
            //     // Ajax요청 완료시 코드 실행은
            //     return r.json()
            // })
            // // 서버로 데이터를 보내는 법 -fetch는 body에 넣기 - <form>은 <input>에 넣기
            // .then((r)=>{
            //     e.target.parentElement.style.opacity=0
            //     setTimeout((()=>{
            //       e.target.parentElement.style.display='none'
            //     }),1000)
            // })
            // fetch('/api/deletefetch?데이터이름-값')-> 입력시 데이터를 서버로 보낼수 있음
            // fetch('/api/deletefetch?name=kim&age=20')
            fetch('/api/abc/어쩌구/KIM') // url 파라미터에 데이터입력시 서버로 전송도 가능
          }}>🗑️</span>
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
