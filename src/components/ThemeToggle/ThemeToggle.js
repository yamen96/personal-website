import React from 'react'
import styled from 'styled-components';
import { ReactComponent as MoonIcon } from './moon-icon.svg';
import { ReactComponent as SunIcon } from './sun-icon.svg';

const ToggleContainer = styled.button`
  background: #787F8D;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 7px 1vw;
  padding: 5px;
  width: 50px;
  height: 26px;
  transition: all 0.15s ease-in-out;

  &:hover {
    background: #333333;
  }  

  svg {
    height: auto;
    width: auto;
    transition: all 0.3s ease-in-out;
    
    // sun icon
    &:first-child {
      fill-opacity: ${({ isDark }) => isDark ? '1' : '0'};
      transform: ${({ isDark }) => isDark ? 'translateX(0)' : 'translateX(15px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      fill-opacity: ${({ isDark }) => isDark ? '0' : '1'};
      transform: ${({ isDark }) => isDark ? 'translateX(-15px)' : 'translateX(0px)'};
    }
  }
`;

const ThemeToggle = ({onClick, theme}) => {
  return (
    <ToggleContainer onClick={onClick} isDark={theme == 'dark'}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default ThemeToggle;