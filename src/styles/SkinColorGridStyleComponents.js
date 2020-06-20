import styled from "styled-components"
import { LARGE_BOX_SIZE } from "../constants"


export const SkinColorGridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const NameBox = styled.div`
    width: ${LARGE_BOX_SIZE};
    height: ${LARGE_BOX_SIZE};
    font-size: 14px;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    left: 0;
    cursor: ${props => props.photoLink ? "pointer" : "default" };
    color: ${props => props.photoLink ? "#000000" : "default" };

    &:hover {
        text-decoration: ${props => props.photoLink ? "underline" : "" };
    }
`

export const HighlightDot = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 10px;
    width: 10px;
    margin: 4px;
    background-color: red;
    border-radius: 50%;  
`

export const PhotoLink = styled.a`
    cursor: pointer;
    color: #000000;
    
    &:hover {
        text-decoration: underline;
    }
`