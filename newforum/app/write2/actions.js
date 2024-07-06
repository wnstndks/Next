// client component에서 쓰려면

"use client";

export default async function handleSubmit(formData) {
  // 서버api보관 - form 전송시 이 코드 실행됨
  "user server";
  console.log(formData.get("title"));
}
