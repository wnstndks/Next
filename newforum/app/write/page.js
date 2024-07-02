import Link from "next/link";

// 서버로 POST method 요청하려면 -form 태그 사용
export default function Write() {

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
          <button type="submit">버튼</button>
        </form>
      </div>
    </div>
  );
}
