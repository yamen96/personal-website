import React from 'react';
import { motion } from "framer-motion";
import { Section } from './styles';
import { Animator } from '../../components/helpers/animationHelper';
import  Button  from '../../components/Button';

function AboutMe () {


    return (
        <Section id={"about me"}>
            <motion.div {...new Animator().withDelay(1.5).getProps()} className='MyImg'>
                    <img src={"me.png"} height={150} alt={"picture of me"}/>
            </motion.div>
            <motion.p {...new Animator().withDelay(0.2).withDuration(1).getProps()} className="Intro">
                Hi, my name is
            </motion.p>
            <motion.h1 {...new Animator().withDelay(0.2).withDuration(1).getProps()} className="Header">
                YAMEN TAHA
            </motion.h1>
            <motion.p {...new Animator().withDelay(1.5).getProps()} className="AboutMeBlurb">
                I'm a <b>software engineer</b> with a strong focus on creating user-friendly applications 
                that solve real-world problems. I'm experienced in front-end design, back-end development, 
                and scalable system architecture. With experience in multiple cloud providers, I'm well-equipped 
                to tackle any project and I'm committed to delivering high-quality software that delights users and 
                exceeds expectations. I'm eager to continue learning and growing as a software engineer.
            </motion.p>
            <motion.div {...new Animator().withDelay(1.5).getProps()} className='Buttons'>
                <Button href={process.env.PUBLIC_URL + "/YamenTaha_Resume_v3.pdf"} download={"YamenTaha_Resume.pdf"}>
                    Download Resume
                </Button>
                <Button href={"mailto:yamen.awida@gmail.com"}>Get In Touch</Button>
            </motion.div>
        </Section>

    )
}

export default AboutMe