import Link from "next/link";
import Image from "next/image";
import PageSelect from "@/app/components/navbareffect";

const NavigationBar = (props:{page:string}) => (
  <nav className='flex justify-around items-center h-16 border-b border-gray-700 bg-black'>

    <div className='flex'>
      <Link className='hover:text-white' href='https://turbo.build'>
        <Image  src='/turbopack.png' alt='turbopack-logo' width={30} height={30}/>
      </Link>
    </div>

    <PageSelect page={props.page}/>

    <div>
      <button>
        <svg className='fill-gray-200 hover:fill-white active:fill-white h-4' viewBox="0 0 70 50">   <g      transform="translate(-53.52685,-98.5)"      >      <g        transform="translate(-3.5,98.5)"         >         <g            >            <path            d="m 58.478955,40 v 5 h 65.000005 v -5 z"               />            <path            d="m 58.478955,20 v 5 h 65.000005 v -5 z"               />            <path            d="M 123.47896,0 V 5 H 58.478955 V 0 Z"               />      </g>     </g>   </g> </svg>
      </button>
    </div>

</nav>
)

export default NavigationBar;

