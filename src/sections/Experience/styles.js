import styled from 'styled-components'

export const DateSection = styled.div`
  border-right: 5px #cccccc solid;
  width: 200px;
  margin-right: 30px;
  padding-right: 10px;
  font-size: 15px;
  display: flex;
  align-items: center;
  color: #555454;
  @media (max-width: 768px) {
    display: none;
  }
`

export const Dot = styled.span`
  height: 15px;
  width: 15px;
  background-color: #cccccc;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  right: -19px;
  outline: 3.5px var(--main-bg-color) solid;
`