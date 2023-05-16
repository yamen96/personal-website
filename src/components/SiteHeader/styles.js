import styled from 'styled-components'

export const Bar = styled.div`
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.05);
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 55px;
    z-index: 10;

    background-color: rgba(255, 255, 255, 0.8);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    h1 {
        margin-left: 15px;
        margin-top: 12px;
        margin-bottom: 12px;
        font-size: 18px;
        padding: 2px 8px 2px 8px;
        border: 2.5px solid #333333;
    }
`;

export const LeftDiv = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`

export const NavList = styled.ul`
    align-items: baseline ; 
    list-style-type: none;
    display: flex;
    padding-left: 25px;
    @media (max-width: 773px) {
        display: none;
    }
`;

export const ListItem = styled.li`
    margin: 0px 12px 0px 12px;
    padding: 19px 8px;
    font-size: 16px;
    :hover {
        cursor: pointer;
        transition: font-weight 0.3s ease;
        background-color: #F1F1F1; 
        font-weight: 500   
    }
`;

export const BurgerIconWrapper = styled.div`
  width: 75px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    transition: background-color 0.5s ease;
    background-color: #F1F1F1;    
  }
  @media (min-width: 773px) {
    display: none;
  }

  .lineTop, .lineMiddle, .lineBottom {
    width: 25px;
    height: 2px;
    background: #333333;
    margin: 3px;
    transition:transform 0.2s ease;
  }

  .lineMiddle {
    height: ${props => props.burgerMenuIsOpen ? '0px' : '2px'};
  }

  .lineTop {
    transform: translate(${props => props.burgerMenuIsOpen ? '0, 4.5px' : '0, 0'}) rotate(${props => props.burgerMenuIsOpen ? '225deg' : '0deg'});

  }

  .lineBottom {
    transform: translate(${props => props.burgerMenuIsOpen ? '0, -10px' : '0, 0'}) rotate(${props => props.burgerMenuIsOpen ? '135deg' : '0deg' });
  }
`

export const BurgerMenuBG = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    height: ${props => props.burgerMenuIsOpen ? '100%' : '0px'};
    transition: height 0.2s ease;
    z-index: 9;
    overflow: hidden;
    @media (min-width: 773px) {
        display: none;
    }
    ul {
        list-style-type: none;
    }
    li {
        margin: 20px 0;
        cursor: pointer;
        :hover {
            font-weight: 500   
        }
    }
`