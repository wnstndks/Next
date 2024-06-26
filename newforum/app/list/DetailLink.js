'use client'

import { useRouter } from "next/navigation"

export default function DetailLink(){
    // 페이지 이동하는 다른 방법 -useRoute - 클라이언트 컴포넌트 안에서만 사용 가능
    let router=useRouter()
    // usePathname() - 현재 URL 출력
    // useSEarchParams - search Parmameter 
    return(
        <button onClick={()=>{
            // 페이지 이동 가능 push안에는 '이동할 경로'
            // 뒤로가기는 router.back()
            // router.forward()는 앞으로 가기
            // router.refresh()는 바뀐내용만 새로고침
            // router.prefetch('페이지경로') - 이 페이지를 방문시 매우 빠르게 방문할수 있게 페이지 미리로드
            // servercompoent에 쓰고 싶을 때 이렇게 따로 빼서 사용
            // prefetch 기능은 Link 태그에도 내장되어있긴 함
            router.push('/')
        }}>버튼</button>
    )
}