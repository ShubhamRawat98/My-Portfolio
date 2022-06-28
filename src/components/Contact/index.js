import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import emailjs from "@emailjs/browser"
import AnimatedLetters from "../AnimatedLetters"
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate ')
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_64zrk2c', 'template_b882xax', form.current, '5N4eKoj-mEn-JKuDb')
            .then(() => {
                alert('Message successfully sent')
                window.location.reload(false)
            },
                () => {
                    alert('Please try again')
                })
    }


    const contactMe = "SAY HI"
    const contactMearray = Array.from({ length: contactMe.length }, (_, i) => contactMe[i])

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
            <div className=" container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={contactMearray} idx={15} />
                    </h1>
                    <p>Hello, drop your message here or just contact me on <a href='https://www.linkedin.com/in/shubhamrawat99/'target={"_blank"}> LinkedIn </a>,<a href='https://www.facebook.com/rawat8183'target={"_blank"}> Facebook </a> or <a href='https://www.instagram.com/shubhamrawat.22/'target={"_blank"}> Instagram </a></p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="text" name="mobile" placeholder="Mobile No." required />

                                </li>
                                <li>
                                    <input type="email" name="email" placeholder="Email" required />

                                </li>
                                <li>
                                    <textarea type="text" name="message" placeholder="Description" required />
                                </li>
                                <li>
                                    <input type="submit" className="flat-btn" value="SEND" />
                                </li>
                            </ul>

                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    <div className='info'>
                    Shubham Rawat
                    <br></br>
                    Dehradun - 248121 
                    <br></br>
                    Uttarakhand, India
                    <br></br>
                    <span><a href='https://mail.google.com/mail/?view=cm&to=rawat818384@gmail.com' target={"_blank"}>rawat818384@gmail.com</a></span>
                    </div>
                </div>

                <div className="map-wrap">
                    <MapContainer center={[30.291754, 78.033197]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[30.291754, 78.033197]}>
                            <Popup>Lane.No. 7, E-Block, Saraswati Vihar, Ajabput Khurd</Popup>

                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Contact;