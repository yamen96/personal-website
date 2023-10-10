import styled from 'styled-components';
import { motion } from "framer-motion";

export const StyledCard = motion(styled.div`
  background: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow ease-in 0.2s;
  margin: 10px;
  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
  }
  h1 {
    color: #333333;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      transition: all .2s ease-out;
    
      &:hover {
        transform: translate(0, -2px);
      }
    }
  }

  h2 {
    color: #555454;
    font-size: 17px;
    font-weight: 300;
  }
`);

export const StyledSkillsSection = styled.div`
  font-size: 13px;
  color: #555454;
  font-weight: 500;
  margin-top: 20px;
`