'use client'

import { useRouter } from "next/navigation"

export default function WriteLink(){
    
    let router=useRouter()

    return(
        <button onClick={()=>{
            router.push('/write')
        }}>
            글작성하기
        </button>
    )
}