import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const StyledHeading = styled.h1`
    text-transform: uppercase;
    font-size: 45px;
`

const HeadingUnderline = styled.div`
    width: 100%;
    margin-bottom: 25px;
`

const StyledLine = styled.hr`
    background: #cccccc;
    height: 3px;
    border: none;
`

const SecondStyledLine = styled.hr`
    width: 30%;
    background: black;
    border: none;
    height: 3px;
    margin: -3px;
`

function SectionHeader (props) {
    const [lineWidth, setLineWidth] = useState(0);
    const offset = 20;
    const multiplier = 20;

    const handleScroll = () => {
        const yPosition = window.pageYOffset;
        setLineWidth( offset + (yPosition / window.innerHeight) * multiplier);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <StyledHeading>{props.children}</StyledHeading>
            <HeadingUnderline>
                <StyledLine/>
                <SecondStyledLine width={lineWidth}/>
            </HeadingUnderline>
        </>)
}

export default SectionHeader;