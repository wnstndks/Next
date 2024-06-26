// 서버기능 만들려면 app 밖에 pages 폴더 만들고 그 폴더 내 api 폴더 안에 서버 파일
// nextjs는 자동 라우팅 기능이 있기에 겟 포스트 요청 시 자동으로 진행해줌

// 첫째파라미터는 유저들의 요청정보
// 두번째 파라미터는 유저들에 응답해주기위함
export default function handler(요청, 응답) {
  // 누가 /api/test로 GET/POST/PUT/DELETE/PATCH 요청시 여기 코드 실행해줌
  // get 요청을 하는 것은 그냥 주소창에 /api/test라 쓰면 됨
  // 서버는 기능실행 후에 유저에게 응답요청해주어야 함
  console.log(123);

  // 숫자는 마음대로 바꿔도 되는데 위 코드에서 아무런 문제 없다면 status(200)
  // 서버기능 처리실패시엔 status(500)
  // 유저잘못으로 서버기능 처리실패 status(400)

  // 서버에 GET/POST 요청오면 각각 다른 코드 실행하고 싶다? => if문 사용
  if (요청.method == "POST") {
    return 응답.status(200).json("처리완료");
  }
}
