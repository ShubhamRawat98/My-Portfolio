import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { faHtml5, faPython, faCss3, faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import uiLogo from '../../assets/images/ui.png'
import Loader from 'react-loaders'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate ')
  const aboutMe = "About"
  const aboutMearray = Array.from({ length: aboutMe.length }, (_, i) => aboutMe[i])

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={aboutMearray} idx={15} />
          </h1>
          <p>
          A <strong>front-end developer</strong> who loves designing. <br></br> I code to bring my creative ideas to life in form of websites.

          </p>
          <p>
           I have created academic as well as personal projects using HTML/CSS and JavaScript.<br></br> I have also used technologies like React, Git, Github, Sass, Bootstrap, Pug, Jquery etc.

          </p>
          <p>
           I'm a graduand currently pursuing Master of Computer Application from<br></br> <strong>Graphic Era Hill University, Dehradun</strong>. After clearing my final year exams on 10th June, 2022 I am just waiting to recieve my master's degree.

          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            {/* <div className="face6">
              <img src={uiLogo} alt="developer" />
            </div> */}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default About;