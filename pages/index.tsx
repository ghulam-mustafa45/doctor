
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Docdiv from './components/Docdiv'
import Expertguide from './components/Expertguide'
import Howsolution from './components/Howsolution'
import Schedule from './components/Schedule'
import Rpms from './components/Rpms'
import Footer from './components/Footer'
import Change from './components/Change'


export default function Home() {
  return (
    <>
    <Navbar/>
    <Docdiv/>
    <Expertguide/>
    <Howsolution/>
    <Schedule/>
    <Change/>
    <Rpms/>
    <Footer/>
    </>
  )
}
