// 로딩중 UI 만들려면 
// 1. loading.js 만들고
// 2. export default 컴포넌트
// loading.js 그냥 만들기만 하면 됨
// 클라이언트 컴포넌트 만들어도 상관없음
// 동작원리
// 리액트 Suspence는 로딩중 UI를 넣을 수 있고 이 안에 보여줄 페이지 전에 로딩중이라는 것을 띄울수 있음

export default function Loading(){
    return(
        <h4>로딩중~~~~~~~</h4>
    )
}