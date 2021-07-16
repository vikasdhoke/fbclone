import Image from "next/image";
import {signIn}  from 'next-auth/client';
// place-items-center


function Login() {
    
    return (
        <div className="grid place-content-center ">
            <Image
                src="https://links.papareact.com/t4i"
                height={250}
                width={400}
                objectfit="contain"
            />
            <h1 onClick={signIn} 
            className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer ">Login with facebook</h1>
        </div>
    )
}

export default Login
