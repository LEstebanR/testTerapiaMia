import { useState } from 'react'
import Footer from '../components/Footer'
import  Header  from '../components/Header'
import Intro from '../components/Intro'
import Features from '../components/Features.jsx'
import Download from '../components/Download.jsx'
import Questions from '../components/Questions.jsx'
import Form from '../components/Form'
import styles from '../styles/Home.module.css'

const Home = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <Header setShowMenu={setShowMenu} showMenu={showMenu}/>
      <Intro/>
      <Features/>
      <Download/>
      <Questions/>
      <Form/>
      <Footer/>
    </>
  )
}

export default Home