'use client'
import Link from "next/link";
import { useState } from "react";

// 서버로 POST method 요청하려면 -form 태그 사용
export default function Write() {

  let [image,setImage]=useState('')

  // if (유저세션출력해서 아무것도없으면){
  //   return <div>로그인하세요</div>
  // }
  return (
    <div>
      <h4>글 작성할거냐</h4>
      {/* action이라는 속성 내에 url 쓰고, method에 POST 속성 */}
      <div className="p-20">
        <form action="/api/write" method="POST">
          <input name="title" placeholder="글제목"></input>
          <input name="content" placeholder="글내용"></input>
          {/* Presigned URL 달라고 GET요청-클라이언트서버에서만 가능 */}
          <input type="file" accept="image/*"
         onChange={
          async (e) => {
            let file = e.target.files[0]
            let filename = encodeURIComponent(file.name)
            let res = await fetch('/api/post/image?file=' + filename)
            res = await res.json()
            
            //S3 업로드
            const formData = new FormData() //form태그 대신
            Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
              formData.append(key, value)
            })
            let 업로드결과 = await fetch(res.url, {
              method: 'POST',
              body: formData,
            })
            console.log(업로드결과)
  
            if (업로드결과.ok) {
              setImage(업로드결과.url + '/' + filename)
            } else {
              console.log('실패')
            }
            
          }}
          />
          <img src={image}/>
          {/* 선택한 이미지 보여주려면
          1. createObjectURL 쓰거나(이미지태그)
          2. 이미지를 업로드해버리거나 */}
          <button type="submit">버튼</button>
        </form>
      </div>
    </div>
  );
}
