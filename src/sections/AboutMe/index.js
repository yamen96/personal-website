import React from 'react';
import { Section } from './styles'
import  Button  from '../../components/Button'

function AboutMe () {
    return (
        <Section id={"about me"}>
            <div className='MyImg'>
                <img src={"me.png"} height={150}/>
            </div>
            <p className="Intro">
                Hi, my name is
            </p>
            <h1 className="Header">YAMEN TAHA</h1>
            <p className="AboutMeBlurb">
                I'm a passionate <b>software engineer</b> with a strong focus on creating user-friendly applications 
                that solve real-world problems. I'm experienced in front-end design, back-end development, 
                and scalable system architecture. With experience in multiple cloud providers, I'm well-equipped 
                to tackle any project and I'm committed to delivering high-quality software that delights users and 
                exceeds expectations. I'm eager to continue learning and growing as a software engineer.
            </p>
            <div className='Buttons'>
                <Button href={process.env.PUBLIC_URL + "/YamenTaha_Resume_v3.pdf"} download={"YamenTaha_Resume.pdf"}>
                    Download Resume
                </Button>
                <Button href={"mailto:yamen.awida@gmail.com"}>Get In Touch</Button>
            </div>
        </Section>

    )
}

export default AboutMe