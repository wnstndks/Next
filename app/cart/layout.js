// 상위의 layout.js가 있다면 그걸로 페이지를 싸매게 된다
// 페이지 변경과 상관없이 계속 보여줄 UI는 layout.js를 쓰면 편하다

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* 모든 페이지에 보일 HTML은 layout.js에서 작성 */}
        <p>현대카드 무이자이벤트중</p>
        {children}
      </body>
    </html>
  )
} 
