import React from 'react';
import { contactMe } from './ContactMe';
import { SiteSection } from '../../components/SiteSection';
import { ContactMeWrapper, ContactMeContent } from './styles';
import { Animator } from '../../components/helpers/animationHelper';

function ContactMe () {
  return <SiteSection id="contact me">
    <ContactMeWrapper {...new Animator().shouldAnimateOnView().withDuration(1).withDirection(-2).getProps()}>
      <h1>CONTACT ME</h1>
      <ContactMeContent>
        {contactMe.map((contact, index) => (
          <a href={contact.link} target="_blank">
            <img src={contact.imgSrc} height={contact.height} alt={contact.alt}/>
          </a>
        ))}
      </ContactMeContent>

    </ContactMeWrapper>
  </SiteSection>
}

export default ContactMe;