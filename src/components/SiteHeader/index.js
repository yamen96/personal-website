import React, { useState, useEffect } from 'react';
import { Bar, LeftDiv, RightDiv, NavList, ListItem, BurgerIconWrapper, BurgerMenuBG, ThemeIconWrapper } from './styles';
import { Animator } from '../helpers/animationHelper';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import SiteLogo from '../SiteLogo';

function SiteHeader ({theme, themeToggler}) {
    const navLinks = ["ABOUT ME", "EXPERIENCE", "PROJECTS", "CONTACT ME"];
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
    const { width } = useWindowDimensions();
    const minWidthInPx = 773;

    const handleClick = e => {
        setBurgerMenuIsOpen(!burgerMenuIsOpen);
    }

    useEffect(() => {
        //prevent scrolling when burger menu is open
        document.body.style.overflow = burgerMenuIsOpen ? "hidden" : "auto";
    }, [burgerMenuIsOpen]);

    useEffect(() => {
        if (width > minWidthInPx) {
            setBurgerMenuIsOpen(false);
        } 
    }, [width]);

    return (
        <>
            <Bar>
                <LeftDiv>
                    <SiteLogo/>
                    <NavList>
                        {navLinks.map((navLink, index) => 
                        (<a href={`/#${navLink.toLowerCase()}`} key={navLink} >
                            <ListItem key={navLink} {...new Animator().withDirection(-10).withDelay(1.2 + index*0.2).withDuration(0.7).getProps()}>
                                {navLink}
                            </ListItem>
                        </a>))}
                    </NavList>
                </LeftDiv>
                <RightDiv>
                    <ThemeIconWrapper onClick={themeToggler}>
                        {theme == 'dark' ? <img src={'sun-icon.svg'} /> : <img src={'moon-icon.svg'} />}
                    </ThemeIconWrapper>
                    <BurgerIconWrapper onClick={handleClick} burgerMenuIsOpen={burgerMenuIsOpen}>
                        <span className={"lineTop"} />
                        <span className={"lineMiddle"} />
                        <span className={"lineBottom"} />
                    </BurgerIconWrapper>
                </RightDiv>
            </Bar>
            <BurgerMenuBG burgerMenuIsOpen={burgerMenuIsOpen}>
                <ul>
                    {navLinks.map((navLink) => (
                        <li key={navLink} onClick={handleClick}>
                            <a href={`/#${navLink.toLowerCase()}`} >
                                {navLink}
                            </a>
                        </li>))}
                </ul>

            </BurgerMenuBG>
        </>
    )
}

export default SiteHeader