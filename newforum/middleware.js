import { NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt";

// 그리고 서버는 이런 여러가지 짓거리가 가능합니다.
// 그런데 간혹 하나의 서버기능을 100만개의 서버 API에 동시에 적용하고 싶은 경우가 있습니다.
// 그럴 땐 middleware 쓰면 가능합니다. 
// 요청이랑 응답 사이에 간섭하는 코드라서 middleware 라고 부릅니다. 

export async function middleware(request) {

//   if (request.nextUrl.pathname.startsWith('/write')) {
//     const session = await getToken({ req : request })
//     console.log('세션', session)
//     if (session == null) {
//       return NextResponse.redirect(new URL('/api/auth/signin', request.url));
//     }
//   }

    // NextResponse.next() // 통과
    // NextResponse.redirect() // 다른 페이지로강제이동(주소창도 변경)
    // NextResponse.rewrite() // 다른 페이지로강제이동(주소창은 변경X)


}