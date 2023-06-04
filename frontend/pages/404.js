import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Error = () => {
  const router = useRouter();
 
// useEffect(()=>{
//   setTimeout(()=>{
//     router.push('/')
//   },3000)
// },[router]);
  return (
    <div><h1>404</h1><h1>Rederect...</h1></div>
   
  )
}

export default Error