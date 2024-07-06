'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DarkMode(){
  let router = useRouter()

  let [rd, setRd] = useState('☀️');


  useEffect(()=>{
    let 쿠키값 = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
    if (쿠키값 == '') {
      document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
    }
  },[])

  return (
    <span style={{cursor:'pointer'}} onClick={()=>{ 
      let 쿠키값 = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
      if (쿠키값 == 'light') {
        setRd('☀️');
        document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400)
        router.refresh()
      } else if (쿠키값 == 'dark'){
        setRd('🌙')
        document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
        router.refresh()
      }else{
        setRd('☀️');
      }
     }}> {rd} </span>
  )
} 