import React from 'react';
import styled from 'styled-components'

const CustomButton = styled.a`
    background-color: #333333;
    border: 3px solid transparent; 
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor:pointer;
    margin: 10px 30px;

    :hover {
        transition: background-color 0.2s ease;
        background-color: white; 
        color: #333333;  
        border: 3px solid; 
    }
`

function Button (props) {
    return (
        <CustomButton {...props}> {props.children} </CustomButton>       
    )
}

export default Button