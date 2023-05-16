import React from "react";
import styled from 'styled-components'
import SiteLogo from "../SiteLogo";

const StyledDiv = styled.div`
  background: #333333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  padding: 20px 0;
`

function Footer () {
  return <StyledDiv>
      Designed & Built by <SiteLogo isInverted={true}/>
    </StyledDiv>
}

export default Footer;