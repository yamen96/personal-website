import React, { useState, useEffect } from 'react';
import { Bar, LeftDiv, NavList, ListItem, BurgerIconWrapper, BurgerMenuBG } from './styles'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import SiteLogo from '../SiteLogo';

function SiteHeader () {
    const navLinks = ["ABOUT ME", "EXPERIENCE", "PROJECTS", "CONTACT ME"];
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
    const { width } = useWindowDimensions();
    const minWidthInPx = 773;

    const handleClick = e => {
        setBurgerMenuIsOpen(!burgerMenuIsOpen);
    }

    useEffect(() => {
        //prevent scrolling when burger menu is open
        document.body.style.overflow = burgerMenuIsOpen ? "hidden" : "scroll";
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
                    <SiteLogo />
                    <NavList>
                        {navLinks.map(navLink => 
                        (<a href={`/#${navLink.toLowerCase()}`}>
                            <ListItem key={navLink}>{navLink}</ListItem>
                        </a>))}
                    </NavList>
                </LeftDiv>
                <BurgerIconWrapper onClick={handleClick} burgerMenuIsOpen={burgerMenuIsOpen}>
                    <span className={"lineTop"} />
                    <span className={"lineMiddle"} />
                    <span className={"lineBottom"} />
                </BurgerIconWrapper>
            </Bar>
            <BurgerMenuBG burgerMenuIsOpen={burgerMenuIsOpen}>
                <ul>
                    {navLinks.map(navLink => (<li key={navLink} onClick={handleClick}>
                            <a href={`/#${navLink.toLowerCase()}`}>
                                {navLink}
                            </a>
                        </li>))}
                </ul>
            </BurgerMenuBG>
        </>
    )
}

export default SiteHeader