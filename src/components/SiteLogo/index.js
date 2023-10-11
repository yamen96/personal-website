import React from 'react';
import styled from 'styled-components'

const StyledHeading = styled.h1`
  margin-left: 10px;
  font-size: 18px;
  padding: 2px 8px 2px 8px;
  color: ${ ({theme}) => theme.mainText};
  &.default {
    border: 2.5px solid ${ ({theme}) => theme.mainText};
  }
  &.inverted {
    border: 2.5px solid white;
    color: white;
  }
`

function SiteLogo ({isInverted = false}) {
    return (
      <a href="#">      
        <StyledHeading className={isInverted ? 'inverted' : 'default'}>YAMEN TAHA</StyledHeading>
      </a>
    )
}

export default SiteLogo