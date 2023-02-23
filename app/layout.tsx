import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
      <body className='h-screen overflow-auto dark:bg-black dark:text-white '>

        <nav className='flex justify-around items-center h-16 border-b border-gray-700 bg-black'>

          <div className='flex'>
            <Link className='hover:text-white' href='https://turbo.build'>
              <Image  src='/turbopack.png' alt='turbopack-logo' width={30} height={30}/>
            </Link>
          </div>

          <div id="box" className='border   border-gray-600 rounded-lg  text-md'>
            <button className='hover:text-white active:text-white  text-gray-400  focus:bg-neutral-700 rounded-md px-2 my-1 ml-1 '>
              Repo
            </button>
            &nbsp;
            <button className='hover:text-white active:text-white text-gray-400  focus:bg-neutral-700 rounded-md px-2 my-1 mr-1  '>
              Pack
            </button>
          </div>

          <div>
            <button>
              <svg className='fill-gray-200 hover:fill-white active:fill-white h-4' viewBox="0 0 70 50">   <g      transform="translate(-53.52685,-98.5)"      >      <g        transform="translate(-3.5,98.5)"         >         <g            >            <path            d="m 58.478955,40 v 5 h 65.000005 v -5 z"               />            <path            d="m 58.478955,20 v 5 h 65.000005 v -5 z"               />            <path            d="M 123.47896,0 V 5 H 58.478955 V 0 Z"               />      </g>     </g>   </g> </svg>
            </button>
          </div>

        </nav>
        <main>

          <div className='flex flex-col justify-center items-center pt-14'>

            {children}
          </div>
        </main>
        
        <footer className='border-t border-gray-700 mt-5  gap-y-10 pt-10 pb-20 px-8 xl:px-20 '>
          <div className='xl:flex xl:mb-20 '>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:w-2/3'>
              <FooterListHeading title='Resources'>
                <FooterListItem content="Blog"/>
                <FooterListItem content="Releases"/>
              </FooterListHeading>

              <FooterListHeading title="Turborepo">
                <FooterListItem content="Documentation"/>
                <FooterListItem content="API Reference"/>
                <FooterListItem content="FAQ"/>
              </FooterListHeading>

              <FooterListHeading title='Turbopack'>
                <FooterListItem content="Documentation"/>
                <FooterListItem content="Features"/>
              </FooterListHeading>

              <FooterListHeading title="Company">
                <FooterListItem content="Vercel"/>
                <FooterListItem content="Open Source Software"/>
                <FooterListItem content="Contact Sales"/>
                <FooterListItem content="Twitter"/>
              </FooterListHeading>

              <FooterListHeading title='Legal'>
                <FooterListItem content='Privacy Policy'/>
                <FooterListItem content='Terms of Service'/>
              </FooterListHeading>

              <FooterListHeading title='Support'>
                <FooterListItem content='GitHub'/>
                <FooterListItem content='Discord'/>
              </FooterListHeading>
            </div>

            <div className='mt-5 xl:w-1/3'>
              <p>Subscribe to our newsletter</p>
              <p className='mt-3 text-gray-400 text-sm'>Subscribe to the Turbo newsletter and stay updated on new releases and features, guides, and case studies.</p>
              <form 
              //onSubmit={()=>{alert("Aight.")}} 
              className='mt-3 '
              >
                <input type="email" placeholder='you@example.com'
                  className='w-full sm:w-1/2 p-2 rounded-md bg-inherit border border-gray-400  placeholder:text-gray-400'/>
                
                <button className='w-full sm:w-fit sm:ml-2 p-2 rounded-md bg-white my-3 text-black font-semibold'>
                  Subscribe</button>
              </form>
            </div>
          
          
          </div>
          <div className='mt-4'>
            <svg height="20" viewBox="0 0 283 64" fill="none"><title>Vercel</title><path fill="currentColor" d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path></svg>
            <figcaption className='text-sm text-gray-400 mt-3'>© 2023 Vercel, Inc. All rights reserved.</figcaption>
          </div>

          <div className='mt-10 text-gray-400 flex flex-col w-fit '>
            <span className='text-2xl mb-2'>
              Project Tree
            </span>
            <Link href="/" className='hover:text-white indent-4'>Homepage</Link>
            <Link href="/framer-test" className='hover:text-white indent-4'>Framer Examples</Link>
            
          </div>

        </footer>  
      </body>
    </html>
  )
}


const FooterListItem = (props:{content:string}) => (
  <li className='hover:text-white w-fit text-sm'><a href="#">{props.content}</a></li>

)

const FooterListHeading = (props:{
  children: ReactNode,
  title:string
}) => (
  <div className='p-2 cursor-default'>
    {props.title}
  <ul className='flex flex-col mt-4 gap-1 text-gray-500 w-fit '>
    {props.children}
  </ul>
</div>
)
