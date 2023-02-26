import { EB_Garamond } from '@next/font/google'
import NavigationBar from './global components/navbar'
import LoreumBody from './global components/loreum'


export default function Home() {
  return (
    <>
      <NavigationBar page="root"/>
      <LoreumBody/>
    </>
  )
}
