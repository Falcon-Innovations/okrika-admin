



// export default function Home() {


//   return (

//       <div className="bg-violet-900 flex items-center " >
//         <h1>Okrika Admin</h1>

//         <div className="mx-96">





//       </div>
//     </div>



//   );
// }

import Cookies from "js-cookie";
import { useRouter } from "next/router";
import eye from '../images/eye.png';
import Image from "./image";


export default function Home() {
  const router = useRouter();

  const logIn = (e) => {
    e.preventDefault();
    Cookies.set("loggedin", "true");
    router.push("/dashboard");
  };


  return (
    <div className="background-color flex  items-center gap-x-12 ">
      <div className=" ml-44  ">
        <Image/>
      </div>
      <div className="background h-5/6 w-2/6">
        <h2 className="text-center mt-14 text-primary-500 font-sans font-semibold text-base ">OKRICA</h2>
        <div className=" object-center w-80 ml-16 mt-5 shadow-inner   ">
          <p className="pt-8">Welcome to <span className="text-primary-500 font-sans font-semibold text-base">OKRICA ADMIN</span></p>
          <p className="pt-2 text-xs">Enter your credentials to login</p>

          <form onSubmit={(e) => logIn(e)} >
            <p className="pt-4 text-xs">Email*</p>
            <input type='text' placeholder='Enter admin email address' required className="shadow-inner w-80 h-8 rounded  border-gray-300 text-xs " />
            <p className="pt-4 text-xs">Password* </p>
            <div>
              <input type='password' placeholder='Enter password' required className="shadow-inner w-80 h-8 rounded  border-gray-300 text-xs " />
              <img src={eye.src} alt="" className='eye ' />
            </div>


            <div className="flex pt-4">
              <p className="text-xs"><input type="checkbox" className="border-gray-300 " /> Remember me</p>
              <p className="text-xs ml-28 text-primary-600 ">Forgot password?  </p>
            </div>
            <button className="border pl-32 pr-32 w-80 pt-2 pb-2 mt-14  rounded text-sm bg-primary-500 text-white-200">LOGIN</button>
          </form>

        </div>

      </div>
    </div>
  )

}
console.log(eye)