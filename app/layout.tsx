import './globals.css'
import FooterBody from './global components/footer'

//const garamond = EB_Garamond({ subsets: ['latin'],weight:'400' })


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className=' bg-black text-white'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />


      <body>
        <main>
            {children}
        </main>
        
        <footer 
          className='border-t border-gray-700 mt-5  gap-y-10 pt-10 pb-20 px-8 xl:px-20 '>
          <FooterBody/>
        </footer>
          
      </body>
    </html>
  )
}



