import React from 'react';
import { SiteSection } from '../../components/SiteSection';
import { ContactMeWrapper, ContactMeContent } from './styles';

function ContactMe () {
  return <SiteSection id="contact me">
    <ContactMeWrapper>
      <h1>CONTACT ME</h1>
      <ContactMeContent>
        <a href={"https://github.com/yamen96"}><img src={"company-logos/github-142-svgrepo-com.svg"} height={45}/></a>
        <a href={"https://www.linkedin.com/in/yamentaha//"}><img src={"company-logos/linkedin-svgrepo-com.svg"} height={50}/></a>
        <a href={"https://www.instagram.com/yamen.t/"}><img src={"company-logos/instagram-svgrepo-com.svg"} height={50}/></a>
        <a href={"mailto:yamen.awida@gmail.com"}><img src={"company-logos/mail-svgrepo-com.svg"} height={50}/></a>
      </ContactMeContent>

    </ContactMeWrapper>
  </SiteSection>
}

export default ContactMe;