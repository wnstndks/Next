'use client'

import { useState } from "react"

export default function Comment(props){
    let [comment,setComment]=useState('')
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
            fetch('/api/comment',{method:'POST',body:JSON.stringify({comment: comment,_id:props._id})})
        }}>댓글전송</button>
      </div>
    )
}