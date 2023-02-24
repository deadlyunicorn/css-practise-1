import { EB_Garamond } from '@next/font/google'
import NavigationBar from './components/navbar'
import LoreumBody from './components/loreum'


export default function Home() {
  return (
    <>
      <NavigationBar page="root"/>
      <LoreumBody/>
    </>
  )
}
