import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactMeWrapper = motion(styled.div`
  border: 2.5px solid ${({ theme }) => theme.mainText};
  padding: 30px;
  margin: 30px;
  color: ${({ theme }) => theme.mainText};

  h1 {
    text-transform: uppercase;
    font-size: clamp(35px, 6vw, 45px);
    margin-top: -70px;
    background-color:  ${({ theme }) => theme.mainBG};
    padding: 10px;
    max-width: 290px;
  }
`);

export const ContactMeContent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  a {
    padding: 0 20px;
    margin: 10px;
    transition: all .2s ease-out;
  
    &:hover {
      transform: translate(0, -5px);
    }

    @media (max-width: 773px) {
      margin: 7.5px;
      padding: 0 7.5px;
    }
  }

  img {
    @media (max-width: 773px) {
      width: 1.25rem;
    }
  }
`