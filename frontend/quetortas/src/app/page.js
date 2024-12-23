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

      <button onClick={async () =>{
        const response = await fetch('http://localhost:8080/pedido/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include', // Importante: Esto envía las cookies al servidor
          body: JSON.stringify({
              products: [
                  { producto: "6431bc25c9f7ae9c3e41b726", cantidad: 2 },
                  { producto: "6431bc25c9f7ae9c3e41b727", cantidad: 1 }
              ],
              total: 150.50,
              estado: "Pendiente",
              pagado: false,
          }),
      });
  
      if (response.ok) {
          const data = await response.json();
          console.log('Pedido creado:', data);
      } else {
          console.error('Error al crear el pedido:', await response.json());
      }
      }} >
        click for loginasda
      </button>

      

    </div>
  );
}
