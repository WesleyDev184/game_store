import styled, { keyframes } from 'styled-components'

interface SideBarProps {
    isSideBarOpen: boolean
}

const toggleAnimation = keyframes`
  0% {
    font-size: 10px;
  }
  100% {
    font-size: 1.5em;
  }
`

export const ContainerSideBar = styled.div<SideBarProps>`
    background-color: ${props => props.theme.background.secondary};
    width: ${props => (props.isSideBarOpen ? '200px' : '70px')};
    height: 100vh;
    padding: 20px 0;
    transition: width 0.3s;
    display: flex;
    flex-direction: column;

    button {
        width: 25px;
        height: 25px;
        font-size: 20px;
    }
`
export const LogoContainer = styled.div<SideBarProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100px;
    width: 100%;

    h2 {
        display: ${props => (props.isSideBarOpen ? 'block' : 'none')};
        animation: ${toggleAnimation} 0.4s;
    }

    img {
        ${props =>
            props.isSideBarOpen
                ? 'height: 80px; width: 80px;'
                : 'height: 40px; width: 40px;'}
        transition: height 0.3s, width 0.3s;
    }
`

export const MenuContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    margin-top: 20px;
    padding: 20px 15px;
    width: 100%;
    height: 100%;
`

export const MenuItem = styled.li<SideBarProps>`
    display: flex;
    justify-content: start;
    width: auto;
    height: 50px;
    ${props => (props.isSideBarOpen ? 'padding-left:10%;' : 'margin: 0 auto;')};

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.text.secondary};
        text-decoration: none;

        &:hover {
            color: ${props => props.theme.colors.text.primary};
            transition: color 0.4s;
        }

        svg {
            margin-right: ${props => (props.isSideBarOpen ? '20px' : '0')};
            font-size: 1.3em;
        }

        span {
            font-size: 1.5em;
            display: ${props => (props.isSideBarOpen ? 'block' : 'none')};
            animation: ${toggleAnimation} 0.4s;
        }
    }
`
