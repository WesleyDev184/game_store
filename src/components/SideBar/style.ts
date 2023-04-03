import styled, { css, keyframes } from 'styled-components'

interface SideBarProps {
    isSideBarOpen: boolean
}

interface MenuItemProps {
    isSideBarOpen: boolean
    activeRouter: boolean
}

const toggleAnimation = keyframes`
  0% {
    font-size: 10px;
  }
  100% {
    font-size: 1.5em;
  }
`

export const ContainerSideBar = styled.nav<SideBarProps>`
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

export const HideSideBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;

    span {
        font-size: 1.5em;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-left: 10px;
        }
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
        animation: ${toggleAnimation} 0.3s ease-in;
    }

    img {
        ${props =>
            props.isSideBarOpen
                ? 'height: 80px; width: 80px;'
                : 'height: 40px; width: 40px;'}
        transition: height 0.3s, width 0.3s;
    }
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    margin-top: 20px;
    padding: 20px 15px;
    width: 100%;
    height: 100%;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
`

export const HandleThemeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    margin-top: 3em;

    svg {
        font-size: 2em;
    }
`

export const MenuItem = styled.li<MenuItemProps>`
    display: flex;
    justify-content: ${props =>
        props.isSideBarOpen ? 'flex-start' : 'center'};
    width: 100%;
    height: 60px;
    ${props => (props.isSideBarOpen ? 'padding-left:10%;' : 'margin: 0 auto;')};

    ${({ activeRouter }) =>
        activeRouter &&
        css`
            background: linear-gradient(
                83.93deg,
                #a100ed -6.08%,
                #c300ff 67.34%,
                rgba(58, 0, 255, 0) 158.91%
            );
            filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25));
            border-radius: 15px;
            &:hover {
                opacity: 0.8;
            }
        `}

    ${({ activeRouter }) =>
        !activeRouter &&
        css`
            &:hover {
                opacity: 0.8;
            }
        `}

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props =>
            props.activeRouter
                ? props.theme.colors.text.reverse
                : props.theme.colors.text.primary};
        text-decoration: none;

        &:hover {
            color: ${props => props.theme.colors.text.secondary};
            transition: color 0.4s;
        }

        svg {
            margin-right: ${props => (props.isSideBarOpen ? '20px' : '0')};
            font-size: 1.3em;
        }

        span {
            font-size: 1.5em;
            display: ${props => (props.isSideBarOpen ? 'block' : 'none')};
            transition: 0.3s ease-in;
        }
    }
`
