import React, { useState, useEffect } from 'react';
import { Bar, LeftDiv, NavList, ListItem, BurgerIconWrapper, BurgerMenuBG, ThemeWrapper } from './styles';
import { Animator } from '../helpers/animationHelper';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import SiteLogo from '../SiteLogo';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

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
                <BurgerIconWrapper onClick={handleClick} burgerMenuIsOpen={burgerMenuIsOpen}>
                    <span className={"lineTop"} />
                    <span className={"lineMiddle"} />
                    <span className={"lineBottom"} />
                </BurgerIconWrapper>
                <ThemeWrapper><ThemeToggle onClick={themeToggler} theme={theme}/></ThemeWrapper>
            </Bar>
            <BurgerMenuBG burgerMenuIsOpen={burgerMenuIsOpen}>
                <ul>
                    {navLinks.map((navLink) => (
                        <li key={navLink} onClick={handleClick}>
                            <a href={`/#${navLink.toLowerCase()}`} >
                                {navLink}
                            </a>
                        </li>))}
                        <ThemeToggle onClick={themeToggler} theme={theme}/>
                </ul>

            </BurgerMenuBG>
        </>
    )
}

export default SiteHeader