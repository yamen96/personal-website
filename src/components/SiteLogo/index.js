import React from 'react';
import styled from 'styled-components'

const StyledHeading = styled.h1`
  margin-left: 10px;
  font-size: 18px;
  padding: 2px 8px 2px 8px;
  .default {
    border: 2.5px solid #333333;
  }
  &.inverted {
    border: 2.5px solid white;
  }
`

function SiteLogo ({isInverted = false}) {
    return (
      <a href="#">      
        <StyledHeading className={isInverted ? 'inverted' : 'defalt'}>YAMEN TAHA</StyledHeading>
      </a>
    )
}

export default SiteLogo