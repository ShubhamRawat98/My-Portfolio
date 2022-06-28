import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
// import uiLogo from '../../assets/images/ui.png'
import Loader from 'react-loaders'

const Photos = () => {

  const [letterClass, setLetterClass] = useState('text-animate ')
  const aboutMe = "My Travels"
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
      <div className='container travel-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={aboutMearray} idx={15} />
       
          </h1>
          <p>
            The best thing about travelling is exploring things that you are completely unaware of. To be able to meet different people and learn about their life as well as unique stories they have it is what makes a traveller excited.

          </p>
          <p>
           You get to discover places that fills you with inner peace and broaden your perspectve. It is the best form of learning. And to make travelling easier I will soon be working on a website project "My Travel".

          </p>
          <p>
            A website thats provide you with a lots of tips and tricks straight from the locals.<br></br> Ofcourse starting from DEHRADUN.<br></br> <strong>Coming Soon.....</strong>

          </p>
        </div>
        </div>
        <div className='pic-zone'>
          <div className='slider'>
          <div className='slide' id='slide1'>
          </div>
          <div className='slide' id='slide2'>
          </div>
          </div>
          <div className='slider'>
          <div className='slide' id='slide3'>
          </div>
          <div className='slide' id='slide4'>
          </div>
          </div>
        </div>
      <Loader type="pacman" />
    </>
  )
}
export default Photos;