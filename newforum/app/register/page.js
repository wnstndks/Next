export default function Register() {
  return (
    <div>
    <h4>회원가입 할래 아님 죽을래</h4>
      <div className="p-20">
        <form action="/api/my/register" method="POST">
          <input name="id" placeholder="id 입력"></input>
          <input name="pw" placeholder="pw 입력"></input>
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
}
