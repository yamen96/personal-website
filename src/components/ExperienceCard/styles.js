import styled from 'styled-components';
import { motion } from "framer-motion";

export const StyledCard = motion(styled.div`
  background: ${({ theme }) => theme.secondaryBG};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  margin: 15px 0;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.mainText};
    font-size: 20px;
    font-weight: 500;
  }

  h2 {
    color:  ${({ theme }) => theme.secondaryText};
    font-size: 18px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`);

export const StyledCardHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${props => props.isExpandable ? "pointer" : "auto"};
  border-bottom: 2px  ${({ theme }) => theme.divider} ${props => props.isExpanded ? "solid" : "transparent"};
`

export const StyledCardContent = styled.div`
  li {
    font-size: 17px;
    font-weight: 300;
    padding-bottom: 10px;
    padding: 0 10px;
  }
  ul {
    padding: 15px;
    list-style-type: square;
  }
  max-height: ${props => props.isExpanded ? "500px" : "0px"};
  transition: all ease-out 0.5s;

  overflow: hidden;
  padding:  ${props => props.isExpanded ? "15px" : "0px"} 30px;
`

export const StyledDateSection = styled.div`
  display: block;
  font-size: 13px;
  font-weight: 500;

  color: ${({ theme }) => theme.secondaryText};
  @media (min-width: 768px) {
    display: none;
  }
`

export const StyledSkillsSection = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.secondaryText};
  font-weight: 500;
`

export const DropdownContainer = styled.div`
  padding: 0 20px;
  margin-top: -10px;
  transition: all .2s ease-out;
  
  &:hover {
    transform: translate(0, ${({isExpanded, isExpandable}) => 
      !isExpandable ? '0px' : isExpanded ? "-5px" : "5px"});
  }

  img {
    opacity: ${props => props.isExpandable ? "1" : "0.3"};
    transform: scaleY(${props => props.isExpanded ? "-1" : "1"});
    ${({ theme }) => {
      if (theme.name === 'dark') {
        return `-webkit-filter: invert(1);
        filter: invert(1);`
      }
    }};
  }
`