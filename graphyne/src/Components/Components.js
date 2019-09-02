import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    z-index: 2;
    display: grid;
    height: 720px;
    width: 1280px;
    background-color: #1a1919;
    margin: 0;
    grid-template-rows: ${props => props.theme.rows}
    grid-template-columns: ${props => props.theme.columns}
    overflow: hidden;
    grid-template-areas: ${props => props.theme.area}
`

export const menu = {
    area: `"vectra nav-selected clock"
    "background-left-top nav-selected background-right-top"
    "nav-left nav-selected nav-right"
    "background-left-bottom nav-selected background-right-bottom"`,
    rows: `4fr 15fr auto 142px`,
    columns: `270px auto 1fr`,
}

export const settings = {
    area: `"vectra nav-selected clock"
    "background-left-top nav-selected background-right-top"
    "background-left-top nav-selected background-right-top"
    "background-left-top nav-selected background-right-top"`,
    rows: `4fr 15fr auto 142px`,
    columns: `270px 1fr 1fr`,
}
