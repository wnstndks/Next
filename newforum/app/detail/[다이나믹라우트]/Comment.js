'use client' // 직접 DB 출력결과 출력 불가 -> 서버에게 DB 출력결과 달라고 부탁은 가능
// ajax 사용하기에 댓글 html부분을 새로고침없이 수정 삭제 가능
import { useEffect, useState } from "react"

export default function Comment(props){
    let [comment,setComment]=useState('')
    let [data,setData]=useState([])
    // useEffect -> 쓸데없는 코드 보관함 ajax, 타이머 보관 보통
    // 1. html 로드/재렌데링될때마다 실행됨
    // 2. html 보여준 후에 늦게 시작
    // ajax는 요청은 좀 느리기에 html에서 뭔가를 보여주고 ajax로 데이터가져오고 ajax 결과를 html에 넣어줌
    useEffect(()=>{
        // GET 요청으로 서버에서 보낸 데이터보여주는 폼
        // fetch('/URL').then(r=>r.json())
        // .then((result)=>{
        // })
        // get요청시 데이터함께보내려면 url parameter/query string 방법 사용
        fetch('/api/commentlist?id='+props._id).then(r=>r.json())
        .then((result)=>{
            console.log(result)
            // 2. 가져온 데이터를 state에 저장
            // 3. state를 html에 넣기
            setData(result)
        })
    },[])
    return(
        <div>
        <div>댓글목록 보여줄 부분</div>
        {
            // 페이지 로드시엔 이부분 안보임
            data.length > 0 ?
            data.map((a,i)=>{
                return(
                    <p key={i}>{a.content}</p>

                )
            }): '로딩중'
        }        
        {/* 관계형DB에는 이름들 보관 x , 비관계형은 최대한 많은 정보 집어넣어도 좋음 */}
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
            }).then()
            // then 활용 댓글 저장완료시 서버에서 댓글목록 보여주기
        }}>댓글전송</button>
      </div>
    )
}