// import Image from "next/image";
// import apple from '/public/apple.jpg'
// import samsung from '/public/samsung.png'
// import tesla from '/public/tesla.jpg'

export default function List() {
  let 상품 = ["Apple", "Samsung", "Tesla"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {/* <div className="container"> */}
      {
        상품.map((a,i)=>{
          return (
            // map 반복문 사용시 key={유니크한 값} 넣으면 좋음
            // 보통 i를 넣음
            <div className="brand" key={i}>
              <img src={'/logo'+(i+1)+'.jpg'} className="brand-logo"/>
              {/* <img src={`/logo${i}.jpg} */}
              {/* 외부이미지는 폭과 높이 미리 알고 있어야하고, next.config.js에 경로등록도 해주어야함 */}
              {/* <Image src={apple} className="brand-logo"/> */}   
              <h4 style={{textAlign:"center"}}>{a}</h4>
            </div>
          )
        })
      }
      {/* </div> */}
    </div>
  );
}
