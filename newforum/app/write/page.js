

// 서버로 POST method 요청하려면 -form 태그 사용
export default function Write(){
    return(
        <div>
            <h4>글 작성할거냐</h4>
            {/* action이라는 속성 내에 url 쓰고, method에 POST 속성 */}
            <form action="/api/test" method="POST">
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}