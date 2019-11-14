import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    z-index: 2;
    display: grid;
    height: 720px;
    width: 1280px;
    background-color: #1a1919;
    margin: 0;
    grid-template-rows: ${
        props => 
            props.menu ? "106px 1fr 87px 142px" :
            props.settings ? "106px 1fr auto 142px" :
            props.television ? "106px 1fr auto 142px" :
            props.program ? "106px 1fr auto 142px" : ""}
    grid-template-columns: ${
        props => 
            props.menu ? "270px auto 1fr" :
            props.settings ? "270px 3fr 2fr" :
            props.television ? "270px 505px 505px" :
            props.program ? "2fr 3fr 3fr" : ""}
    overflow: hidden;
    grid-template-areas: ${
        props => 
            props.menu ?
                `"vectra nav-selected clock"
                "background-left-top nav-selected background-right-top"
                "nav-left nav-selected nav-right"
                "background-left-bottom nav-selected background-right-bottom"` :
            props.settings ? 
                `"vectra nav-selected clock"
                "background-left-top nav-selected background-right-top"
                "background-left-top nav-selected background-right-top"
                "background-left-top nav-selected background-right-top"` :
            props.television ? 
                `"vectra title clock"
                "background-left-top nav-selected-top background-right-top"
                "nav-left nav-selected nav-right"
                "background-left-bottom nav-selected-bottom background-right-bottom"` :
            props.program ? 
                `"vectra background-right-bottom clock"
                "background-left-top background-left-bottom background-right-top"
                "background-left-top background-left-bottom background-right-top"
                "background-left-top background-left-bottom background-right-top"` : ""}
    }
`


export const Popup = styled.div`
    position: relative;
    z-index: 4;
    display: ${props => props.display ? "flex" : "none"};
    height: 685px;
    width: 1280px;
    background-color: ${
        props =>
            props.red ? "#4b0301" :
            props.green ? "#024501" :
            props.blue ? "#002138" : ""};
    margin: 0;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    text-align: center;
`