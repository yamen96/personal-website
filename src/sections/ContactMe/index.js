import React from 'react';
import { SiteSection } from '../../components/SiteSection';
import { ContactMeWrapper, ContactMeContent } from './styles';

function ContactMe () {
  return <SiteSection id="contact me">
    <ContactMeWrapper>
      <h1>CONTACT ME</h1>
      <ContactMeContent>
        <a href={"mailto:yamen.awida@gmail.com"} target="_blank" ><img src={"company-logos/mail-svgrepo-com.svg"} height={50} alt={"mail link"}/></a>
        <a href={"https://www.linkedin.com/in/yamentaha//"} target="_blank" ><img src={"company-logos/linkedin-svgrepo-com.svg"} height={50} alt={"linkedin link"}/></a>
        <a href={"https://www.instagram.com/yamen.t/"} target="_blank" ><img src={"company-logos/instagram-svgrepo-com.svg"} height={50} alt={"instagram link"}/></a>
        <a href={"https://github.com/yamen96"} target="_blank" ><img src={"company-logos/github-142-svgrepo-com.svg"} height={45}  alt={"github link"}/></a>
      </ContactMeContent>

    </ContactMeWrapper>
  </SiteSection>
}

export default ContactMe;