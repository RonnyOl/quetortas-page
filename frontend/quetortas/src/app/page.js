"use client"
import Image from "next/image";

export default function Home() {
  /*return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>test</h1>

      <button onClick={async () =>{
        const datos = await fetch('http://localhost:8080/tortas/', {
          method: 'GET',})
       const res = await datos.json()
       console.log(res)
      }} >
        click for login
      </button>

      

    </div>
  );
*/
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>test</h1>

      <button onClick={async () =>{
        const datos = await fetch('http://localhost:8080/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: 'andres',
            password: 'hola'
          }),
           credentials: 'include'
        })
        
       const res = await datos.json()
       console.log(res)
      }} >
        click for login
      </button>

      

    </div>
  );
}
