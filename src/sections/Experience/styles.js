import styled from 'styled-components'
import { motion } from "framer-motion";

export const DateSection = styled.div`
  border-right: 5px ${({ theme }) => theme.timeline} solid;
  width: 200px;
  margin-right: 30px;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 15px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.mainText};
  @media (max-width: 768px) {
    display: none;
  }
`

export const Dot = styled.span`
  height: 15px;
  width: 15px;
  background-color: ${({ theme }) => theme.timeline};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  right: -19px;
  outline: 3.5px  ${({ theme }) => theme.mainBG} solid;
`

export const Buttons = motion(styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
      flex-direction: column;
  }
`);