import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogoutBtn from "./LogoutBtn";

// server componet에서 쿠키출력
import { cookies } from "next/headers";
import Darkmode from "./Darkmode";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  // 현재 로그인된 유저의 정보 출력 - 서버컴포넌트이기에 터미널에 출력
  let result = await getServerSession(authOptions);
  // console.log(result)

  // 동적으로 바뀌는 UI 만들기
  // 1. state 만들고 현재 UI상태 보관
  // 2. state에 따라서 UI가 어떻게 보일지 작성
  // 3. 원할 때 state 변경
  // useState('다크')
  // state의 단점 : 새로고침시 기본값으로 리셋됨
  // -> 다크모드 여부를 DB에 저장하기
  // 다크인경우 배경 까매지는 class 추가하기 -localsStorage/Cookie사용

  // 쿠키 출력
  let res = cookies().get("mode");
  console.log(res);

  return (
    <html lang="en">
      <body
        className={res != undefined && res.value == "dark" ? "dark-mode" : ""}
      >
        <div className="navbar">
          <Link href="/" className="logo">
            NewForum
          </Link>
          <Link href="/list">List</Link>
          {/* JSX 안에서 if쓰고 싶으면 삼항연산자 */}
          {
            // 조건식?조건식이참일때:조건식거짓일때
            result ? (
              <span>
                {result.user.name}
                <LogoutBtn />
              </span>
            ) : (
              <LoginBtn />
            )
          }
          <Darkmode />
        </div>
        {children}
      </body>
    </html>
  );
}
