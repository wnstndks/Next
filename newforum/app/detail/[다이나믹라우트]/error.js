'use client'

// 에러페이지 만들려면
// 1. error.js 만들고
// 2. export default 컴포넌트
// 3. 클라이언트 컴포넌트로 만들어야하고
// 괄호 안에는 error,reset넣을수 있음
// {error-에러정보 알려줌, reset-페이지 다시로드해줌}

export default function Error(){
    return(
        <div>
        <div>에러남 수고</div>
        <button onClick={()=>{reset()}}>버튼</button>
        </div>
    )
}