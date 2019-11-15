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
            props.program ? "106px 1fr auto 142px" : 
            props.table ? "106px 1fr auto 142px" : ""}
    grid-template-columns: ${
        props => 
            props.menu ? "270px auto 1fr" :
            props.settings ? "270px 3fr 2fr" :
            props.television ? "270px 505px 505px" :
            props.program ? "2fr 3fr 3fr" : 
            props.table ? "270px 1fr 1fr" : ""}
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
                "background-left-top background-left-bottom background-right-top"` : 
            props.table ? 
                `"vectra background-right-bottom clock"
                "background-left-top background-left-top background-left-top"
                "nav-selected nav-selected nav-selected"
                "background-left-bottom background-left-bottom background-left-bottom"` : ""}
    }
`


export const Popup = styled.div`
    position: relative;
    z-index: 4;
    display: ${props => props.flex ? "flex" : "none"};
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

export const Button = styled.button`
    ::before {
        content: "⬅ Powrót"
    }

    :hover {
        background-color: #008fd1;
        border: 1px solid #ffffff;
        color: #ffffff;
    }

    background-color: #ffffff;
    border: 1px solid #008fd1;
    color: #008fd1;
    border-radius: 5px;
    padding: 4px 13px 5px 10px;
    font-size: 16px;
    
    transition: background 0.5s, color 0.5s, border 0.5s;
    -o-transition: background 0.5s, color 0.5s, border 0.5s;
    -ms-transition: background 0.5s, color 0.5s, border 0.5s;
    -moz-o-transition: background 0.5s, color 0.5s, border 0.5s;
    -webkit-transition: background 0.5s, color 0.5s, border 0.5s;`