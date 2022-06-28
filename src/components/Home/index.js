import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from "../../assets/images/logo-s.png"
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'
import "animate.css"


const Home = () =>{

    const [letterClass, setLetterClass] = useState('text-animate')
    const name = "hubham"
    const nameArray = Array.from({length: name.length}, (_, i) => name[i])
    const myself = "IT Student"
    const myselfArray = Array.from({length: myself.length}, (_, i) => myself[i])

    useEffect(() => {
        let timeoutId =  setTimeout(() => {
               setLetterClass('text-animate-hover')
            }, 3000)
    
            return () => {
              clearTimeout(timeoutId)
          }
          }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                  <span className={letterClass}>H</span>  
                  <span className={`${letterClass} _12`}>i,</span>  
                 <br/>
                  <span className={`${letterClass} _13`}>I</span>  
                  <span className={`${letterClass} _14`}>'m</span>  
                <span className={`${letterClass} _15`}><img src={LogoTitle} alt="developer"/></span>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx=
                {16} /> <br/>
                <AnimatedLetters letterClass={letterClass} strArray={myselfArray} idx=
                {23} />
                </h1>
                <h2>Web Designer / Frontend Developer</h2>
                <Link to="/Contact" className='flat-button'>Just Say Hi</Link>
               

            </div>
        <Logo/>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home;