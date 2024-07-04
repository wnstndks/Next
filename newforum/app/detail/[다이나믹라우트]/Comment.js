'use client' // 직접 DB 출력결과 출력 불가 -> 서버에게 DB 출력결과 달라고 부탁은 가능
// ajax 사용하기에 댓글 html부분을 새로고침없이 수정 삭제 가능
import { useEffect, useState } from "react"

export default function Comment(props){
    let [comment,setComment]=useState('')

    // useEffect -> 쓸데없는 코드 보관함 ajax, 타이머 보관 보통
    // 1. html 로드/재렌데링될때마다 실행됨
    // 2. html 보여준 후에 늦게 시작
    // ajax는 요청은 좀 느리기에 html에서 뭔가를 보여주고 ajax로 데이터가져오고 ajax 결과를 html에 넣어줌
    useEffect(()=>{
        fetch()
    })
    return(
        <div>
        <div>댓글목록 보여줄 부분</div>
        {/* 유저가 input에 입력한 값다루기-form 안쓰는 경우- 리액트에선 
        보통 유저가 입력한 경우 state에 입력해두고 사용 */}
        <input onChange={(e)=>{
            // 유저가 <input>에 입력한 값
            // comment라는 state에 유저가 입력한 값을 저장해주세요
            setComment(e.target.value)
        }}/>
        {/* 서버로 댓글전송- fetch로 ajax사용 */}
        <button onClick={()=>{
            fetch('/api/comment',{
                method:'POST',
                body:JSON.stringify({comment: comment, _id:props._id})
            })
        }}>댓글전송</button>
      </div>
    )
}