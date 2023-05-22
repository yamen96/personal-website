import styled from 'styled-components'

export const StyledCard = styled.div`
  background: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  margin: 15px 0;
  width: 100%;

  h1 {
    color: #333333;
    font-size: 20px;
    font-weight: 500;
  }

  h2 {
    color: #555454;
    font-size: 18px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const StyledCardHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 2px #cccccc ${props => props.isExpanded ? "solid" : "transparent"}; 
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
  transition: all ease-out 0.2s;

  overflow: hidden;
  padding:  ${props => props.isExpanded ? "15px" : "0px"} 30px;
`

export const StyledDateSection = styled.div`
  display: block;
  font-size: 13px;
  font-weight: 500;

  color: #555454;
  @media (min-width: 768px) {
    display: none;
  }
`

export const StyledSkillsSection = styled.div`
  font-size: 15px;
  color: #555454;
  font-weight: 500;
`

export const DropdownContainer = styled.div`
  padding: 0 20px;
  margin-top: -10px;
  transition: all .2s ease-out;
  
  &:hover {
    transform: translate(0, ${props => props.isExpanded ? "-5px" : "5px"});
  }

  img {
    transform: scaleY(${props => props.isExpanded ? "-1" : "1"});
  }
`