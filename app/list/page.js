// import Image from "next/image";
// import apple from '/public/apple.jpg'
// import samsung from '/public/samsung.png'
// import tesla from '/public/tesla.jpg'

"use client";

import { useState } from "react";

export default function List() {
  let 상품 = ["Apple", "Samsung", "Tesla"];
  // 변수 : 데이터 잠깐 저장 가능 = state 데이터 잠깐 저장 가능
  // state가 변경되면 state를 쓰고 있는 html부분도 자동 재덴더링(=자동업데이트)
  let [수량, 수량변경] = useState(0);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {/* <div className="container"> */}
      {상품.map((a, i) => {
        return (
          // map 반복문 사용시 key={유니크한 값} 넣으면 좋음
          // 보통 i를 넣음
          <div className="brand" key={i}>
            <img src={"/logo" + (i + 1) + ".jpg"} className="brand-logo" />

            {/* <img src={`/logo${i}.jpg} */}
            {/* 외부이미지는 폭과 높이 미리 알고 있어야하고, next.config.js에 경로등록도 해주어야함 */}
            {/* <Image src={apple} className="brand-logo"/> */}

            <h4 style={{ textAlign: "center" }}>{a}</h4>
            <span>{수량}</span>

            {/* 이건 client component에서만 쓸수 있음
              next js는  server component이기에 위에서 'use client'를 써야함 */}

            <div className="btn-container">
              <button
                onClick={() => {
                  수량변경(수량 + 1);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  수량변경(수량 - 1);
                }}
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      {/* </div> */}
    </div>
  );
}
