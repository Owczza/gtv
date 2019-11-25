import styled from "styled-components";

export const Main = styled.div`
    position: relative;
    z-index: 2;
    display: grid;
    height: 720px;
    width: 1280px;
    background-color: #1a1919;
    margin: 0;
    grid-template-rows: ${props =>
      props.menu
        ? "106px 1fr 87px 142px"
        : props.settings
        ? "106px 1fr auto 142px"
        : props.television
        ? "106px 1fr auto 142px"
        : props.program
        ? "106px 1fr auto 142px"
        : props.table
        ? "106px 1fr auto 142px"
        : ""}
    grid-template-columns: ${props =>
      props.files
        ? "270px 400px 1fr"
        : props.menu
        ? "270px auto 1fr"
        : props.settings
        ? "270px 3fr 2fr"
        : props.television
        ? "270px 505px 505px"
        : props.program
        ? "2fr 3fr 3fr"
        : props.table
        ? "270px 1fr 1fr"
        : ""}
    overflow: hidden;
    grid-template-areas: ${props =>
      props.menu
        ? `"vectra title clock"
                "background-left-top nav-selected-top background-right-top"
                "nav-left nav-selected nav-right"
                "background-left-bottom nav-selected-bottom background-right-bottom"`
        : props.settings
        ? `"vectra nav-selected clock"
                "background-left-top nav-selected background-right-top"
                "background-left-top nav-selected background-right-top"
                "background-left-top nav-selected background-right-top"`
        : props.television
        ? `"vectra title clock"
                "background-left-top nav-selected-top background-right-top"
                "nav-left nav-selected nav-right"
                "background-left-bottom nav-selected-bottom background-right-bottom"`
        : props.program
        ? `"vectra background-right-bottom clock"
                "background-left-top background-left-bottom background-right-top"
                "background-left-top background-left-bottom background-right-top"
                "background-left-top background-left-bottom background-right-top"`
        : props.table
        ? `"vectra background-right-bottom clock"
                "background-left-top background-left-top background-left-top"
                "nav-selected nav-selected nav-selected"
                "background-left-bottom background-left-bottom background-left-bottom"`
        : ""}
    
`;

export const Popup = styled.div`
  position: relative;
  z-index: 4;
  display: ${props => (props.flex ? "flex" : "none")};
  height: 685px;
  width: 1280px;
  background-color: ${props =>
    props.red
      ? "#4b0301"
      : props.green
      ? "#024501"
      : props.blue
      ? "#002138"
      : ""};
  margin: 0;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  text-align: center;
`;

export const Button = styled.button`
  ::before {
    content: "⬅ Powrót";
  }

  :hover {
    background-color: #00aeffb3;
    border: 1px solid #00aeffb3;
    color: #ffffff;
  }

  :active {
    box-shadow: inset 0 2px 4px 2px #008fd1;
    background-color: #00aeffb3;
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
  -webkit-transition: background 0.5s, color 0.5s, border 0.5s;
`;

export const Text = styled.div`
  :hover {
    ${props =>
      props.list && !props.mute && !props.disabled
        ? "color: #008fd1; font-weight: 600"
        : ""}}

  font-family: "Nunito Sans", sans-serif; 
  text-align: ${props =>
    props.right ? "right" : props.center ? "center" : "left"}

  text-transform: ${props => (props.lowercase ? "lowercase" : "uppercase")};

  color: ${props =>
    props.white
      ? "#ffffff"
      : props.blue
      ? "#008fd1"
      : props.green
      ? "#206f3a"
      : props.mute
      ? "#989fa973"
      : "#989fa9"}

  font-weight: ${props => (props.bold ? 600 : props.light ? 200 : 400)};
  
  -webkit-transform: scale(1, 1.1);
  -moz-transform: scale(1, 1.1);
  -ms-transform: scale(1, 1.1);
  -o-transform: scale(1, 1.1);
  transform: scale(1, 1.1);

  font-size: ${props =>
    props.large || props.popupText ? "24px" : props.small ? "13px" : "17px"};  

  transition: font-weight 0.2s, color 0.2s, text-shadow 0.2s;
  -o-transition: font-weight 0.2s, color 0.2s, text-shadow 0.2s;
  -ms-transition: font-weight 0.2s, color 0.2s, text-shadow 0.2s;
  -moz-o-transition: font-weight 0.2s, color 0.2s, text-shadow 0.2s;
  -webkit-transition: font-weight 0.2s, color 0.2s, text-shadow 0.2s;
`;

export const Header = styled(Text)`
  :hover {
    text-shadow: ${props =>
      props.center
        ? "-1px 0 7px #21b9ff, 0 1px 7px #21b9ff, 1px 0 7px #21b9ff, 0 -1px 7px #21b9ff"
        : ""};
    color: ${props => props.disabled ? "" : "#008fd1"}
  }

  font-size: 65px;
  color: ${props => (props.center ? "#008fd1" : "#989fa9")};
  font-weight: ${props => (props.center || props.disabled ? 600 : 200)};
  margin: 0 30px;
  white-space: nowrap;
`;

export const Title = styled(Text)`
  font-size: 43px;
  text-transform: ${props => (props.list ? "none" : "uppercase")};
  font-weight: 200;
  margin-left: ${props => (props.noMargin ? "" : "20px")};
`;

export const ChannelName = styled(Text)`
  font-size: 30px;
  color: #008fd1;
  font-weight: 600;
`;

export const ProgramTitle = styled(Text)`
  text-transform: none;
  font-size: 24px;
  color: #008fd1;
  font-weight: 200;
`;

export const Description = styled(Text)`
  text-transform: none;
  font-size: 20px;
  color: #ffffff;
`;

export const Info = styled(Text)`
  text-transform: none;
  font-size: 15px;
`;

export const Separator = styled.div`
  background-color: #989fa9;
  padding: 2px;
  margin: 5px 100px 5px 0px;
`;

export const Container = styled.div`
  display: ${props => props.display};
`;

export const Icon = styled.img`
  width: 75px;
`;
