import Hello from './data.js'
// export 내 대괄호 작성시 작명안됨- 그것과 똑같게
// import {age,name} from './data.js'
// ./는 현재 경로라는 의미
// ../는 내 상위 폴더로 이동하라는 의미

export default function Cart() {
  let 장바구니 = ['Iphone','Galaxy']
    return (
      <div>
        <h4 className="title">Cart</h4>
        <CartItem item={장바구니[0]}/>
        <CartItem item={장바구니[1]}/>
        {/* <Hello/> */}
        <Banner content="롯데카드"/>
        <Btn color="red"/>
        <Btn color="blue"/>
      </div>
    )
  } 

function Banner(props){
  return <h5>{props.content} 결제 행사중</h5>
}

function Btn(props){
  return <button style={{backgroundColor:props.color}}>{props.color} 버튼</button>
}

  // component 만드는 법
  // 1. function 작명(){}
  // 2. return(축약할 긴 HTML)
  // 3. <작명/>사용
  function CartItem(props){
    return(
      <div className="cart-item">
          <p>{props.item}</p>
          <p>$40</p>
          <p>1개</p>
        </div>
    )

  }

  // server component - 아무데서나 대충만든것 - html에 자바스크립트 기능넣기 불가능 useState, useeEffect 사용불가
  // client component - 파일 맨 위에 'use client' 대고 만든것 - 위의 것 사용 가능
  // 큰 페이지는 server, js기능 필요한 곳만 client component


  // 데이터가 많은 컴포넌트에서 필요하면 데이터를 그들 중 최고 부모 컴포넌트에 보관해야 좋음
