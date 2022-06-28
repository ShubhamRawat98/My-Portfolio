import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
// import uiLogo from '../../assets/images/ui.png'
import Loader from 'react-loaders'

const Studies = () => {

  const [letterClass, setLetterClass] = useState('text-animate ')
  const aboutMe = "Academic"
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
      <div className='container study-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={aboutMearray} idx={15} />
          </h1>
          <div className='text-box'>
            <div className='degreeBox'>
              <div className='degreeName'>
                <div>Master of computer Application</div>
                <div>2020-2022</div>
              </div>
              <div className="collegeName">Graphic Era Hill University</div>
            </div>
          </div>
          <div className='text-box'>
            <div className='degreeBox'>
              <div className='degreeName'>
                <div>Bachelors of Science in Information Technology</div>
                <div>2017-2020</div>
              </div>
              <div className="collegeName">Graphic Era Hill University</div>
            </div>
          </div>
          <div className='text-box'>
            <div className='degreeBox'>
              <div className='degreeName'>
                <div>Higher Secondary Certificate</div>
                <div>2016</div>
              </div>
              <div className="collegeName">Raja Rammohan Roy Academy Cambridge School</div>
            </div>
          </div>
          <div className='text-box'>
            <div className='degreeBox'>
              <div className='degreeName'>
                <div>Secondary School Certificate</div>
                <div>2014</div>
              </div>
              <div className="collegeName">Raja Rammohan Roy Academy Cambridge School</div>
            </div>
          </div>

        </div>
        </div>
      <Loader type="pacman" />
    </>
  )
}
export default Studies;