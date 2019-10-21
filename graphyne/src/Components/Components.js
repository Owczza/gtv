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
    rows: `106px 1fr 87px 142px`,
    columns: `270px auto 1fr`,
}

export const settings = {
    area: `"vectra nav-selected clock"
    "background-left-top nav-selected background-right-top"
    "background-left-top nav-selected background-right-top"
    "background-left-top nav-selected background-right-top"`,
    rows: `106px 1fr auto 142px`,
    columns: `270px 3fr 2fr`,
}

export const television = {
    area: `"vectra title clock"
    "background-left-top nav-selected-top background-right-top"
    "nav-left nav-selected nav-right"
    "background-left-bottom nav-selected-bottom background-right-bottom"`,
    rows: `106px 1fr auto 142px`,
    columns: `270px 505px 505px`,
}

export const program = {
    area: `"vectra background-right-bottom clock"
    "background-left-top background-left-bottom background-right-top"
    "background-left-top background-left-bottom background-right-top"
    "background-left-top background-left-bottom background-right-top"`,
    rows: `106px 1fr auto 142px`,
    columns: `2fr 3fr 3fr`,
}

export const Red = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    height: 720px;
    width: 1280px;
    background-color: #e80b0b;
    margin: 0;
    align-items: center;
    justify-content: center;
`
